<template>
  <section id="content">
    <h2 class="subheader">{{ texto }}</h2>
    <div class="hello">
      
    </div>
  </section>
</template>



<script>


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      texto: "Hola mundo desde el componente!",
    };
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

