module.exports.getScriptInline = (source = '') => {
  return source.trim().match(/<script>(.|\n)+<\/script>/g)
    ? source.trim().match(/<script>(.|\n)+<\/script>/g)[0]
    : null;
};

module.exports.getTemplateInline = (source = '') => {
  const scriptContent = this.getScriptInline(source);
  if (scriptContent) {
    return source
      .trim()
      .replace(scriptContent, '')
      .replace(/<template>/, '')
      .replace(/<\/template>/, '');
  }
  return source
    .trim()
    .replace(/<template>/, '')
    .replace(/<\/template>/, '');
};
