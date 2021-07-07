import { App, Directive } from 'vue';

export type SFCWithInstall<T> = T & { install(app: App): void };

export type TRadiumDirectvie = Directive & { name: string } & {
  [key: string]: unknown;
};
