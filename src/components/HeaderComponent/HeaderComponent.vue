<template>
    <div class="c-header">
        <div class="burger">
            <span class="burger__plank burger__plank--top"></span>
            <span class="burger__plank burger__plank--midle"></span>
            <span class="burger__plank burger__plank--bottom"></span>
        </div>
        <router-link :to="{ name: 'catalog' }" class="logo">
            <my-icon name="LogoSvg" class="logo__icon" />
        </router-link>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link :to="{ name: 'catalog' }" class="nav__link">
                        Продукты
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'catalog' }" class="nav__link">
                        Цвета
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'catalog' }" class="nav__link">
                        Вдохновение
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'catalog' }" class="nav__link">
                        Советы
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{ name: 'catalog' }" class="nav__link">
                        Найти магазин
                    </router-link>
                </li>
            </ul>
        </nav>
        <address class="contacts">
            <a href="tel:+7 (495) 221-77-69" class="contacts__phone">+7 (495) 221-77-69</a>
            <button class="contacts__btn">Заказать звонок</button>
        </address>
        <div class="icons">
            <ul class="icons__list">
                <li class="icons__item">
                    <a href="#" class="icons__link">
                        <my-icon name="SearchSvg" class="icons__icon" />
                    </a>
                </li>
                <li class="icons__item">
                    <a href="#" class="icons__link">
                        <my-icon name="ProfileSvg" class="icons__icon" />
                    </a>
                </li>
                <li class="icons__item">
                    <a href="#" class="icons__link">
                        <my-icon name="HeartSvg" class="icons__icon icons__icon-heart" />
                    </a>
                </li>
                <li @click="$emit('openBasket')" class="icons__item icons__basket">
                    <a href="#" class="icons__link">
                        <span class="icons__count">{{ order.order.length }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'HeaderComponent',
    emits: ['openBasket'],
    components: {
        MyIcon
    },
    setup() {
        const { dispatch, state } = useStore()
        const order = computed(() => state.order)
        onMounted(() => {
            dispatch('order/getOrder')
        })
        return {
            order
        }
    }
}
</script>

<style lang="scss" scoped src="./header-component.scss"></style>