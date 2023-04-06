<template>
    <div class="c-settings">
        <div class="settings__count">
            412 товаров
        </div>
        <div class="sort">
            <sort-component />
        </div>
    </div>
</template>

<script>
import { SortComponent } from "../SortComponent"

    export default {
        name: 'SettingsComponent',
        components: {
            SortComponent
        }
    }
</script>

<style lang="scss" scoped src="./settings-compoent.scss">

</style>