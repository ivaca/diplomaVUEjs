<template>
  <v-app>
    <v-content class="gradient">
      <v-container class="container fill-height container--fluid ">
        <v-card
          class="elevation-0 "
          align="center"
          style=" width:1000px; border-radius:12px;   height:400px;margin-left:auto!important;margin-right:auto!important;   "
        >
          <v-alert color="error" :value="error" icon="mdi-close">
            Не правильный логин или пароль!
          </v-alert>
          <v-card-text
            style=" margin: 0px;
  padding: 0px;"
          >
            <v-form>
              <v-container mt-12 style="width:50%;float:right;">
                <h1
                  class="text-center title mt-5 mb-8"
                  style="color:#585858; font-weight: 400; "
                >
                  Добро пожаловать!
                </h1>
                <v-row no-gutters>
                  <v-flex col col-12>
                    <v-text-field
                      label="Логин"
                      hide-details="auto"
                      v-model="login"
                      name="login"
                      solo
                    ></v-text-field>
                  </v-flex>
                  <v-flex col col-12 mt-5>
                    <v-text-field
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      label="Пароль"
                      value=""
                      v-model="password"
                      name="password"
                      @click:append="show1 = !show1"
                      solo
                    ></v-text-field>
                  </v-flex>
                  <v-flex col col-12 mt-n5>
                    <h4 style="float:right; margin-right:5px">
                      Забыли пароль?
                    </h4>
                  </v-flex>
                  <v-flex col mt-5>
                    <v-btn
                      @click.prevent="doLogin()"
                      color="rgb(243, 187, 187)"
                      class="subtitle-2"
                      style="width:25%"
                      rounded
                    >
                      Войти
                    </v-btn>
                  </v-flex>
                </v-row>
                <v-flex col mt-5>
                  <v-progress-linear
                    :hidden="false"
                    buffer-value="0"
                    stream
                    color="teal"
                  ></v-progress-linear>
                </v-flex>
              </v-container>

              <v-container style="width:50%;float:left; padding-top:0px; ">
                <v-row>
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    :show-arrows="false"
                    style="mt-n5"
                  >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                      <v-sheet :color="colors[i]" height="100%">
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">{{ slide }} Slide</div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
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
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      show1: false,
      password: "",
      login: "",
      error: false,
      rules: {
        required: (value) => !!value || "Поле обязательно для заполнения!",
      },
    };
  },
  methods: {
    lllogin: function() {
      console.log(this.$router);
      this.$router.push("pages");
    },
    doLogin: function() {
      this.$store
        .dispatch("LOGIN", {
          login: this.login,
          password: this.password,
        })
        .then((success) => {
          console.log(success);

          this.$router.push("/pages");
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
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
  background: rgb(238, 205, 163);
  background: linear-gradient(
    90deg,
    rgba(238, 205, 163, 1) 0%,
    rgb(153, 95, 120) 100%
  );
}
.v-btn {
  text-transform: none !important;
}
</style>
