<template>
  <div>
      <v-toolbar flat color="transparent">
      <img :src="require('../assets/logo.png')" height="30"/>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">
          <v-icon left>
            mdi-arrow-left
          </v-icon>
          Back
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <v-card
        color="transparent"
        flat
      >
        <v-card-title class="text-center justify-center">
          <div class="text-h4">SCORECARD</div>
        </v-card-title>
        <v-tabs
          color="orange accent-3"
          right
          background-color="transparent"
          
        >
          <v-tab>MCG</v-tab>
          <v-tab>RCG</v-tab>

          <v-tab-item>
            <v-row class="pb-5">
              <v-col md="6" class="mx-auto">
                  <v-data-table
                    :headers="batting_headers"
                    :items="desserts"
                    class="elevation-1"
                    mobile-breakpoint="0"
                    hide-default-footer
                    disable-sort
                    :items-per-page=-1
                  >
                    <template v-slot:[`item.name`]="{ item }">
                      {{ item.name }}
                      <div class="text-caption font-weight-light grey--text">{{ item.status }}</div>
                    </template>
                    <template
                      v-slot:[`body.append`]="{ headers }"
                    >
                      <tr>
                        <td :colspan="headers.length">
                          Extras: 13 ( b 5 lb 1 nb 7 )
                        </td>
                      </tr>
                      <tr>
                        <td :colspan="headers.length">
                          Total: 128
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
                  <v-divider class="pb-5"></v-divider>
                  <v-data-table
                    :headers="bowling_headers"
                    :items="bowling"
                    class="elevation-1"
                    mobile-breakpoint="0"
                    hide-default-footer
                    disable-sort
                    :items-per-page=-1
                  >
                  </v-data-table>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item>
          </v-tab-item>
        </v-tabs>
      </v-card>
  </div>
</template>


<script>

  export default {
    name: 'ScorecardView',

    components: {
    },

    data () {
      return {
        batting_headers: [
          { text: 'Batting',
            align: 'start',
            value: 'name',
            width: '100%'
          },
          { text: 'R', value: 'calories', align: 'end'  },
          { text: 'B', value: 'fat', align: 'end'  },
          { text: '4s', value: 'carbs', align: 'end'  },
          { text: '6s', value: 'protein', align: 'end'  },
          { text: 'S/R', value: 'iron', align: 'end' },
        ],
        bowling_headers: [
          { text: 'Bowling',
            align: 'start',
            value: 'name',
            width: '100%'
          },
          { text: 'O', value: 'calories', align: 'end'  },
          { text: 'M', value: 'fat', align: 'end'  },
          { text: 'R', value: 'carbs', align: 'end'  },
          { text: 'W', value: 'protein', align: 'end'  },
          { text: 'Econ', value: 'iron', align: 'end' },
        ],
        desserts: [
          {
            name: 'P. Madubashana',
            status: 'c J. Kaushal b N. Jayawardana',
            calories: 22,
            fat: 45,
            carbs: 2,
            protein: 0,
            iron: '48.89',
          },
          {
            name: 'H. Achintha',
            status: 'b H. De Silva',
            calories: 3,
            fat: 10,
            carbs: 0,
            protein: 0,
            iron: 30.0,
          },
          {
            name: 'D. Kalupahana',
            status: 'lbw b M. Tharupathi',
            calories: 37,
            fat: 100,
            carbs: 4,
            protein: 0,
            iron: 37.0,
          },
          {
            name: 'D. Induwara',
            status: 'c H. De Silva b N. Jayawardana',
            calories: 3,
            fat: 10,
            carbs: 0,
            protein: 0,
            iron: 30.0,
          },
          {
            name: 'C. De Silva',
            status: 'c H. De Silva b S. Abishek',
            calories: 1,
            fat: 15,
            carbs: 0,
            protein: 0,
            iron: 6.67,
          },
          {
            name: 'T. Dilshan',
            status: 'c H. De Silva b S. Abishek',
            calories: 0,
            fat: 3,
            carbs: 0,
            protein: 0,
            iron: 0.0,
          },
          {
            name: 'H. Gallage',
            status: 'c B. Manohara b N. Jayawardana',
            calories: 39,
            fat: 96,
            carbs: 4,
            protein: 0,
            iron: 40.63,
          },
          {
            name: 'R. Hettiarachchi',
            status: 'c H. De Silva b S. Abishek',
            calories: 0,
            fat: 6,
            carbs: 0,
            protein: 0,
            iron: 0.00,
          },
          {
            name: 'S. Hasaranga',
            status: 'lbw b N. Jayawardana',
            calories: 9,
            fat: 22,
            carbs: 1,
            protein: 0,
            iron: 40.91,
          },
          {
            name: 'K. Madusha',
            status: 'run out(S. Abishek)',
            calories: 2,
            fat: 4,
            carbs: 0,
            protein: 0,
            iron: 40.91,
          },
          {
            name: 'K. Rukshan',
            status: 'not out',
            calories: 0,
            fat: 3,
            carbs: 0,
            protein: 0,
            iron: 0.00,
          }
        ],
        bowling: [
          {
            name: 'K. Nethsara',
            calories: 5,
            fat: 7,
            carbs: 0,
            protein: 0,
            iron: 1.40,
          },
          {
            name: 'H. De. Silva',
            calories: 5,
            fat: 15,
            carbs: 0,
            protein: 1,
            iron: 3.0,
          },
          {
            name: 'T. Nirmal',
            calories: 4,
            fat: 19,
            carbs: 0,
            protein: 0,
            iron: 4.75,
          },
          {
            name: 'N. Jayawardana',
            calories: 18.1,
            fat: 20,
            carbs: 0,
            protein: 4,
            iron: 1.10,
          },
          {
            name: 'C. De Silva',
            calories: 1,
            fat: 15,
            carbs: 0,
            protein: 0,
            iron: 6.67,
          },
          {
            name: 'S. Abishek',
            calories: 14,
            fat: 38,
            carbs: 0,
            protein: 3,
            iron: 2.71,
          },
          {
            name: 'M. Tharupathi',
            calories: 5,
            fat: 24,
            carbs: 0,
            protein: 1,
            iron: 4.80,
          }
        ],
      }
    },
  }
</script>
