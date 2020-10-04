<template>
<div class="card" style="heidth: 30rem; heigth=30rem;">
          <img :src="items.url" class="img-fluid card-img-top" alt="..." />
          <div class="card-body">
            <p>{{ items.created_at }}</p>
          </div>
        </div>
</template>
<script>
export default {
    name: "Imagen",
    props: ["items"],
}
</script>