<template>
    <div class="c-settings">
        <div class="settings__fillter">
            <a @click.prevent="openModal()" href="#" class="settings__fillter-btn">ФИЛЬТРЫ</a>
            <teleport to="#fillter">
                <modal-component :isShow="isShow">
                    <template #content>
                        <div class="fillter">
                            <a @click.prevent="closeModal()" href="#" class="fillter__modal-btn"></a>
                            <fillter-type />
                        </div>
                    </template>
                </modal-component>
            </teleport>
        </div>
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
import { FillterType } from '../FillterType'
import { useStore } from 'vuex'
import { computed, ref } from "vue"
import { ModalComponent } from '../../components/ModalComponent'

export default {
    name: 'SettingsComponent',
    components: {
        SortComponent,
        FillterType,
        ModalComponent
    },
    setup() {
        const { getters } = useStore()
        const products = computed(() => getters['products/sortedAndFiltered'])
        const isShow = ref(false)
        const openModal = () => {
            isShow.value = true
        }
        const closeModal = () => {
            isShow.value = false
        }
        return {
            products,
            openModal,
            isShow,
            closeModal
        }
    }
}
</script>

<style lang="scss" scoped src="./settings-compoent.scss"></style>