<template>
  <div class="container">
    <div class="gradient-border">
      <h1 class="text-align-center" id="colrh2">AGREGAR IMAGENES</h1>
      <div class="d-flex justify-content-center">
        <div class="btn btn-outline-secondary mb-3 col-10">
          <input
            class="text-white"
            type="file"
            @change="onFileSelected"
            accept="image/jpeg, image/png, image/jpg, image/gif"
          />
        </div>
      </div>

      <div id="preview">
        <img v-if="url" :src="url" />
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-success" @click="onUpload">Enviar Imagen</button>
      </div>

      <br />

      <li class="btn btn-info ml-3">
        <router-link to="/Home" id="col_border"
          ><h1 id="colrh2">Ver Imagenes Cargadas</h1></router-link
        >
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
      url:
        "https://api.jeisontech.dev/media/images/pngtree-white-upload-icon-image_1338667.jpg",
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
      axios
        .post("https://api.jeisontech.dev/api/images/", fd, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Cargando: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
            const progress = (uploadEvent.total * 100) / uploadEvent.loaded;
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
#colrh2 {
  color: white;
}
#col_border {
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
@import url("https://fonts.googleapis.com/css?family=Lato:300");
.gradient-border {
  --border-width: 3px;
  position: relative;

  width: 555px;
  height: 600px;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  background: #222;
  border-radius: var(--border-width);
}

::after {
  position: absolute;
  content: "";
  top: calc(-1 * var(--border-width));
  left: calc(-1 * var(--border-width));
  z-index: -1;
  width: calc(100% + var(--border-width) * 2);
  height: calc(100% + var(--border-width) * 2);
  background: linear-gradient(
    60deg,
    hsl(224, 85%, 66%),
    hsl(269, 85%, 66%),
    hsl(314, 85%, 66%),
    hsl(359, 85%, 66%),
    hsl(44, 85%, 66%),
    hsl(89, 85%, 66%),
    hsl(134, 85%, 66%),
    hsl(179, 85%, 66%)
  );
  background-size: 300% 300%;
  background-position: 0 50%;
  border-radius: calc(2 * var(--border-width));
  animation: moveGradient 4s alternate infinite;
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>