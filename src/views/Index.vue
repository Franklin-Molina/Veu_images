<template>
  <div class="container" id="bordercolor">
    <div>
      <div class="container mb-1 mt- d-flex justify-content-center">
        <h1 class="text-align-center " id="colrh2">AGREGAR IMAGENES</h1>
      </div>

      <div class="mt-4 mb-2 d-flex justify-content-center">
        <input class="text-white" type="file" @change="onFileSelected" accept="image/jpeg, image/png, image/jpg, image/gif"/>
        <button class="btn btn-success" @click="onUpload">Enviar Imagen</button> <br /><br />
     
      </div>
        <progress id="imgbar" value="0" max="100">  </progress>
       

      <div id="preview">
        <img v-if="url" :src="url" />
      </div>

        <div class="bg  d-flex justify-content-center" id="bg">
          <li class="btn btn-info mb-2">
           
          <router-link to="/Home" id="col_border"><h1 id="colrh2">Ver Imagenes Cargadas</h1></router-link>
      </li>
        </div>
      
    </div>
  </div>
</template>

<script>
const cargabar = document.getElementById("imgbar");



import axios from "axios";
export default {
  name: "Index",

  data() {
    return {
      selectedFile: null,
      url: 'https://img1.freepng.es/20180127/hgq/kisspng-black-and-white-point-angle-pattern-sky-falling-snow-5a6c6b28abd3a1.9470577615170547607038.jpg',
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
      axios.post("https://api.jeisontech.dev/api/images/", fd,{
        onUploadProgress: uploadEvent =>{
           console.log('Cargando: '+ Math.round(uploadEvent.loaded / uploadEvent.total * 100) + "%");
            const progress = (uploadEvent.total * 100)/uploadEvent.loaded ;
           A
      
  
       
       

        }
      })
      .then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#colrh2{
  color: white;
}
#col_border{
 text-decoration: none;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 480px;
  max-height: 500px;
  margin-bottom: 10px;
}
#bordercolor {
  border: 12px solid #1ad1d1;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>