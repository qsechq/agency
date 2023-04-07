<template>
    <header class="header">
        <div class="container">
            <header-component />
        </div>
    </header>
    <swiper id="swiper" :pagination="true" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
        :navigation="true" :modules="modules">
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide> 
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
        </swiper-slide>
    </swiper>
    <catalog-component />
</template>

<script>
import { HeaderComponent } from '../../components/HeaderComponent'
import { CatalogComponent } from '@/components/CatalogComponent'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
    name: 'CatalogView',
    components: {
        HeaderComponent,
        Swiper,
        SwiperSlide,
        CatalogComponent
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Navigation]
        };
    },
}
</script>

<style lang="scss" src="./catalog-view.scss"></style>