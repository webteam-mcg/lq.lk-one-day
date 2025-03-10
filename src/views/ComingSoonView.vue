<template>
  <v-container fluid class="coming-soon-container fill-height pa-0 ma-0">
    <v-row class="fill-height align-center justify-center mx-0">
      <v-col cols="12" class="text-center">
        <v-card flat color="transparent" class="coming-soon-card">
          <v-img 
            :src="require('../assets/splash-1.png')" 
            contain
            max-height="120"
            class="mx-auto mb-6"
          ></v-img>
          
          <h1 class="text-h2 mb-6 coming-soon-title">COMING SOON</h1>

          <h2 class="text-h6 mb-8">120th Lovers’ Quarrel 2025</h2>
          
          <v-progress-linear 
            indeterminate 
            color="orange accent-3" 
            class="mb-10"
            height="4"
          ></v-progress-linear>
          
          <v-footer color="transparent" padless class="mt-10">
            <v-col class="text-center" cols="12">
              &copy; Copyright {{ new Date().getFullYear() }} — Made with ♥ by WebTeamMCG
            </v-col>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ComingSoonView'
};
</script>

<style scoped>
.coming-soon-container {
  background: #121212;
  min-height: 100vh;
}

.coming-soon-title {
  letter-spacing: 5px;
  font-weight: bold;
}

.coming-soon-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
}
</style> 