<template>
    <div class="c-basket">
        <div class="basket__header">
            <h3 class="basket__title">Корзина</h3>
            <button class="basket__btn">
                <my-icon name="CloseSvg" class="basket__icon" />
            </button>
        </div>
        <div class="basket__inner">
            <div class="basket__control">
                <div class="basket__control-count">4 товара</div>
                <button class="basket__control-remove">очистить список</button>
            </div>
            <ul class="basket__list">
                <li class="basket__item">
                    <basket-item />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { BasketItem } from '../BasketItem'
import { MyIcon } from '../../icons'

    export default {
        name: 'BasketComponent',
        components: {
            MyIcon,
            BasketItem
        }
    }
</script>

<style lang="scss" scoped src="./basket-component.scss">

</style>