<template>
    <div class="item">
        <img src="../../assets/Photo.png" alt="" class="item__img">
        <div class="item__name">Краска Wallquest, Brownsone MS90102</div>
        <div class="item__footer">
            <div class="item__footer-price">6000 ₽</div>
            <button class="item__footer-btn">
                <my-icon name="PlusSvg" class="item__footer-icon" />
            </button>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
    name: 'CatalogItem',
    components: {
        MyIcon
    }
}
</script>

<style lang="scss" scoped src="./catalog-item.scss"></style>