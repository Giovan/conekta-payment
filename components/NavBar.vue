<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Productos
        </a>

        <a class="navbar-item">
          Categorías
        </a>

        <a class="navbar-item">
          Blog
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Más
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Acerca de
            </a>
            <a class="navbar-item">
              Contactos
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Reportar una anomalía
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <nuxt-link to="/login"> -->
            <nuxt-link to="/">
              Log in
            </nuxt-link>
            &nbsp;&nbsp;
            <!-- <nuxt-link class="button is-primary" to="/signup"> -->
            <nuxt-link class="button is-primary" to="/">
              <strong>Sign up</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  
</style>