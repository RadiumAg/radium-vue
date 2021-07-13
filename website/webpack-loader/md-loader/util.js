const templateRegex = /<template>([\s\S]+)<\/template>/g;
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
      .replace(templateRegex, '$1');
  }
  return source.trim().replace(templateRegex, '$1');
};

module.exports.scriptRegex = /<script>([\s\S]+)<\/script>/g;
