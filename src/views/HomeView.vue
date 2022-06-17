<template>
  <div>
    <v-toolbar flat color="transparent">
      <!-- Adjust the height to your needs, mine is 40 -->
      <img :src="require('../assets/logo.png')" height="30"/>
    </v-toolbar>
      <div class="ml-sm-10 mr-sm-10 ml-2 mr-2">
        <div class="text-center text-sm-subtitle-1 text-body-2">Mahinda Richmond One Day Cricket Encounter | Mahinda College Ground</div>
        <v-divider></v-divider>
        <div class="text-center text-sm-h6 text-body-1 mt-5 mb-5">MCG require 70 runs with 110 balls remaining | Req RR: 3.81</div>
        <v-container>
          <div class="d-none d-sm-block mb-5">
            <v-row>
              <v-col
                sm="3"
                xs="6"
                order-sm="1"
              >
                <v-img
                  :src="require('../assets/mcg.png')"
                  min-width="100"
                  max-width="150"
                  class="ml-auto"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col
                sm="3"
                xs="6"
                order-sm="4"
              >
                <v-img
                  :src="require('../assets/rcg.png')"
                  min-width="100"
                  max-width="150"
                  class="mr-auto"
                  aspect-ratio="1"
                >
                </v-img>
                </v-col>
              <v-col 
                class="pr-md-10"
                sm="3"
                xs="6"
                order-sm="2"
              >
                <div class="text-right text-h6">Mahinda College</div>
                <div class="text-right text-h3">0/0</div>
                <div class="text-right text-subtitle-1">Run Rate: 0.0</div>
                <div class="text-right text-subtitle-1">Overs: 0/50</div>
              </v-col>
              <v-col
                sm="3"
                xs="6"
                order-sm="3"
              >
                <div class="text-left text-h6 grey--text">Richmond College</div>
                <div class="text-left text-h3 grey--text">0/0</div>
                <div class="text-left text-subtitle-1 grey--text">Run Rate: 0.0</div>
                <div class="text-left text-subtitle-1 grey--text">Overs: 0/50</div>
              </v-col>
            </v-row>
          </div>

          <!-- Mobile View -->

          <div class="d-sm-none mb-5">
            <v-row>
              <v-col>
                <v-img
                  :src="require('../assets/mcg.png')"
                  min-width="50"
                  max-width="100"
                  class="mx-auto"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col>
                <v-img
                  :src="require('../assets/rcg.png')"
                  min-width="50"
                  max-width="100"
                  class="mx-auto"
                  aspect-ratio="1"
                >
                </v-img>
                </v-col>

            </v-row>
            <v-row class="mb-sm-2">
              <v-col>
                <div class="text-center text-body-1">MCG</div>
                <div class="text-center text-h5">0/0</div>
                <div class="text-center text-subtitle-1">RR: 0.0</div>
                <div class="text-center text-subtitle-1">Overs: 0/50</div>
              </v-col>
              <v-col>
                <div class="text-center text-body-1 grey--text">RCG</div>
                <div class="text-center text-h5 grey--text">0/0</div>
                <div class="text-center text-subtitle-1 grey--text">RR: 0.0</div>
                <div class="text-center text-subtitle-1 grey--text">Overs: 0/50</div>
              </v-col>
            </v-row>
          </div>

          <!-- <v-row class="mb-2 mb-sm-5">
            <v-col class="text-center">
              <div class="text-h6">This Over</div>
            </v-col>
          </v-row> -->
          <div class="d-none d-sm-block">
            <v-row
              class="mb-10"
              justify="center"
              no-gutters
            >
            <v-col lg="6" class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                2
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                4
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                1WD
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                6
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                0
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                W
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
              >
                1
              </v-btn>
            </v-col>
            </v-row>
            </div>
          <div class="d-sm-none mb-2">
            <!-- <v-sheet
              color="green"
              class="mb-2 mx-auto"
            > -->
                <v-slide-group>
                  <v-slide-item>
                    <span class="mx-2 my-auto text-subtitle-2">This Over</span>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      2
                    </v-btn>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      1WD
                    </v-btn>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      4
                    </v-btn>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      6
                    </v-btn>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      0
                    </v-btn>
                  </v-slide-item>
                  <v-slide-item>
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      small
                    >
                      W
                    </v-btn>
                  </v-slide-item>
                </v-slide-group>
              <!-- </v-sheet> -->
            </div>
            <div class="d-none d-sm-block">
            <v-row
              class="mb-6"
              justify="center"
              no-gutters
            >
              <v-col lg="3">
                <v-row>
                  <v-col
                    cols="2"
                  >
                  <v-img 
                    :src="require('../assets/bat.png')"
                    width="20"
                  >
                  </v-img>
                  </v-col>
                  <v-col>
                    <div class="subtitle-1">H. Gallage: 0<sup>*</sup>(0)</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="2"
                  >
                    <!-- <v-img
                      :src="require('../assets/bat.png')"
                    >
                    </v-img> -->
                  </v-col>
                  <v-col>
                    <div class="subtitle-1">D.Kalupahana: 0<sup>*</sup>(0)</div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="3">
                <v-row>
                  <v-col
                    cols="2"
                  >
                  <v-img 
                    :src="require('../assets/ball.png')"
                    width="20"
                  >
                  </v-img>
                  </v-col>
                  <v-col>
                    <div class="subtitle-1">S. Abishek: 0/0 (0.0)</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            </div>
            <div class="d-sm-none">
              <v-list
                color="transparent"
              >
                <v-list-item class="grow">
                  <v-list-item-avatar color="transparent" size="20">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="require('../assets/bat.png')"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>H. Gallage</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">0<sup>*</sup>(0)</span>
                  </v-row>
                </v-list-item>
                <v-list-item class="grow">
                  <v-list-item-avatar color="transparent" size="20">
                    <!-- <v-img
                      class="elevation-6"
                      alt=""
                      :src="require('../assets/bat.png')"
                    ></v-img> -->
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>H. Gallage</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">0<sup>*</sup>(0)</span>
                  </v-row>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="grow">
                  <v-list-item-avatar color="transparent" size="20">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="require('../assets/ball.png')"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>S. Abishek</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">0/0 (0.0)</span>
                  </v-row>
                </v-list-item>
              </v-list>
            </div>
          <v-row>
            <v-col class="text-center">
              <v-btn
                color="orange accent-3"
                dark
                large
              >
                SCORECARD
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-footer
        color="transparent"
        padless
      >
        <v-col
          class="text-center"
          cols="12"
        >
          &copy; Copyright {{ new Date().getFullYear() }} — Made with ♥ by WebTeamMCG
        </v-col>
      </v-footer>
  </div>
</template>

<script>

  export default {
    name: 'HomeView',

    components: {
    },
  }
</script>
