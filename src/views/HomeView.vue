<template>
  <div>
      <v-banner
        v-if="deferredPrompt"
        color="grey darken-3"
        dark
        class="text-left"
      >
        Install the LQ web app for a better experience
        
        <template v-slot:actions>
          <v-btn text @click="dismiss">Dismiss</v-btn>
          <v-btn text @click="install">Install</v-btn>
        </template>
      </v-banner>
    <v-toolbar flat color="transparent">
      <img :src="require('../assets/logo.png')" height="30"/>
    </v-toolbar>
      <div class="ml-sm-10 mr-sm-10 ml-2 mr-2">
        <div class="text-center text-sm-subtitle-1 text-body-2">Mahinda Richmond One Day Cricket Encounter | Mahinda College Ground</div>
        <v-divider></v-divider>
        <div class="text-center text-sm-h6 text-body-1 mt-5 mb-5">{{message}}</div>
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
                v-bind:class="{ 'grey--text': rcg_active }"
                sm="3"
                xs="6"
                order-sm="2"
              >
                <div class="text-right text-h6">Mahinda College</div>
                <div class="text-right text-h3">{{mcg_score}}/{{mcg_wickets}}</div>
                <div class="text-right text-subtitle-1">Run Rate: {{mcg_rr}}</div>
                <div class="text-right text-subtitle-1">Overs: {{mcg_overs}}/50</div>
              </v-col>
              <v-col
                sm="3"
                xs="6"
                order-sm="3"
                v-bind:class="{ 'grey--text': mcg_active }"
              >
                <div class="text-left text-h6">Richmond College</div>
                <div class="text-left text-h3">{{rcg_score}}/{{rcg_wickets}}</div>
                <div class="text-left text-subtitle-1">Run Rate: {{rcg_rr}}</div>
                <div class="text-left text-subtitle-1">Overs: {{rcg_overs}}/50</div>
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
              <v-col
                v-bind:class="{ 'grey--text': rcg_active }"
              >
                <div class="text-center text-body-1">MCG</div>
                <div class="text-center text-h5">{{mcg_score}}/{{mcg_wickets}}</div>
                <div class="text-center text-subtitle-1">RR: {{mcg_rr}}</div>
                <div class="text-center text-subtitle-1">Overs: {{mcg_overs}}/50</div>
              </v-col>
              <v-col
                v-bind:class="{ 'grey--text': mcg_active }"
              >
                <div class="text-center text-body-1 grey--text">RCG</div>
                <div class="text-center text-h5 grey--text">{{rcg_score}}/{{rcg_wickets}}</div>
                <div class="text-center text-subtitle-1 grey--text">RR: {{rcg_rr}}</div>
                <div class="text-center text-subtitle-1 grey--text">Overs: {{rcg_overs}}/50</div>
              </v-col>
            </v-row>
          </div>

          <div class="d-none d-sm-block">
            <v-row
              class="mb-10"
              justify="center"
              no-gutters
            >
            <v-col lg="6" class="text-center">
              <v-btn
                v-for="(ball, i) in thisOver"
                :key="i"
                class="mx-2"
                fab
                dark
                small
              >
                {{ball}}
              </v-btn>
            </v-col>
            </v-row>
            </div>
          <div
            v-if="player1_name"
            class="d-sm-none mb-2"
          >
            <v-slide-group>
              <v-slide-item>
                <span class="mx-2 my-auto text-subtitle-2">This Over</span>
              </v-slide-item>
              <v-slide-item
                v-for="(ball, i) in thisOver"
                :key="i"
              >
                <v-btn
                  class="mx-1"
                  fab
                  dark
                  small
                >
                  {{ball}}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
            </div>
            <div
              v-if="player1_name"
              class="d-none d-sm-block">
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
                    v-if="player1_batting"
                    :src="require('../assets/bat.png')"
                    width="20"
                  >
                  </v-img>
                  </v-col>
                  <v-col>
                    <div class="subtitle-1">{{player1_name}}: {{player1_score}}<sup>*</sup>({{player1_balls}})</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="2"
                  >
                    <v-img
                      v-if="player2_batting"
                      :src="require('../assets/bat.png')"
                      width="20"
                    >
                    </v-img>
                  </v-col>
                  <v-col>
                    <div class="subtitle-1">{{player2_name}}: {{player2_score}}<sup>*</sup>({{player2_balls}})</div>
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
                    <div class="subtitle-1">{{bowler_name}}: {{bowler_wickets}}/{{bowler_score}} ({{bowler_overs}})</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            </div>
            <div
              v-if="player1_name"
              class="d-sm-none">
              <v-list
                color="transparent"
              >
                <v-list-item class="grow">
                  <v-list-item-avatar color="transparent" size="20">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="require('../assets/bat.png')"
                      v-if="player1_batting"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{player1_name}}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">{{player1_score}}<sup>*</sup>({{player1_balls}})</span>
                  </v-row>
                </v-list-item>
                <v-list-item class="grow">
                  <v-list-item-avatar color="transparent" size="20">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="require('../assets/bat.png')"
                      v-if="player2_batting"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{player2_name}}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">{{player2_score}}<sup>*</sup>({{player2_balls}})</span>
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
                    <v-list-item-title>{{bowler_name}}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <span class="subheading">{{bowler_wickets}}/{{bowler_score}} ({{bowler_overs}})</span>
                  </v-row>
                </v-list-item>
              </v-list>
            </div>
          <v-row
             v-if="player1_name"
          >
            <v-col class="text-center">
              <v-btn
                color="orange accent-3"
                dark
                large
                to="scorecard"
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
        inset
        class="py-12"
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

