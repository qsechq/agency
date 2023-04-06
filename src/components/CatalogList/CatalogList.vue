<template>
    <ul class="c-catalog__list">
        <li class="catalog__item" v-for="n in 10" :key="n">
            <catalog-item />
        </li>
    </ul>
</template>

<script>
import { CatalogItem } from '../CatalogItem'
    export default {
        name: 'CatalogList',
        components: {
            CatalogItem
        }
    }
</script>

<style lang="scss" scoped src="./catalog-list.scss">

</style>