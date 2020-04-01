<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }" v-if="outlined_field === 'true'">
      <v-text-field
        v-model="computedDateFormatted"
        readonly
        outlined
        v-on="on"
        v-bind:label="label_prop"
      ></v-text-field>
    </template>
    <template v-slot:activator="{ on }" v-else>
      <v-text-field v-model="computedDateFormatted" readonly v-on="on"></v-text-field>
    </template>

    <v-date-picker v-model="date" locale="ru" no-title scrollable @input="menu1 = false">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Отмена</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">Ок</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {},
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [day, month,  year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  props: {
    outlined_field: Boolean,
    label_prop: String
  }
};
</script>