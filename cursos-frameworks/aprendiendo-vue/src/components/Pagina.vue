<template>
  <section id="content">
    <h2 class="subheader">Página de pruebas</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <button @click="redirigirAlBlog()">Llévame al blog</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  //metodos (hooks) del ciclo de vida de un componente
  //cuando el componente se crea pero no se ha terminado de cargar
  created() {
    console.log("Componente creado");
  },
  //mounted (para recoger parametros de la url en este caso)
  //cuando el componente se monta
  //recomendado antes que el created en la mayoria de casis
  mounted() {
    console.log("Componente montado");
    this.id_desde_url = this.$route.params.id;
  },
  //cuando se realizan cambios en el componente
  updated() {
    console.log("Componente actualizado");
  },
  //cuando el componente se destruye
  destroyed() {
    console.log("Componente eliminado");
  },

  data() {
    return {
      id_desde_url: null,
      nombre: "Diego Alonso",
    };
  },

  methods: {
    actualizarNombre() {
      this.nombre = "Francisco Tamaral";
      console.log(this.nombre);
    },

    redirigirAlBlog(){
      this.$router.push('/blog');
    }
  
  
  },
};
</script>