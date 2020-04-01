<template>
  <v-app>
    <v-content>
      <v-container class="container ">
        <v-row justify="space-around">
          <v-flex>
            <v-card col12>
              <v-tabs grow v-model="tab" background-color="primary" dark>
                <v-tab :key="1">
                  ОБЪЕКТ, ВВЕДЕННЫЙ В ЭКСПЛУАТАЦИЮ
                </v-tab>
                <v-tab :key="2">
                  СДЕЛКА С ИЗОЛИРОВАННЫМ ПОМЕЩЕНИЕМ
                </v-tab>
                <v-tab :key="3">
                  СДЕЛКА С КАПИТАЛЬНЫМ СТРОЕНИЕМ
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
              <v-tabs-items v-model="tab" >
                <v-tab-item :key="1" >
                  <v-card flat loading>
                    <v-card-text>
                      <v-data-table
                        @click:row="gotoPage"
                        :headers="headers"
                        :items="areas"
                        :items-per-page="5"
                        class="elevation-1"
                        :search="search"
                      ></v-data-table>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="2">
                  <v-card flat>
                    <v-card-text>
                      <v-data-table
                        :headers="headers"
                        :items="areas"
                        :items-per-page="5"
                        class="elevation-1"
                        :search="search"
                      ></v-data-table>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="3">
                  <v-card flat>
                    <v-card-text>
                      <v-data-table
                        :headers="headers"
                        :items="areas"
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



//http://localhost:3333/sql
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
          value: "inv_num"
        },
        { text: "Адрес", value: "address" },
        { text: "Кадастр. номер зем. участка", value: "kad_num" },
        { text: "Назначение", value: "title" }
      ],
      areas: [
        /*{
          inv_num: "Frozen Yogurt",
          address: 159,
          kad_num: 6.0,
          title: 24
        }
*/
      ]
    };
  },
  created: function() {
    axios.get("http://localhost:3333/sql").then(res => {
      this.areas = res.data;
    });
  },
  methods: {
    gotoPage: function(value) {
      this.$router.push({
        name: "About2",
        params: { inv_num: value["inv_num"], address: value["address"] }
      });
    }
  }
};
</script>
