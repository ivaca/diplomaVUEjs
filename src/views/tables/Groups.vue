<template>
  <v-app>
    <v-content class="gradient" style="padding-left:270px">
      <v-container class="container fill-height container--fluid ">
        <v-row style="height:100%;">
          <v-col col col-12>
            <v-card>
              <v-data-table
                :headers="headers"
                :items="trainees"
                sort-by="calories"
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
                      <v-tab :key="2">
                        П-1722
                      </v-tab>
                      <v-tab :key="3">
                        П-102
                      </v-tab>
                    </v-tabs>

                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="primary"
                          dark
                          class="mb-2 mt-3 mr-5 "
                          v-on="on"
                          >Добавить</v-btn
                        >
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
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
            </v-card>
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

export default {
  components: {
    Map,
  },
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Группа", value: "group_", sortable: true },
        { text: "ФИО куратора", value: "fio_curator", sortable: true },
        { text: "Телефон куратора", value: "phone_curator", sortable: true },

        { text: "Actions", value: "actions", sortable: false },
      ],
      trainees: [],
      editedIndex: -1,
      editedItem: {
        group_: "",
        fio_curator: "",
        phone_curator: "",
      },
      defaultItem: {
        group_: "",
        fio_curator: "",
        phone_curator: "",
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
        .post("http://localhost:3333/groups")
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
  background: rgb(43, 88, 118);
  background: linear-gradient(
    90deg,
    rgba(43, 88, 118, 1) 0%,
    rgba(78, 67, 118, 1) 100%
  );
}
.v-btn {
  text-transform: none !important;
}
</style>
