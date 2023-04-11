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
                        @onRemoveProductAtCart="removeProductAtCart(product.id)"
                        @onIncreaseQuantity="increaseQuantity(product.id)"
                        @onDecreaseQuantity="decreaseQuantity(product.id)" />
                </li>
            </ul>
            <div class="basket__footer">
                <div class="basket__footer-price">{{ price() }}</div>
            </div>
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
import { computed, onMounted } from 'vue'

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
        const increaseQuantity = async (id) => {
            await dispatch('order/increaseQuantity', id)
        }
        const price = () => {
            let obj = order.value.order
            console.log(obj.reduce((a, b) => a + (b['price'] || 0), 0));
            return obj.reduce((a, b) => a + (b['price'] || 0), 0);
        }
        const decreaseQuantity = async (id) => {
            await dispatch('order/decreaseQuantity', id)
        }
        onMounted(() => {
            price()
        })
        return {
            order,
            removeProductAtCart,
            increaseQuantity,
            decreaseQuantity,
            price
        }
    }
}
</script>

<style lang="scss" scoped src="./basket-component.scss"></style>