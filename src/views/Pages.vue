<template>
  <v-app>
    <v-content>
      <v-container class="container">
        <v-row justify="space-around">
          <v-flex>
            <v-card col12>
              <v-tabs grow v-model="tab" background-color="primary" dark>
                <v-tab :key="1">
                  ПС
                </v-tab>
                <v-tab :key="2">
                  ЖМ
                </v-tab>
                <v-tab :key="3">
                  ОД
                </v-tab>
              </v-tabs>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Поиск"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-tabs-items v-model="tab">
                <v-tab-item :key="1">
                  <v-card flat>
                    <v-card-text>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Сделки" value="sdelki"></v-radio>
                        <v-radio label="Объекты" value="objecti"></v-radio>
                      </v-radio-group>
                    </v-card-text>

                    <v-card flat v-if="row === 'sdelki'">
                      <v-card-text>
                        <v-data-table
                          @click:row="
                            loadPage('Sdelka_s_kap_stroeniem_PS', $event)
                          "
                          :headers="headers"
                          :items="areas['Sdelka_s_kap_stroeniem_PS']"
                          :items-per-page="5"
                          class="elevation-1"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                    <v-card flat v-if="row === 'objecti'">
                      <v-card-text>
                        <v-data-table
                          @click:row="
                            loadPage('Object_vvedeni_v_eksplyataciu_PS')
                          "
                          :headers="headers"
                          :items="areas['Object_vvedeni_v_eksplyataciu_PS']"
                          :items-per-page="5"
                          class="elevation-1"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="2">
                  <v-card flat>
                    <v-card-text>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Сделки" value="sdelki"></v-radio>
                        <v-radio label="Объекты" value="objecti"></v-radio>
                      </v-radio-group>
                    </v-card-text>

                    <v-card flat v-if="row === 'sdelki'"> </v-card>
                    <v-card flat v-if="row === 'objecti'">
                      <v-card-text>
                        <v-data-table
                          @click:row="
                            loadPage('Object_vvedeni_v_eksplyataciu_JM', $event)
                          "
                          :headers="headers"
                          :items="areas['Object_vvedeni_v_eksplyataciu_JM']"
                          :items-per-page="5"
                          class="elevation-1"
                          :search="search"
                        ></v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="3">
                  <v-card flat>
                    <v-card-text>
                      <v-data-table
                        :headers="headers"
                        :items="area_od"
                        :items-per-page="5"
                        class="elevation-1"
                        :search="search"
                      ></v-data-table>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-flex>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      tab: null,
      headers: [
        {
          text: "Инвентарный номер",
          align: "start",
          sortable: false,
          value: "inv_num",
        },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kadastr_nomer_zy" },
        { text: "Статус восполнения", value: "status" },
      ],
      areas: {},
      row: "sdelki",
      roww: "",
    };
  },
  created: function() {
    if (localStorage.getItem("auth_key") && localStorage.getItem("user_id")) {
      //сделать проверку ключа, т.к. сейчас можно просто через localStorage поменять на любое значение

      axios
        .post("https://82.202.204.7:3333/api/areas", {
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          this.areas = res.data;
          console.log(res);
          //  this.areas_ps.push(...this.areas["sdelka_kap_ps"]);
        })
        .catch(function(error) {
          console.log(error);
        });

      console.log(this.$store.state.LOGIN);
      console.log(localStorage);
    } else {
      //если пользователь не входил
      this.$router.push({
        name: "Login",
      });
    }
  },
  methods: {
    loadPage: function(page, value) {
      this.$router.push({
        name: page,
        params: { inv_num: value["inv_num"] },
      });
    },
  },
};
</script>