import _ from 'lodash';
import { collection, doc, query, onSnapshot, getDoc } from "firebase/firestore";

import db from '../db.js';

  export default {
    name: 'HomeView',

    data: function() {
      return {
        deferredPrompt: null,
        mcg_score: 0,
        mcg_wickets: 0,
        mcg_rr: 0.0,
        mcg_overs: 0,
        rcg_score: 0,
        rcg_wickets: 0,
        rcg_rr: 0.0,
        rcg_overs: 0,
        player1_name: null,
        player1_score: 0,
        player1_balls: 0,
        player2_name: null,
        player2_score: 0,
        player2_balls: 0,
        bowler_name: null,
        bowler_score: 0,
        bowler_wickets: 0,
        bowler_overs: 0,
        thisOver: [],
        mcg_active: false,
        rcg_active: false,
        player1_batting: false,
        player2_batting: false,
        message: null,
        messageReqRR: false,
        first_batting_team: null,
        second_batting_team: null
      }
    },

    components: {
    },

    beforeCreate() {
      this.$OneSignal.showSlidedownPrompt();
    },

    async mounted(){

      const configRef = doc(db, "main", "config");
      const configSnap = await getDoc(configRef);

      if (configSnap.exists()) {
        this.first_batting_team = _.get(configSnap.data().inningOrder[0], 'team', null);
        this.second_batting_team = _.get(configSnap.data().inningOrder[1], 'team', null);
      }

      const q = query(collection(db, "innings"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().team === "mcg" && doc.data().inning === 1){
            this.mcg_score = doc.data().score;
            this.mcg_wickets = doc.data().wickets;
            this.mcg_overs = Math.floor(doc.data().balls/6)+(doc.data().balls%6)/10;
            var mcg_rr = (this.mcg_score/this.mcg_overs).toFixed(2);
            if(isNaN(mcg_rr))  mcg_rr = 0;
            this.mcg_rr = mcg_rr;
          }
          if (doc.data().team === "rcg" && doc.data().inning === 1){
            this.rcg_score = doc.data().score;
            this.rcg_wickets = doc.data().wickets;
            this.rcg_overs = Math.floor(doc.data().balls/6)+(doc.data().balls%6)/10;
            var rcg_rr = (this.rcg_score/this.rcg_overs).toFixed(2);
            if (isNaN(rcg_rr)) rcg_rr = 0;
            this.rcg_rr = rcg_rr;
          }
        });
      });

      onSnapshot(doc(db, "main", "live"), (doc) => {
          this.player1_name = _.get(doc.data().player1, 'name', null);
          this.player1_score = _.get(doc.data().player1, 'score', null);
          this.player1_balls = _.get(doc.data().player1, 'balls', null);

          this.player2_name = _.get(doc.data().player2, 'name', null);
          this.player2_score = _.get(doc.data().player2, 'score', null);
          this.player2_balls = _.get(doc.data().player2, 'balls', null);

          let bowler_balls = _.get(doc.data().bowler, 'balls', 0);
          this.bowler_overs = Math.floor(bowler_balls/6)+(bowler_balls%6)/10;
          this.bowler_name = _.get(doc.data().bowler, 'name', null);
          this.bowler_score = _.get(doc.data().bowler, 'score', null);
          this.bowler_wickets = _.get(doc.data().bowler, 'wickets', null);

          this.thisOver = doc.data().thisOver;

          if (doc.data().team === "mcg"){
            this.mcg_active = true;
            this.rcg_active = false;
          }else if (doc.data().team === "rcg"){
            this.mcg_active = false;
            this.rcg_active = true;
          }

          if (doc.data().currentPlayer === "player1"){
            this.player1_batting = true;
            this.player2_batting = false;
          }else if (doc.data().currentPlayer === "player2") {
            this.player1_batting = false;
            this.player2_batting = true;
          }

          this.message = doc.data().message;
          this.messageReqRR = doc.data().messageReqRR;

          if (this.messageReqRR){
            var toWinScore = 0;
            var remainBalls = 300 - doc.data().balls;
            var remainOvers = Math.floor(remainBalls/6)+(remainBalls%6)/10;
            var currentBatting = null;
            var remainBO = null

            if (remainBalls > 100){
              remainBO = remainOvers + " overs";
            }else {
              remainBO = remainBalls + " balls";
            }
            
            if (this.first_batting_team === "mcg"){
              toWinScore = this.mcg_score - this.rcg_score;
              currentBatting = "RCG"
            }else if (this.first_batting_team === "rcg"){
              toWinScore = this.rcg_score - this.mcg_score;
              currentBatting = "MCG"
            }

            var RRR = (toWinScore/remainBalls)*6;

            if(toWinScore > 0) {
              this.message = currentBatting + " require " + toWinScore + " runs in " + remainBO + " to win | Req RR: " + RRR.toFixed(2);
            }
          }
      });
    },

      created() {
        window.addEventListener("beforeinstallprompt", e => {
          e.preventDefault();
          // Stash the event so it can be triggered later.
          this.deferredPrompt = e;
        });
    window.addEventListener("appinstalled", () => {
          this.deferredPrompt = null;
        });
      },
      methods: {
        async dismiss() {
          this.deferredPrompt = null;
        },
        async install() {
          this.deferredPrompt.prompt();
        }
      }
  }
</script>
