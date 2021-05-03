<template>
  <div id="map"></div>
</template>

<script>
import { serverBus } from "@/main.js";
import axios from "axios";

var Marker = false;

export default {
  data: {
    trainees: "",
  },
  mounted() {
    this.$nextTick(function() {
      Maps();
    });
  },
  created() {},
};
function Maps() {
  var map = L.map("map").setView([39.62, -79.98], 11);

  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Mq2mshhVdncP6vixLKJP",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ).addTo(map);

  //var marker = L.marker([54.778674, 25.456767]).addTo(map);

  // map.on("click", onMapClick);
  serverBus.$on("GotTrainees", (trainees) => {
    serverBus.trainees = trainees;

    for (var i = 0; i < serverBus.trainees.length; i++) {
      axios
        .get(
          "http://open.mapquestapi.com/geocoding/v1/address?key=kyGJqWSbevVre2augMpGxeatRbLi21s7&location=" +
            serverBus.trainees[i]["address"]
        )
        .then((res) => {
          L.marker([
            res["data"]["results"][0]["locations"][0]["latLng"]["lat"],
            res["data"]["results"][0]["locations"][0]["latLng"]["lng"],
          ]).addTo(map);
          //  this.areas_ps.push(...this.areas["sdelka_kap_ps"]);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  });

  return map;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
