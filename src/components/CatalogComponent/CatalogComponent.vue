<template>
    <div class="fillter">
        <fillter-type />
    </div>
    <div class="settings">
        
    </div>
</template>

<script>
import { FillterType } from '../FillterType'

    export default {
        name: 'CatalogComponent',
        components: {
            FillterType
        }
    }
</script>

<style lang="scss" scoped src="./catalog-component.scss">

</style>