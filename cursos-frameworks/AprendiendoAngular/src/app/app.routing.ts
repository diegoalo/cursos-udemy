//Configurando el routing de la aplicación

//Importar los módulos del router de Angular
import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//Importar componentes a los cuales quiero hacer una página exclusiva, una sección de mi web
//o una página web entera

//Importamos los componentes
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

//Definimos nuestro array de rutas: configuracion de todas las rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    //página para un articulo del blog
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    //Pasamos parámetros a la ruta, usamos esa página de pruebas
    //Hacer que este parámetro sea opcional en Angular: Creamos una nueva ruta
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent},
    //ruta de error. IMPORTANTE QUE SEA LA ÚLTIMA
    {path: '**', component: ErrorComponent},
];

//Exportamos el modulo para poder utilizarlo en nuestro proyecto de Angular
export const appRoutingProviders: any [] = [];
//Establecer todas las rutas y hacer que funcionen
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);



