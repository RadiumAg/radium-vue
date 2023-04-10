import MarkdownIt from 'markdown-it';
import container from 'markdown-it-container';

const codePreview = (md: MarkdownIt) => {
  md.use(container, 'demo', {
    validate: (params) => {
      return params.trim().match(/^demo(.*)$/);
    },
    render(tokens, idx) {
      let m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      console.log(moveTo);

      if(tokens[idx].nesting === 1) {
        console.log(tokens);
      }
    },
  });
};

export { codePreview };
