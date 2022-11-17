<template>
  <v-app class="myFont">
    <v-app-bar
      app
      color="#000"
      dark
    >
      <div class="d-flex align-center">
        <b>JogaSoftware</b>
      </div>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
       <strong>©</strong> {{ new Date().getFullYear() }} — <strong>JogaSoftware</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HomePage from './components/homePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
