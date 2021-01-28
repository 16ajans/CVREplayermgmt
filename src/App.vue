
<template>
  <v-app class="growy">
    <v-app-bar app>
      <v-img alt="CVRE Logo" src="./assets/logo.png" />
      <v-tabs>
        <v-tab>Beat Saber</v-tab>
        <v-tab>Echo Arena</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Captain's Corner</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <!-- <v-container>
        <v-row justify="center"
          ><v-col class="col-auto shrinky"><router-view /></v-col
          ><v-col><HelloWorld /></v-col></v-row></v-container
    > --><HelloWorld
    /></v-main>
    <!-- <v-footer>
      <v-img
        alt="Beat Saber Logo"
        contain
        src="./assets/BSlogo.png"
        max-height="56px"
      />
      <v-img
        alt="Echo Arena Logo"
        contain
        src="./assets/EAlogo.png"
        max-height="56px"
      /> 
    </v-footer> -->
  </v-app>
</template>

<!-- <style>
.v-application--wrap {
  min-height: 0vh !important;
}
.growy {
  min-height: 100vh;
}
</style> -->

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
