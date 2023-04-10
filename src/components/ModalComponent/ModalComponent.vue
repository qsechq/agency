<template>
    <div @click="closeModal" id="modal" class="modal" v-if="isShow">
        <div class="modal__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
    name: 'ModalComponent',
    emits: [
        'show'
    ],
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const { isShow } = toRefs(props)
        const closeModal = () => {
            isShow.value = false
        }
        return {
            closeModal
        }
    }
}
</script>

<style lang="scss" scoped src="./modal-component.scss"></style>