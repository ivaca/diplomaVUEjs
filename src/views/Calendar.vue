<template>
  <v-app>
    <v-content class="gradient" style="padding-left:270px">
      <v-container class="container fill-height container--fluid ">
        <v-row style="height:100%;">
          <v-col col col-12>
            <Calendar />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Calendar from "@/components/Calendar";
export default {
  name: "App",
  components: {
    Calendar,
  },
  data: () => ({
    //
  }),
};
</script>
