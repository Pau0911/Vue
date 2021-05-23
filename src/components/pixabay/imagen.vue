<template>
    <div>
        <b-img :id="img.id" thumbnail fluid :src="img.previewURL" rounded
        v-b-popover.hover.top="img.tags" title="Vue- Etiqueta"
        ></b-img>
    </div>
</template>

<script>
export default {
    name:"Imagen",
    props:["img"]
}
</script>

<style lang="stylus">

</style>