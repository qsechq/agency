<template>
    <div id="modal" class="modal" v-if="isShow">
        <div @click.stop class="modal__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
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
    setup(props) {
        console.log(props.isShow);

    }
}
</script>

<style lang="scss" scoped src="./modal-component.scss"></style>