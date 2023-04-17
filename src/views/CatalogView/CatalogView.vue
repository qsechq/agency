<template>
    <header class="header">
        <div class="container">
            <header-component @openBasket="openBasket"/>
        </div>
    </header>
    <swiper id="swiper" :pagination="true" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
        :navigation="true" :modules="modules">
        <swiper-slide>
            <div class="x-breadcrumbs">
                <breadcrumbs-component></breadcrumbs-component>
            </div>
            <img src="../../assets/slider.png" alt="product" class="swiper__img">
            <div class="swiper__block">
                <h1 class="swiper__block-title">Краски</h1>
                <div class="swiper__block-text">
                    Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
                </div>
            </div>
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
                    <basket-component @closeModal="closeModal"/>
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
import { BreadcrumbsComponent } from '@/components/BreadcrumbsComponent'
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
        BasketComponent,
        BreadcrumbsComponent
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
        const closeModal = () => {
            isShow.value = false
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Navigation],
            isShow,
            openBasket,
            closeModal
        };
    },
}
</script>

<style lang="scss" src="./catalog-view.scss"></style>