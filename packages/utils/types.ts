import { App, Directive } from 'vue';

export type SFCWithInstall<T> = T & { install(app: App): void };

export type TRadiumDirective<T, Y> = Directive<T, Y> & { name: string } & {
  [key: string]: unknown;
};
