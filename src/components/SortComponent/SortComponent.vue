<template>
    <div class="c-sort">
        <a @click.prevent="openModal()" href="#" class="sort__btn" ref="sort">СНАЧАЛА ДОРОГИЕ</a>
        <teleport to="#sort">
            <modal-component :isShow="isShow" class="modal__sort">
                <template #content>
                    <ul :style="{ top: openModal() + 'px'}" class="sort__list" ref="test">
                        <li class="sort__item">
                            <button @click="changeFillter('expensive')" class="sort__btn">СНАЧАЛА ДОРОГИЕ</button>
                        </li>
                        <li class="sort__item">
                            <button @click="changeFillter('cheap')" class="sort__btn">СНАЧАЛА НЕДОРОГИЕ</button>
                        </li>
                        <li class="sort__item">
                            <button @click="changeFillter('popular')" class="sort__btn">СНАЧАЛА ПОПУЛЯРНЫЕ</button>
                        </li>
                        <li class="sort__item">
                            <button @click="changeFillter('new')" class="sort__btn">СНАЧАЛА НОВЫЕ</button>
                        </li>
                    </ul>
                </template>
            </modal-component>
        </teleport>
    </div>
</template>

<script>
import { ModalComponent } from '../ModalComponent'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'SortComponent',
    components: {
        ModalComponent
    },
    setup() {
        const { dispatch } = useStore()
        const changeFillter = (value) => {
            dispatch('products/changeFillter', value)
        }
        const isShow = ref(false)
        const sort = ref(null)
        const test = ref(null)
        const openModal = () => {
            isShow.value = true
            let coords = sort.value.getBoundingClientRect()
            return coords.top
        }
        onMounted(() => {
            sort.value
            test.value
        })
        return {
            isShow,
            sort,
            openModal,
            test,
            changeFillter
        }
    }
}
</script>

<style lang="scss" scoped src="./sort-component.scss"></style>