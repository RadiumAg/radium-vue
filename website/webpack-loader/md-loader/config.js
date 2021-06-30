const Config = require('markdown-it-chain');
const markDownAnchor = require('markdown-it-anchor');
const markDownContainer = require('markdown-it-container');
const hljs = require('highlight.js');
module.exports = () => {
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
        permalink: true,
        permalinkBefore: true,
      },
    ])
    .end()
    .plugin('container')
    .use(markDownContainer, [
      'demo',
      {
        validate: params => {
          return params.trim().match(/^demo\s*(.*)$/);
        },
        render: (tokens, index) => {
          if (tokens[index].nesting === 1) {
            const content = tokens[index + 1].content;
            return `<demo>
            <template v-slot:doc>${content}</template>
            <template v-slot:source>
            <pre v-pre><code class="html hljs xml">${md
    .toMd()
    .utils.escapeHtml(content)}
            </code></pre>
            </template>`;
          } else {
            return '</demo>';
          }
        },
      },
    ])
    .end();
  return md.toMd();
};
