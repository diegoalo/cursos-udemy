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
                            <a href="./index.html">Inicio</a>
                        </li>

                        <li>
                            <a href="./blog.html">Blog</a>
                        </li>

                        <li>
                            <a href="./formulario.html">Formulario</a>
                        </li>

                        <li>
                            <a href="./article.html">Pagina 1</a>
                        </li>
                        <li>
                            <a href="./article.html">Pagina 2</a>
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