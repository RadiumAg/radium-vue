module.exports.getScriptInline = (source = '') => {
  return source.trim().match(/<script lang="ts">(.|\n)+<\/script>/g)
    ? source.trim().match(/<script lang="ts">(.|\n)+<\/script>/g)[0]
    : null;
};

module.exports.getTemplateInline = (source = '') => {
  const scriptContent = this.getScriptInline(source);
  if (scriptContent) {
    return source.replace(scriptContent, '');
  }
  return source;
};
