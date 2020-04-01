<template >
  <div id="map" ></div>
</template>

<script>


var Marker = false;

export default {
  mounted() {
    this.$nextTick(function() {
      Maps();
    })
  }
};
function Maps() {
  var map = L.map('map').setView([53.899138, 27.551585], 6);

  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Mq2mshhVdncP6vixLKJP', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }).addTo(map);

  var marker = L.marker([52.758674 ,26.426767]).addTo(map);


  map.on('click', onMapClick);

  function onMapClick(e) {
    if (Marker == true){
      alert('ww');
      map.removeLayer(marker2.pop());
    }else{
 //console.log(e.latlng.lng.toString())
      var marker2 = L.marker([e.latlng.lat.toString() ,e.latlng.lng.toString()]).addTo(map);

      var x = e.latlng.lat.toString();
      var y = e.latlng.lng.toString();

      Marker=true;
    }  
  }

  return map;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  height: 380px;
  width: 100%;
}
</style>
