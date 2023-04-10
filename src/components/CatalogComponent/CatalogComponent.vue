<template>
    <div class="container">
        <section class="catalog-section">
            <div class="catalog">
                <div class="fillter">
                    <fillter-type />
                </div>
                <div class="wrapp">
                    <div class="settings">
                        <settings-component />
                    </div>
                    <div class="catalog__list">
                        <catalog-list :products="sortedProducts" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { FillterType } from '../FillterType'
import { SettingsComponent } from '../SettingsComponent'
import { CatalogList } from "../CatalogList"
import { useStore } from 'vuex'
import { computed, onMounted  } from 'vue'

export default {
    name: 'CatalogComponent',
    components: {
        FillterType,
        SettingsComponent,
        CatalogList
    },
    setup() {
        const { dispatch, getters } = useStore()
        const sortedProducts = computed(() => getters.sortedProducts)
        onMounted( () => {
            dispatch('products/getProducts')
            console.log(getters);
        })
        return {
            sortedProducts
        }
    }
}
</script>

<style lang="scss" scoped src="./catalog-component.scss"></style>