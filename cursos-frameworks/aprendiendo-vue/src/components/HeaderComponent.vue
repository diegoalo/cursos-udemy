<template>
    <header id = "header">
            <div class="center">
            <!--Logo-->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="logotipo"/>
                    <span id="brand">
                        <strong>Curso</strong>Vue
                    </span>
                </div>
                
            <!--Menú de navegación-->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home">Inicio</router-link>
                        </li>

                        <li>
                            <router-link to="/blog">Blog</router-link>
                        </li>

                        <li>
                            <router-link to="/formulario">Formulario</router-link>
                        </li>

                        <li>
                            <router-link to="/pagina">Página 1</router-link>
                        </li>
                        <li>
                            <router-link to="/mi-componente">Página 2</router-link>
                        </li>
                    </ul>
                </nav>

                <!--Limpiamos los flotados-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>