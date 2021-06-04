import {App} from 'vue'
import { SFCWithInstall } from '@radium-vue/utils/types';
import Carousel from './src/carousel.vue';


Carousel.install = (app:App): void => {
    app.component(Carousel.name,Carousel)
}
