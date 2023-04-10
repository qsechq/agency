<template>
    <div class="c-settings">
        <div class="settings__count">
           {{ products.products.length }} товаров
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
        const { state } = useStore()
        const products = computed(() => state.products)
        return {
            products
        }
    }
}
</script>

<style lang="scss" scoped src="./settings-compoent.scss"></style>