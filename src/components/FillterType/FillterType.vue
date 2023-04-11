<template>
    <ul class="fillter__list">
        <li class="fillter__item">
            <label for="new" class="fillter__label">
                <input  @change="changeFillter('new')" id="new" value="new" name="type" type="checkbox" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Новинки</span>
        </li>
        <li class="fillter__item">
            <label for="quantity" class="fillter__label">
                <input @change="changeFillter('quantity')" id="quantity" value="quantity" name="type" type="checkbox" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Есть в наличии</span>
        </li>
        <li class="fillter__item">
            <label for="contract" class="fillter__label">
                <input  @change="changeFillter('contract')" id="contract" value="contract" name="type" type="checkbox" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Контрактные</span>
        </li>
        <li class="fillter__item">
            <label for="exclusive" class="fillter__label">
                <input @change="changeFillter('exclusive')" id="exclusive" value="exclusive" name="type" type="checkbox" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Эксклюзивные</span>
        </li>
        <li class="fillter__item">
            <label for="sale" class="fillter__label">
                <input @change="changeFillter('sale')" id="sale" value="sale" name="type" type="checkbox" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Распродажа</span>
        </li>
    </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'FillterType',
    setup() {
        const { state, dispatch } = useStore()
        const selectedFillter = computed(() => state.products.selectedFillter)
        const changeFillter = (value) => {
            let oldValue = selectedFillter.value
            console.log(value);
            if( oldValue === value ) {
                dispatch('products/changeFillter', '')
            } else if(oldValue === ''){
                dispatch('products/changeFillter', value)
            } else {
                console.warn(oldValue);
                dispatch('products/changeFillter', value)
            }
        }
        return {
            selectedFillter,
            changeFillter
        }
    }
}
</script>

<style lang="scss" scoped src="./fillter-type.scss"></style>