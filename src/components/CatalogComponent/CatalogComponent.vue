<template>
    <div class="container">
        <section class="catalog-section">
            <div class="catalog">
                <div class="fillter">
                    <fillter-type />
                </div>
                <div class="wrapp">
                    <div class="settings">
                        <settings-component />
                    </div>
                    <div class="catalog__list">
                        <catalog-list />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { FillterType } from '../FillterType'
import { SettingsComponent } from '../SettingsComponent'
import { CatalogList } from "../CatalogList"

export default {
    name: 'CatalogComponent',
    components: {
        FillterType,
        SettingsComponent,
        CatalogList
    }
}
</script>

<style lang="scss" scoped src="./catalog-component.scss"></style>