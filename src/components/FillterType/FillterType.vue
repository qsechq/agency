<template>
    <ul class="fillter__list">
        <li class="fillter__item">
            <label for="type" class="fillter__label">
                <input name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Новинки</span>
        </li>
        <li class="fillter__item">
            <label for="type" class="fillter__label">
                <input name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Есть в наличии</span>
        </li>
        <li class="fillter__item">
            <label for="type" class="fillter__label">
                <input name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Контрактные</span>
        </li>
        <li class="fillter__item">
            <label for="type" class="fillter__label">
                <input name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Эксклюзивные</span>
        </li>
        <li class="fillter__item">
            <label for="type" class="fillter__label">
                <input name="type" type="radio" class="fillter__input">
                <div class="fillter__item-visible">
                    <span class="fillter__item-circ"></span>
                </div>
            </label>
            <span class="fillter__name">Распродажа</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'FillterType'
}
</script>

<style lang="scss" scoped src="./fillter-type.scss"></style>