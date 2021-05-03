<template>
  <v-navigation-drawer
    v-if="!login"
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    absolute
    dark
  >
    <v-list dense nav class="mr-2">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-avatar style="margin-left:-8px;">
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content style="margin-left:8px;">
              <v-list-item-title>Ирина Юрьевна</v-list-item-title>

              <v-list-item-subtitle>ПОИТ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item
          style="margin-left:6px;"
          v-for="item in items_profile"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="margin-left:10px;">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-divider style="margin:15px 0px 15px 0px;"></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        style="margin-left:6px;"
        @click="changeRoute(item.link)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content style="margin-left:10px;">
          <v-list-item-title>{{ item.title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-grid</v-icon>
            </v-list-item-icon>

            <v-list-item-content style="margin-left:8px;">
              <v-list-item-title>Таблицы</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item
          style="margin-left:20px;"
          v-for="table in tables"
          :key="table.title"
          link
          @click="changeRouteTable(table.link)"
        >
          <v-list-item-icon>
            <v-icon>{{ table.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="margin-left:10px;">
            <v-list-item-title>{{ table.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/OpenLayersMap.vue";

export default {
  components: {
    Map,
  },
  data() {
    return {
      drawer: true,
      login: false,
      items: [
        { title: "Основное", icon: "mdi-view-dashboard", link: "main" },
        { title: "Карта", icon: "mdi-map-marker", link: "map" },
        // { title: "Таблицы", icon: "mdi-grid", link: "Tables" },
        { title: "Календарь", icon: "mdi-calendar", link: "calendar" },
      ],
      items_profile: [
        { title: "Изменить профиль", icon: "mdi-account-edit" },
        { title: "Выйти", icon: "mdi-exit-to-app" },
      ],
      tables: [
        { title: "Учащиеся", icon: "mdi-account", link: "students" },
        {
          title: "Группы",
          icon: "mdi-account-multiple-outline",
          link: "groups",
        },
        { title: "Организации", icon: "mdi-tie", link: "organizations" },
        {
          title: "Закрепленные уч-ся",
          icon: "mdi-account-key",
          link: "assigned_students",
        },
        {
          title: "Преподаватели",
          icon: "mdi-clipboard-account",
          link: "teachers",
        },
        { title: "Сроки и виды", icon: "mdi-timetable", link: "terms_n_types" },
        {
          title: "Посещения",
          icon: "mdi-comment-check-outline",
          link: "visits",
        },
      ],

      color: "#2b5876",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    };
  },
  methods: {
    changeRoute: function(link) {
      this.$router.push({ path: "/" + link + "/" });
    },
    changeRouteTable: function(link) {
      this.$router.push({ path: "/tables/" + link });
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
