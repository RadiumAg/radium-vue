import type { App, Directive } from 'vue';

type SFCWithInstall<T> = T & { install(app: App): void };

type RadiumDirective<T, Y> = Directive<T, Y> & { name: string } & {
  [key: string]: unknown;
};

export { SFCWithInstall, RadiumDirective };
