<template>
    <b-container  class="home">
        <b-row >
            <b-col>
                <h1>Copito de nieve con Vue <small>Pauli</small></h1>
                <img src="../assets/perrito.png" alt="" width="100%" height="auto">            
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="red in redes" :key="red.red" class="text-center" >
                <b-link :href="red.url" target="black">
                <b-alert :variant="red.color" show>
                    {{red.red}}
                </b-alert>

                </b-link>
            </b-col>
            
        </b-row>
        
    </b-container>

</template>

<script>

export default {
   name: "Home",
   data(){
       return{
           redes:[
               {
                   red:'Facebook',
                   url:'https://www.facebook.com/',
                   color:'info'
               },
               {
                   red:'Twitter',
                   url:'https://twitter.com/',
                   color:'warning'
               }
           ]

       }
   }
}

</script>

<style >

.home{
    margin-top : 50px
}

</style>