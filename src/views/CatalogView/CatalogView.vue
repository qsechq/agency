<template>
    <header class="header">
        <div class="container">
            <header-component @openBasket="openBasket"/>
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
    <teleport to="#basket">
        <modal-component :isShow="isShow">
            <template #content>
                <div class="basket">
                    <basket-component />
                </div>
            </template>
        </modal-component>
    </teleport>
</template>

<script>
import { HeaderComponent } from '../../components/HeaderComponent'
import { BasketComponent } from '../../components/BasketComponent'
import { ModalComponent } from '../../components/ModalComponent'
import { CatalogComponent } from '@/components/CatalogComponent'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
    name: 'CatalogView',
    components: {
        HeaderComponent,
        Swiper,
        SwiperSlide,
        CatalogComponent,
        ModalComponent,
        BasketComponent
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        let isShow = ref(false)
        const openBasket = () => {
            isShow.value = true
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Navigation],
            isShow,
            openBasket
        };
    },
}
</script>

<style lang="scss" src="./catalog-view.scss"></style>