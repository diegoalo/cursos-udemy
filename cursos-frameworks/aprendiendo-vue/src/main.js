import Vue from 'vue'
import App from './App.vue'
//importar el router
import VueRouter from 'vue-router';

import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';




Vue.config.productionTip = false


//configuraciones del router
Vue.use(VueRouter);

//configuraciones de las rutas del router
const routes = [
    {path: '/home', component: LastArticles},
    {path: '/ultimos-articulos', component: LastArticles},
    {path: '/blog', component: Blog},
    {path: '/formulario', component: Formulario},
    {path: '/pagina/:id?', name: 'pagina', component: Pagina},
    {path: '/mi-componente', component: MiComponente},
    {path: '/', component: LastArticles},
    {path: '/hola-mundo', component: HelloWorld},


];

const router = new VueRouter({
    routes,
    //funcionamiento estandar en los proyectos de este tipo
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
