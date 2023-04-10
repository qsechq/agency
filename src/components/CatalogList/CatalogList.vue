<template>
    <ul class="c-catalog__list">
        <li class="catalog__item" v-for="product in products.products" :key="product.id">
            <catalog-item :name="product.name" :price="product.price"/>
        </li>
    </ul>
</template>

<script>
import { CatalogItem } from '../CatalogItem'
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
        }
    }
</script>

<style lang="scss" scoped src="./catalog-list.scss">

</style>