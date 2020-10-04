<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Listado de Imagenes</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-6 col-md-4" v-for="items in imagenes" :key="items.id"
      >
      <Imagen :items="items"/>
       
      </div>
    </div>
  </div>
</template>
<script>
import Imagen from '../components/imagen.vue'


export default {
  name: "Home",
  components: {Imagen},
  data() {
    return {
      imagenes: [],
    };
  },
  mounted() {
    fetch("http://api.jeisontech.dev/api/images/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.imagenes = data;
      });
  },

  /*    beforeCreate() {
   console.log("beforeCreate")
 },
 created() {
   console.log("Created")
 },
 beforeMount(){
   console.log("beforeMount")
 },
 mounted() {
   console.log("mounted")
 }, */
};
</script>
<style >
h1 {
  color: red;
}
</style>