<template>
    <div class="c-basket__item">
        <img class="basket__item-img" src="../../assets/Photo.png" alt="">
        <div class="basket__item-main">
            <div class="basket__item-wrap">
                <div class="basket__item-name">{{ name }}</div>
                <div class="bakset__item-price">{{ price }} ₽</div>
            </div>
            <div class="basket__item-control">
                <button class="basket__item-btn" @click="$emit('onDecreaseQuantity', id)"><my-icon name="MinusSvg" class="basket__item-icon" /></button>
                <span class="basket__item-quantity">{{ quantity }}</span>
                <button class="basket__item-btn" @click="$emit('onIncreaseQuantity', id)"><my-icon name="PlusSvg" class="basket__item-icon" /></button>
                <button class="basket__item-remove" @click="$emit('onRemoveProductAtCart', id)">
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
    },
    emits: ['onRemoveProductAtCart'],
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped src="./basket-item.scss"></style>