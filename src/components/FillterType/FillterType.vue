<template>
    <ul class="fillter__list">
        <li class="fillter__item">
            <label @click="removeChecked()" for="new" class="fillter__label">
                <input v-model="checkedFillter" @change="changeFillter()" value="new" id="new" name="type"
                     type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Новинки</span>
        </li>
        <li class="fillter__item">
            <label @click="removeChecked()" for="quantity" class="fillter__label">
                <input v-model="checkedFillter" @change="changeFillter()" value="quantity" id="quantity"
                    name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Есть в наличии</span>
        </li>
        <li class="fillter__item">
            <label @click="removeChecked()" for="contract" class="fillter__label">
                <input v-model="checkedFillter" @change="changeFillter()" value="contract" id="contract"
                    name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Контрактные</span>
        </li>
        <li class="fillter__item">
            <label @click="removeChecked()" for="exclusive" class="fillter__label">
                <input v-model="checkedFillter" @change="changeFillter()" value="exclusive" id="exclusive" name="type"
                     type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Эксклюзивные</span>
        </li>
        <li class="fillter__item">
            <label @click="removeChecked()" for="sale" class="fillter__label">
                <input v-model="checkedFillter" @change="changeFillter()" value="sale" id="sale" name="type"
                     type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Распродажа</span>
        </li>
    </ul>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'FillterType',
    setup() {
        const { state, dispatch } = useStore()
        const selectedFillter = computed(() => state.products.selectedFillter)
        const checkedFillter = ref('')
        const inputChecked = ref(null)
        const changeFillter = () => {
            dispatch('products/changeFillter', selectedFillter.value = checkedFillter.value)
        }
        const removeChecked = () => {
            for (let radio of document.querySelectorAll('[type="radio"]')) {
                if(radio.value === checkedFillter.value) {
                    radio.checked = false
                    selectedFillter.value = ''
                    checkedFillter.value = selectedFillter.value
                    dispatch('products/changeFillter', '')
                }
            }
        }
        return {
            checkedFillter,
            changeFillter,
            inputChecked,
            removeChecked
        }
    }
}
</script>

<style lang="scss" scoped src="./fillter-type.scss"></style>