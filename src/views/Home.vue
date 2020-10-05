<template>
  <!--  -->
  <nav
    class="navbar navbar-expand-lg navbar-light color scrolling-navbar fixed-top"
  >
  
    <div class="container mb-1 d-flex justify-content-center">
      <router-link to="/"><h1 class="text-align-center">AGREGAR IMAGENES</h1></router-link>
    </div>
  </nav>
  <!--  -->

  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <!--         <h1 class="text-center">Listado de Imagenes</h1>
 -->
      </div>
    </div>

    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="items in imagenes"
        :key="items.id"
      >
        <Imagen :items="items" />
      </div>
    </div>
  </div>
</template>
<script>
import Imagen from "../components/imagen.vue";

export default {
  name: "Home",
  components: { Imagen },
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
};
</script>
<style >
h1 {
  color: white;
  text-align: end;
}

.color {
  background: rgba(0, 0, 0, 0.192);
}
</style>