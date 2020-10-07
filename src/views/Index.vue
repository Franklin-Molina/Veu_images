<template>
  <div id="app">
    <section v-if="errored">
      <div class="alert alert-danger text-center" role="alert">
        
       ¡¡ Lo sentimos,Fallo al agregar la imagen !!
      </div>
    </section>
    <section v-else>
      <div v-if="loading">

        <div class="alert alert-success text-center" role="alert">¡¡Felicidades la imagen fue subida correctamente!!</div>
      </div>
    </section>
  </div>
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
      <li class="btn ">
        <button class="btnbotonenvi" @click="onUpload" id="letra">ENVIAR IMAGEN</button>
           
      </li>
      </div>

      <div class="d-flex justify-content-center">
     
        
  <button class="btn2 draw-border">
    
      
        <router-link to="/Home" id="col_border" ><h1 id="colrh2">Ver Imagenes Cargadas</h1></router-link >
         
      
  </button>
           
      
      </div>
      <br />
       

     
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
      errored: false,
      loading: false,
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
          },
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })

        .finally(() => (this.loading = true));

     
        
    },
  },
};
</script>

<style>

#letra{
    font-family: Lato, sans-serif;
}
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
  max-height: 270px;
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
 .btnbotonenvi {
        color: black;
        text-decoration: none;
        cursor: pointer;
        display: inline-block;
        letter-spacing: 0.075em;
        padding: .8em 1em;
        margin: auto 2em;
        position: relative;
        align-self: center;
        text-transform: uppercase;
        border: 3px #00bcdd solid;
        border-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
        border-image-slice: 1 1 0 0;
        z-index: 1;
        box-shadow: -0.5em 0.5em rgba(16, 24, 50, 0);
        transform-origin: left bottom;
        -webkit-transition: all 200ms ease-in-out;
        -moz-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
    }
    
    .btnbotonenvi:before,
    .btnbotonenvi:after {
        border: 3px #00bcdd solid;
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
    }
    
    .btnbotonenvi:before {
        border-image: linear-gradient(45deg, #00bcdd 0%, #0097dd 100%);
        border-image-slice: 1 1 0 1;
        left: -0.59em;
        top: .15em;
        width: .31em;
        height: 100%;
        transform: skewY(-45deg);
    }
    
    .btnbotonenvi:after {
        border-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
        border-image-slice: 1 1 1 0;
        bottom: -0.61em;
        right: 0.16em;
        width: 100%;
        height: .31em;
        transform: skewX(-45deg);
    }
    
    .btnbotonenvi:hover {
        background-color: white;
        background-size: 90%;
        transform: translate(0.5em, -0.5em);
        box-shadow: -1em 1em 0.15em rgba(16, 24, 50, 0.1);
    }
    
    .btnbotonenvi:hover:before {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwYmNkZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwOTdkZCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background-size: 100%;
        background-image: -moz-linear-gradient(45deg, #00bcdd 0%, #0097dd 100%);
        background-image: -webkit-linear-gradient(45deg, #00bcdd 0%, #0097dd 100%);
        background-image: linear-gradient(45deg, #00bcdd 0%, #0097dd 100%);
        height: calc(100% - .13em);
        border-image-slice: 1;
    }
    
    .btnbotonenvi:hover:after {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwYmNkZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background-size: 100%;
        background-image: -moz-linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
        background-image: -webkit-linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
        background-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
        width: calc(100% - .13em);
        border-image-slice: 1;
    }
    .draw-border {
        box-shadow: inset 0 0 0 4px #58afd1;
        color: #58afd1;
        -webkit-transition: color 0.25s 0.0833333333s;
        transition: color 0.25s 0.0833333333s;
        position: relative;
    }
    
    .draw-border::before,
    .draw-border::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: '';
        pointer-events: none;
        position: absolute;
        width: 0;
        height: 0;
        bottom: 0;
        right: 0;
    }
    
    .draw-border::before {
        border-bottom-width: 4px;
        border-left-width: 4px;
    }
    
    .draw-border::after {
        border-top-width: 4px;
        border-right-width: 4px;
    }
    
    .draw-border:hover {
        color: #ffe593;
    }
    
    .draw-border:hover::before,
    .draw-border:hover::after {
        border-color: #ffe593;
        -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
        transition: border-color 0s, width 0.25s, height 0.25s;
        width: 100%;
        height: 100%;
    }
    
    .draw-border:hover::before {
        -webkit-transition-delay: 0s, 0s, 0.25s;
        transition-delay: 0s, 0s, 0.25s;
    }
    
    .draw-border:hover::after {
        -webkit-transition-delay: 0s, 0.25s, 0s;
        transition-delay: 0s, 0.25s, 0s;
    }
    
    .btn2 {
        background: none;
        border: none;
        cursor: pointer;
        line-height: 1.5;
        font: 700 1.2rem 'Roboto Slab', sans-serif;
        padding: 1em 2em;
        letter-spacing: 0.05rem;
    }
    
    .btn:focus {
        outline: 2px dotted #55d7dc;
    }
    
    
</style>