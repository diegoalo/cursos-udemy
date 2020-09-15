
<template>
  <section id="content">
    <h2 class="subheader">{{titulo}}</h2>
    <!-- template donde se escribe el HTML para el componente  -->
    <div id="mi-componente">
      <hr />
      <h1>Este es mi componente</h1>
      <h2>{{subtitulo}}</h2>
      <hr />

      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es
      <strong>{{nombre}}</strong>
    </div>

    <!--  mostrar los datos <pre>
      {{$data}}
    </pre>-->

  </section>
</template>

<script>
//script donde se carga toda la informacion del componente y se implementa la logica
//trozo de pantalla que hace algun tipo de funcion
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de MiComponente",
      //directiva: da funcionalidad a elementos del HTML
      //al hacer el binding con la propiedad nombre con la directiva v-model, se cambia la propiedad
      //directamente desde el formulario
      nombre: "",
    };
  },
};
</script>