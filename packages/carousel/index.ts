import {App} from 'vue'
import { SFCWithInstall } from '@radium-vue/';
import Carousel from './src/carousel.vue';
import { Cascader } from 'element-ui';


Carousel.install = (app:App): void => {
    app.component(Carousel.name,Carousel)
}


const _Carousel:SFCWithInstall<typeof Cascader> = Cascader;

export default _Carousel;