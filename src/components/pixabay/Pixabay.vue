<template>
<b-container fluid class="p-4 bg-dark text-white">
    <b-row>
        <!-- <b-col md="6">
            <b-form-input v-model="buscar" placeholder="Ingrese imagen a buscar" @keypress.enter="buscarImagenes"></b-form-input>
        </b-col>
        <b-col md="1">
            <b-button variant="danger" @click="buscarImagenes">Buscar</b-button>
        </b-col> -->
        <b-col>
            <Buscador @buscarDesdeHijo="buscarImagenes" />
        </b-col>
    </b-row>
    <b-row>
        <b-col v-for="img in pixaImagenes" :key="img.id" md="2" class=" py-2 text-center">
            <!-- <b-img :id="img.id" thumbnail fluid :src="img.previewURL"></b-img> -->
            <Imagen :img="img"/>
        </b-col>
    </b-row>
   

 

</b-container>
    
</template>

<script>
import ServicioAPI from "./ServicioAPI"
import Imagen from "./imagen"
import Buscador from "./Buscador"

export default {
    name:"Pixabay",
    components:{
        Imagen,
        Buscador
    },
    data(){
        return{
        pixaImagenes:[],
        buscar:""
        }
       
    },
    methods:{
        async buscarImagenes(buscar=""){
        this.buscar=buscar
        const consulta= await ServicioAPI.getImagenes(this.buscar)
        this.pixaImagenes=consulta.hits;
        console.log(consulta)
        }
       
    },
    mounted(){
        this.buscarImagenes();
    }
}
</script>

<style lang="stylus">

</style>