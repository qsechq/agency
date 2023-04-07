<template>
    <div class="c-sort">
        <a @click.prevent="openModal()" href="#" class="sort__btn" ref="sort">СНАЧАЛА ДОРОГИЕ</a>
        <teleport to="#sort">
            <modal-component :isShow="isShow" class="modal__sort" ref="modal">
                <template #content>
                    <ul class="sort__list">
                        <li class="sort__item">
                            <button class="sort__btn">СНАЧАЛА ДОРОГИЕ</button>
                        </li>
                        <li class="sort__item">
                            <button class="sort__btn">СНАЧАЛА НЕДОРОГИЕ</button>
                        </li>
                        <li class="sort__item">
                            <button class="sort__btn">СНАЧАЛА ПОПУЛЯРНЫЕ</button>
                        </li>
                        <li class="sort__item">
                            <button class="sort__btn">СНАЧАЛА НОВЫЕ</button>
                        </li>
                    </ul>
                </template>
            </modal-component>
        </teleport>
    </div>
</template>

<script>
import { ModalComponent } from '../ModalComponent'
// import { ref, onMounted, watchEffect } from 'vue';

export default {
    name: 'SortComponent',
    components: {
        ModalComponent
    },
    data() {
        isShow: false
    },
    methods: {
        openModal() {
            this.isShow = true
            let coords = this.$refs.sort.getBoundingClientRect()
            let modal = document.querySelector('.modal__sort')
            console.log(modal);
            modal.style.left = coords.left + 'px'
            modal.style.top = coords.bottom + 'px'
            console.log(modal);
        }
    },
    mounted() {
        this.openModal()
    }
    // setup() {
    //     const isShow = ref(false)
    //     const sort = ref(null)
    //     const modal = ref(null)
    //     const openModal = () => {
    //         isShow.value = true
    //         let coords = sort.value.getBoundingClientRect()
    //         let modal = modal.value
    //         console.log(modal);
    //         modal.style.top = coords.bottom + "px"
    //     }
    //     onMounted(() => {
    //         sort.value
    //         modal.value
    //     })
    //     return {
    //         isShow,
    //         openModal,
    //         sort,
    //         modal
    //     }
    // }
}
</script>

<style lang="scss" scoped src="./sort-component.scss"></style>