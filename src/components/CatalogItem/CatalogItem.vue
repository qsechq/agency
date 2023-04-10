<template>
    <div class="item">
        <img src="../../assets/Photo.png" alt="" class="item__img">
        <div class="item__name">{{ name }}</div>
        <div class="item__footer">
            <div class="item__footer-price">{{ price }} ₽</div>
            <button class="item__footer-btn" @click="$emit('onAddToCart', id)">
                <my-icon name="PlusSvg" class="item__footer-icon" />
            </button>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
    name: 'CatalogItem',
    emits: ['onAddToCart'],
    props: {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    components: {
        MyIcon
    }
}
</script>

<style lang="scss" scoped src="./catalog-item.scss"></style>