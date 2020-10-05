<template>
  <div>
    <h1>Agregar Imagenes</h1>
    <input class="te" type="file" name="image" @change="GetImage" />
    <img :src="avatar" alt="Avatar" />
    <a href="#" class="btn btn-success" @click.prevent="upload"
      >Enviar Imagen</a
    >
  </div>
</template>
<script>
export default {
  name: "prueba",
  data() {
    return {
      avatar: null,
    };
  },
  methods: {
    GetImage(e) {
      let image = e.target.files;
      let reader = new FileReader();
      reader.onloadend = function(){
        console.log('resultado: ',reader.result)
      }
      reader.readAsDataURL(image);
      
    },
  },
};
</script>