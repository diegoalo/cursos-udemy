<template>
  <section id="content">
    <h2 class="subheader">Últimos articulos</h2>

    <div id="articles">
      <!--últimos articulos: listado-->
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="https://cdn.sincroguia.tv/uploads/images/5/1/j/k/l/b/2/t/c/cuentame_L.jpg" alt="Cuentame" title="Cuentame" />
        </div>

        <h2>Artículo de prueba</h2>
        <span class="date">Hace 5 minutos</span>
        <a href="#">Leer más</a>

        <div id="clearfix"></div>
      </article>
      <!--Se añaden artículos con JS-->
    </div>
  </section>
</template>

<script>
export default {
    name: 'LastArticles'
};
</script>