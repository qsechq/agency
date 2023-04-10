<template>
    <ul class="c-catalog__list">
        <li class="catalog__item" v-for="product in products" :key="product.id">
            <catalog-item :id="product.id" :name="product.name" :price="product.price" @onAddToCart="addToCart(product.id)"/>
        </li>
    </ul>
</template>

<script>
import { CatalogItem } from '../CatalogItem'
import { useStore } from 'vuex'

export default {
    name: 'CatalogList',
    props: {
        products: {
            type: Object,
            required: true
        }
    },
    components: {
        CatalogItem
    },
    setup() {
        const { dispatch } = useStore()
        const addToCart = async (id) => {
            await dispatch('products/addToCart', id )
        }
        return {
            addToCart,

        }
    }
}
</script>

<style lang="scss" scoped src="./catalog-list.scss"></style>