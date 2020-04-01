<template>
  <div id="app">
    <div id="nav" style="text-align:right; "  >

      <router-link id="router" to="/login">Login</router-link> 
      <router-link id="router" to="/pages">Pages</router-link>  <br>

      <router-link id="router" to="/Object_vvedeni_v_eksplyataciu_JM">ЖМ - Объект введенный в эксплуатацию</router-link>  <br>

      <router-link id="router" to="/Sdelka_s_izolirovannim_pomejeniem_PS">ПС - Сделка с изолированным помещением</router-link> 
      <router-link id="router" to="/Sdelka_s_kap_stroeniem_PS">ПС - Сделка с капитальным строением</router-link> 
      <router-link id="router" to="/Object_vvedeni_v_eksplyataciu_PS">ПС - Объект введенный в эксплуатацию</router-link>  <br>
      
      <router-link id="router" to="/Sdelka_s_izolirovannim_pomejeniem_OD">ОД - Сделка с изолированным помещением</router-link> 
      <router-link id="router" to="/Sdelka_s_kap_stroeniem_OD">ОД - Сделка с капитальным строением</router-link> 
      <router-link id="router" to="/Object_vvedeni_v_eksplyataciu_OD">ОД - Объект введенный в эксплуатацию</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 15px;
}
#router {
  margin-right: 20px;
}
</style>