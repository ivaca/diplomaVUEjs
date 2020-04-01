<template>
  <v-app>
    <v-content>
      <v-container class="container fill-height container--fluid">
        <v-card
          align="center"
          style="width:472px; margin-left:auto!important;margin-right:auto!important;"
        >
          <v-toolbar style="height:64px;  background-color: #25408f;">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              elevation="0"
              color="transparent"
            >
              <v-icon dark>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">Вход</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-container>
                <v-row no-gutters>
                  <v-flex col col-12>
                    <v-text-field
                      label="Логин"
                      :rules="[rules.required]"
                      hide-details="auto"
                    ></v-text-field>
                  </v-flex>
                  <v-flex col col-12>
                    <v-text-field
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Пароль"
                      value=""
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>

                  <v-flex col-sm-3 col-md-3 col-lg-3 col-12 mt-5>
                    <v-btn
                      color="indigo"
                      style="float:left;"
                      v-on:click="login"
                      dark
                    >
                      Войти
                    </v-btn>
                  </v-flex>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
    <router-view />
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "Поле обязательно для заполнения!"
      }
    };
  },
  methods: {
    login: function() {
      console.log(this.$router);
      this.$router.push("pages");
    }
  }
};
</script>
