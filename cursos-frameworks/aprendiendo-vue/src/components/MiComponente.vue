
<template>
<!-- template donde se escribe el HTML para el componente  -->
  <div id ="mi-componente">
    <hr/>
    <h1>Este es mi componente</h1>
    <h2>{{subtitulo}}</h2>
    <hr/>
  </div>
</template>

<script>
//script donde se carga toda la informacion del componente y se implementa la logica
//trozo de pantalla que hace algun tipo de funcion
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de MiComponente",
    };
  },
};
</script>