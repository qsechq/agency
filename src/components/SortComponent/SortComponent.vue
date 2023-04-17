<template>
    <div class="c-sort">
        <a v-if="selectedSort === 'priceUp'" @click.prevent="openModal()" href="#" class="sort__btn sort__active" ref="sort">СНАЧАЛА ДОРОГИЕ</a>
        <a v-if="selectedSort === 'price'" @click.prevent="openModal()" href="#" class="sort__btn sort__active" ref="sort">СНАЧАЛА НЕДОРОГИЕ</a>
        <a v-if="selectedSort === 'popular'" @click.prevent="openModal()" href="#" class="sort__btn sort__active" ref="sort">СНАЧАЛА ПОПУЛЯРНЫЕ</a>
        <a v-if="selectedSort === 'new'" @click.prevent="openModal()" href="#" class="sort__btn sort__active" ref="sort">СНАЧАЛА НОВЫЕ</a>
        <teleport to="#sort">
            <modal-component :isShow="isShow" class="modal__sort">
                <template #content>
                    <ul :style="{ top: openModal() + 'px'}" class="sort__list" ref="sortList">
                        <li :class="{active : selectedSort === 'priceUp'}" class="sort__item">
                            <button @click="changeSort('priceUp')" class="sort__btn">СНАЧАЛА ДОРОГИЕ</button>
                        </li>
                        <li :class="{active : selectedSort === 'price'}" class="sort__item">
                            <button @click="changeSort('price')" class="sort__btn">СНАЧАЛА НЕДОРОГИЕ</button>
                        </li>
                        <li :class="{active : selectedSort === 'popular'}" class="sort__item">
                            <button @click="changeSort('popular')" class="sort__btn">СНАЧАЛА ПОПУЛЯРНЫЕ</button>
                        </li>
                        <li :class="{active : selectedSort === 'new'}" class="sort__item">
                            <button @click="changeSort('new')" class="sort__btn">СНАЧАЛА НОВЫЕ</button>
                        </li>
                    </ul>
                </template>
            </modal-component>
        </teleport>
    </div>
</template>

<script>
import { ModalComponent } from '../ModalComponent'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'SortComponent',
    components: {
        ModalComponent
    },
    setup() {
        const { dispatch, state } = useStore()
        const isShow = ref(false)
        const sort = ref(null)
        const sortList = ref(null)
        const changeSort = (value) => {
            isShow.value = false
            dispatch('products/changeSort', value)
        }
        const selectedSort = computed(() => state.products.sort)
        const openModal = () => {
            isShow.value = true
            let coords = sort.value.getBoundingClientRect()
            return coords.top
        }
        onMounted(() => {
            sort.value
            sortList.value
        })
        return {
            isShow,
            sort,
            openModal,
            sortList,
            changeSort,
            selectedSort
        }
    }
}
</script>

<style lang="scss" scoped src="./sort-component.scss"></style>