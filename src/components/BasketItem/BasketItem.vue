<template>
    <div class="c-basket__item">
        <img class="basket__item-img" src="../../assets/Photo.png" alt="">
        <div class="basket__item-main">
            <div class="basket__item-wrap">
                <div class="basket__item-name">Краска Wallquest, Brownsone MS90102</div>
                <div class="bakset__item-price">9600 ₽</div>
            </div>
            <div class="basket__item-control">
                <button class="basket__item-btn"><my-icon name="MinusSvg" class="basket__item-icon" /></button>
                <span class="basket__item-quantity">1</span>
                <button class="basket__item-btn"><my-icon name="PlusSvg" class="basket__item-icon" /></button>
                <button class="basket__item-remove">
                    <my-icon name="CloseSvg" class="basket__item-icon" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
    name: 'BasketItem',
    components: {
        MyIcon
    }
}
</script>

<style lang="scss" scoped src="./basket-item.scss"></style>