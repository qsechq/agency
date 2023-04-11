<template>
    <div class="c-settings">
        <div class="settings__count">
           {{ products.length }} товаров
        </div>
        <div class="sort">
            <sort-component />
        </div>
    </div>
</template>

<script>
import { SortComponent } from "../SortComponent"
import { useStore } from 'vuex'
import { computed } from "vue"

export default {
    name: 'SettingsComponent',
    components: {
        SortComponent
    },
    setup() {
        const { getters } = useStore()
        const products = computed(() => getters['products/sortedAndFiltered'])
        return {
            products
        }
    }
}
</script>

<style lang="scss" scoped src="./settings-compoent.scss"></style>