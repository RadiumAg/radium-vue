const LANGUAGE_TOKEN = 'RADIUM_LANGUAGE';

export function getLocalLanguage() {
  return localStorage.getItem(LANGUAGE_TOKEN) || 'zh';
}
