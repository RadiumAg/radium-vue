import { compile } from 'vue';
import MarkdownIt from 'markdown-it';
import container from 'markdown-it-container';

const codePreview = (md: MarkdownIt) => {
  md.use(container, 'demo', {
    validate: params => {
      return params.trim().match(/^demo(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        let nextTokens = tokens[++idx];
        let content = '';
        while (nextTokens.nesting !== -1) {
          content += nextTokens.content;
          nextTokens = tokens[++idx];
        }

        if (content.includes('template') || content.includes('script')) {
          const demoComponent = `<script></script>`;
        } else {
          return `<vp-example>${content}</vp-example>`;
        }
      } else {
        return '';
      }
    },
  });
};

export { codePreview };
