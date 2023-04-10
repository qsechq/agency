<template>
    <div class="c-basket">
        <div class="basket__header">
            <h3 class="basket__title">Корзина</h3>
            <button class="basket__btn" @click="$emit('closeModal')">
                <my-icon name="CloseSvg" class="basket__icon" />
            </button>
        </div>
        <div class="basket__inner" v-if="order.order.length > 0">
            <div class="basket__control">
                <div class="basket__control-count">{{ order.order.length }} товара</div>
                <button @click="removeOrder" class="basket__control-remove">очистить список</button>
            </div>
            <ul class="basket__list">
                <li class="basket__item" v-for="product in order.order" :key="product.id">
                    <basket-item :id="product.id" :name="product.name" :price="product.price" :quantity="product.quantity"
                        @onRemoveProductAtCart="removeProductAtCart(product.id)" />
                </li>
            </ul>
        </div>
        <h3 class="basket__title" v-else>
            Вы ничего не добавили в корзину
        </h3>
    </div>
</template>

<script>
import { BasketItem } from '../BasketItem'
import { MyIcon } from '../../icons'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'BasketComponent',
    emits: ['closeModal'],
    components: {
        MyIcon,
        BasketItem
    },
    setup() {
        const { dispatch, state } = useStore()
        const order = computed(() => state.order)
        const removeProductAtCart = async (id) => {
            await dispatch('order/removeProductAtCart', id)
        }
        return {
            order,
            removeProductAtCart
        }
    }
}
</script>

<style lang="scss" scoped src="./basket-component.scss"></style>