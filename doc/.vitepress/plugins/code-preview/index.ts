import { readFileSync } from 'fs';
import { resolve } from 'path';
import Prism from 'prismjs';
import container from 'markdown-it-container';

import type MarkdownIt from 'markdown-it';

const codePreview = (md: MarkdownIt) => {
  md.use(container, 'demo', {
    validate: params => {
      return params.trim().match(/^demo(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        let nextTokens = tokens[++idx];
        let examplePath = '';
        while (nextTokens.nesting !== -1) {
          examplePath += nextTokens.content;
          nextTokens = tokens[++idx];
        }

        const resolvePath = `../../examples/${examplePath}.vue`.replaceAll(
          '\\',
          '/',
        );

        const source = readFileSync(
          resolve(__dirname, '../', resolvePath),
        ).toString();

        return `<vp-example path="${resolvePath}" source="${encodeURIComponent(
          Prism.highlight(source, Prism.languages.javascript, 'javascript'),
        )}">`;
      } else {
        return '</vp-example>';
      }
    },
  });
};

export { codePreview };
