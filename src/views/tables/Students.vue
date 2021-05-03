<template>
  <div class="small">
    <line-chart :data="chartData"> </line-chart>
  </div>
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
      chartData: {
        "2042-05-13": 2,
      },
    };
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
