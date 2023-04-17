<template>
    <div class="container">
        <div class="catalog__title">
            <breadcrumbs-component class="catalog__title-breadcrumbs" />
            <h1 class="catalog__title-h1">
                Краски
            </h1>
        </div>
        <section class="catalog-section">
            <div class="catalog">
                <div class="fillter" v-if="visibleFillter >= 990">
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
import { BreadcrumbsComponent } from '@/components/BreadcrumbsComponent'
import { useStore } from 'vuex'
import { computed, onMounted, ref, watchEffect, onBeforeUnmount } from 'vue'


export default {
    name: 'CatalogComponent',
    components: {
        FillterType,
        SettingsComponent,
        CatalogList,
        BreadcrumbsComponent
    },
    setup() {
        const { dispatch, getters } = useStore()

        onMounted(async () => {
            await dispatch('products/getProducts')
            visibleFillter.value = window.innerWidth
        })
        const visibleFillter = ref(0)
        const resizeWidth = () => {
            visibleFillter.value = window.addEventListener('resize', () => {
                visibleFillter.value = window.innerWidth
            });
        }
        watchEffect(() =>
            visibleFillter.value = resizeWidth()
        ),
            onBeforeUnmount(() => {
                visibleFillter.value = window.removeEventListener('resize', () => {
                    visibleFillter.value = window.innerWidth
                })
            })
        return {
            sortedProducts: computed(() => getters['products/sortedAndFiltered']),
            visibleFillter,
            resizeWidth
        }
    }
}
</script>

<style lang="scss" scoped src="./catalog-component.scss"></style>