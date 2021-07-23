export interface InstallConfig {
  zIndex: number;
}

let $RADIUM = {};

const setConfig = (option: InstallConfig) => {
  $RADIUM = option;
};

const getConfig = (key: keyof InstallConfig) => {
  return $RADIUM[key];
};

export { setConfig, getConfig };
