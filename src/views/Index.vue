<template>
  <div class="container">
    <div>
      <h1 class="text-white">Cargar Imagen</h1>
      <input class="text-white " type="file" @change="onFileSelected" />
      <button @click="onUpload">Enviar Imagen</button> <br /><br />
      <div id="preview">
        <img v-if="url" :src="url" />
      </div>

      <li class="btn btn-info">
        <router-link to="/Home">HOME</router-link>
      </li>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "Index",

  data() {
    return {
      selectedFile: null,
      url: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
    onUpload() {
      const fd = new FormData();
      fd.append("url", this.selectedFile, this.selectedFile.name);
      axios.post("https://api.jeisontech.dev/api/images/", fd).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
  #preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 100%;
  max-height: 500px;
}

</style>