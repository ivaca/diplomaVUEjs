<template>
  <v-app>
    <v-content class="gradient" style="padding-left:270px">
      <v-container class="container fill-height container--fluid ">
        <v-row style="height:50%;">
          <v-col col col-12>
            <v-card style="height:100%;width:100%">
              <Map />
            </v-card>
          </v-col>
          <v-col col col-12>
            <v-card style="height:100%;width:100%">
              <v-data-table
                :headers="headers"
                :items="trainees"
                class="elevation-1 "
              >
                <template v-slot:top>
                  <v-toolbar
                    extended
                    short
                    flat
                    color="transparent"
                    style="width:100%"
                  >
                    <v-tabs grow v-model="tab" color="black">
                      <v-tab :key="1">
                        П-42
                      </v-tab>
                    </v-tabs>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small class="mr-2" @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-icon small v-on="on">
                        mdi-account-plus
                      </v-icon>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                              v-for="item in headers"
                              :key="item.number"
                            >
                              <v-text-field
                                v-if="item.sortable"
                                :v-model="item"
                                :label="item.text"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close"
                          >Отмена</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="save"
                          >Сохранить</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col col col-12>
            <base-material-stats-card
              color="info"
              icon="mdi-twitter"
              title="Followers"
              value="+245"
              sub-icon="mdi-clock"
              sub-text="Just Updated"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import Map from "@/components/OpenLayersMap.vue";
import { serverBus } from "@/main.js";

import VueChartist from "v-chartist";

export default {
  components: {
    Map,
    "vue-chartist": VueChartist,
  },

  data() {
    return {
      data: {
        chartData: {
          "2020-05-13": 2,
          "2020-05-13": 1,
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6],
        ],
      },
      options: {
        fullWidth: true,
        chartPadding: {
          right: 40,
        },
      },
      chartOptions: {
        lineSmooth: false,
      },
      dialog: false,
      headers: [
        { text: "ФИО учащегося", value: "fio" },
        { text: "Место прохождения практики", value: "organization" },
        { text: "Адрес базы практики", value: "address" },

        { text: "Actions", value: "actions", sortable: false },
      ],
      trainees: [],
      editedIndex: -1,
      editedItem: {
        fio: "",
        organization: "",
        address: "",
      },
      defaultItem: {
        fio: "",
        organization: "",
        address: "",
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Добавить практиканта"
        : "Изменить практиканта";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      axios
        .post("http://localhost:3333/tables", {
          group: "П-42",
        })
        .then((res) => {
          this.trainees = res.data;
          serverBus.$emit("GotTrainees", this.trainees);
          console.log(res);
          //  this.areas_ps.push(...this.areas["sdelka_kap_ps"]);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editItem(item) {
      this.editedIndex = this.trainees.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.trainees.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.trainees.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.trainees[this.editedIndex], this.editedItem);
      } else {
        this.trainees.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400&display=swap");

* {
  font-family: "Montserrat", sans-serif !important;
}
.gradient {
  background: rgb(238, 238, 238);
}
.v-btn {
  text-transform: none !important;
}
</style>
