/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable  prettier/prettier */

const Config = require('markdown-it-chain');
const markDownAnchor = require('markdown-it-anchor');
const markDownContainer = require('markdown-it-container');
const hljs = require('highlight.js');
const slugify = require('transliteration').slugify;
const { compileTemplate, TemplateCompiler } = require('@vue/compiler-sfc');
const { getScriptInline, getTemplateInline,scriptRegex } = require('./util');

module.exports = () => {
  let id = 0;
  let components = {};
  const highlight = (str, lang) => {
    if (!lang || !hljs.getLanguage(lang)) {
      return '<pre><code class="hljs">' + str + '</code></pre>';
    }
    const html = hljs.highlight(lang, str, true, undefined).value;
    return `<pre><code class="hljs language-${lang}">${html}</code></pre>`;
  };
  const md = new Config();

  md.options
    .html(true)
    .linkify(true)
    .highlight(highlight)
    .end()
    .plugin('achor')
    .use(markDownAnchor, [
      {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true,
      },
    ])
    .end()
    .plugin('container')
    .use(markDownContainer, [
      'demo',
      {
        // 匹配::: demo标签
        validate: params => {
          return params.trim().match(/^demo\s*(.*)$/);
        },
        // the ::: demo  content
        render: (tokens, index) => {
          if (tokens[index].nesting === 1) {
            const content = tokens[index + 1].content;
            const scriptString = getScriptInline(content);
            const templateString = getTemplateInline(content);
            let democomponentExport = '';
            id = id + 1;
            const compileOption = {
              id: id.toString(),
              source: `<demo>
                <template v-slot:doc>${templateString}</template>
                <template v-slot:source>
                  <pre v-pre>
                    <code class="language-html">${md
    .toMd()
    .utils.escapeHtml(content)}
                    </code>
                  </pre>
                </template>
              </demo>
                `,
              filename: 'inline-component',
              compiler: TemplateCompiler,
              compilerOptions: {
                mode: 'function',
              },
            };

            if (scriptString) {
              democomponentExport = scriptString
                .replace(scriptRegex, '$1')
                .replace(
                  /import ({.+}) from 'vue'/g,
                  (s, s1) => `const ${s1} = Vue`,
                )
                .replace(/export\s+default/, 'const democomponentExport =')
                .replace(
                  /import ({.*}) from 'radium-vue'/g,
                  (s, s1) => `const ${s1} = require('radium-vue')`,
                );
            } else {
              democomponentExport = 'const democomponentExport = {}';
            }

            const code = compileTemplate(compileOption)
              .code
              .replace('return function render','function render')
              .replace(/<\/template>/g, '<\\/template>')
              .replace('</script>','<\\/script>');

            console.log(code);
            components[`docDemo${id}`] = `(function() {
              const Vue = require('vue');
              ${democomponentExport}
              ${code}
              return {
                render,
                ...democomponentExport
              }
             })()`;
            return `<doc-demo${id}>`;
          }
          return `</doc-demo${id}>`;
        },
      },
    ]);
  return [md.toMd(), components];
};
