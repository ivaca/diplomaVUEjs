<template>
  <v-app>
    <header color="indigo">
      <h2 class="text-center mt-3 white--text">
        ОБЪЕКТ, ВВЕДЕННЫЙ В ЭКСПЛУАТАЦИЮ
      </h2>

      <v-container>
        <v-layout row wrap align-baseline justify-space-around>
          <v-flex col-sm-4 col-md-4 col-lg-5 col-12>
            <v-select
              :items="status"
              label="Укажите статус восполнения"
              background-color="white"
              single-line
              solo
              :clearable="clearable"
            ></v-select>
          </v-flex>

          <v-flex col-sm-4 col-md-4 col-lg-5 col-12>
            <v-text-field
              label="Заполните в случае отказа от восполнения:"
              background-color="white"
              single-line
              solo
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </header>

    <div class="menu">
      <v-container class="my-5" style=" padding: 0px; ">
        <v-container pa-2>
          <v-flex col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12>
            <h3>ОБЩИЕ СВЕДЕНИЯ</h3>
          </v-flex>

<v-card outlined style="padding: 15px 15px 15px 15px ;">
          <v-container pa-2>
            <v-layout row wrap>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field label="Инвентарный номер:" disabled placeholder=" " value></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field label="Адрес:" disabled placeholder=" " value></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      label="Кадастровый номер земельного участка:"
                      disabled
                      placeholder=" "
                      value
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      placeholder=" "
                      type="number"
                      label="Кадастровый номер земельного участка (Заполнить в случае несоответствия) "
                      outlined
                      :clearable="clearable"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-card outlined style=" height:450px">
                  <div id="map" style="height:450px; "></div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <br>

<v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Назначение:</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field outlined disabled placeholder=" " value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-input></v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Наименование:</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field outlined disabled placeholder=" " value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                outlined
                placeholder="  "
                value
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <span>Дата составления техпаспорта:</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <Calendar outlined_field="true" label_prop="Дата составления техпаспорта" />
            </v-flex>
          </v-layout>
        </v-card>
        </v-container>

        <v-container pa-2>
          <v-layout justify-start mt-10>
            <v-flex col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12>
              <h3>ОБЩИЕ ХАРАКТЕРИСТИКИ</h3>
            </v-flex>
          </v-layout>

          <v-card outlined style="padding: 15px 15px 15px 15px ;">
            <v-layout row wrap align-baseline="">
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Год постройки</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-select
                  :items="yers"
                  outlined
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
                  :clearable="clearable"
                ></v-select>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Общая площадь, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field
                  outlined
                  placeholder=" "
                  :clearable="clearable"
                  type="number"
                  label="Заполнить в случае несоответствия"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap align-baseline="">
                            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Количество этажей</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-select
                  :items="colvo_etazh"
                  outlined
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
                  :clearable="clearable"
                ></v-select>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Объем, куб.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number" label="Заполнить в случае несоответствия" placeholder=" "></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap align-baseline="">
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Количество подземных этажей</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field
                  outlined
                  placeholder=" "
                  :clearable="clearable"
                  type="number"
                  label="Заполнить в случае несоответствия"
                ></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Нормируемая (полезная) площадь, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number" label="Заполнить в случае несоответствия" placeholder=" "></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap align-baseline="">
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Площадь застройки, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number" label="Заполнить в случае несоответствия" placeholder=" "></v-text-field>
              </v-flex>
              <v-flex col-sm-3 col-md-2 col-lg-2 col-12>
                <span>Вспомогательная площадь, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined disabled></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number" label="Заполнить в случае несоответствия" placeholder=" "></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap align-baseline="">
              <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Площадь земельного участка, га</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Заполнить в случае несоответствия"
              ></v-text-field>
            </v-flex>
             <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Дата обследования при технической инвентаризации</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <Calendar outlined_field="true" label_prop="Дата обследования" />
            </v-flex>
            </v-layout>
          </v-card>
        </v-container>

        <v-container pa-2>
          <v-layout justify-start mt-10>
            <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
              <h3>ПЛОЩАДНЫЕ ХАРАКТЕРИСТИКИ</h3>
            </v-flex>
          </v-layout>

          <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12" ml-3 mb-3>
          <h2 >Общая площадь: </h2> 
          </v-flex>
            <v-layout row wrap fill-height>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Производственных помещений, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>


              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Складских помещений, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Административных помещений, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap fill-height>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Торговых помещений, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>

              
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Коммунально-бытовых помещений, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Транспортного назначения, кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap fill-height>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Вспомогательных помещений(коридоры, лестницы, бойлерные, тамбуры и тп.), кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Иных помещений(помещения не вошедшие в вышеуказанные категории), кв.м</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined label="Доп. помещения:" :clearable="clearable" placeholder=" "></v-text-field>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>

        <v-container pa-2>
          <v-layout justify-start mt-10>
            <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
              <h3>КОНСТРУКТИВНЫЕ ХАРАКТЕРИСТИКИ</h3>
            </v-flex>
          </v-layout>
          <v-card outlined style="padding: 15px 15px 0px 15px ;">
            <v-layout row wrap>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Шаг колонн, м</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="col_pitch" :clearable="clearable"></v-select>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал перекрытий</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="perekr_mat" :clearable="clearable"></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Пролет, м</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="prolet_m" :clearable="clearable"></v-select>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал кровли</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="krovl_mat" :clearable="clearable"></v-select>
              </v-flex>
            </v-layout>


            <v-layout row wrap>
              <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал стен</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :clearable="clearable" :items="material_sten" outlined single-line></v-select>
            </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Конструкция здания</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="konstr_zdania" :clearable="clearable"></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал фундаментов (по преобладающей площади)</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="found_mat" :clearable="clearable"></v-select>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал дверей внутренних</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="door_ins_mat" :clearable="clearable"></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Высота потолка</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="floor_height" :clearable="clearable"></v-select>
              </v-flex>

              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал дверей наружных</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="door_out_mat" :clearable="clearable"></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал покрытия пола (по преобладающей площади)</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="floor_mat" :clearable="clearable"></v-select>
              </v-flex>
 
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Проёмы оконные</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="proem_window" :clearable="clearable"></v-select>
              </v-flex>
              
             
            </v-layout>

            <v-layout row wrap >
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Внутренняя отделка здания</span>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-select outlined :items="default_value" :clearable="clearable" v-model="selected4" v-on:change="otdelka()"></v-select>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12 id="combo2">
                <v-combobox           
                  :disabled="vnyt_otdelka"    
                  :items="vnytr_otdelka"
                  multiple
                  outlined                
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
              ></v-combobox>
              </v-flex>
             <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Наружная отделка здания</span>
              </v-flex>
              <v-flex col-sm-2col-md-2 col-lg-2 col-12>
                <v-select outlined :items="default_value" :clearable="clearable" v-model="selected3" v-on:change="otdelka()"></v-select>
              </v-flex>
              <v-flex  col-sm-2 col-md-2 col-lg-2 col-12 >
                 <v-combobox
                  :disabled="narj_odelka"  
                  :items="naryj_otdelka"
                  multiple
                  outlined     
                  label="Заполнить в случае несоответствия"
                  placeholder=" "
              ></v-combobox>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Погрузочно-разгрузочное оборудование</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="pogryzochno_razgryzochnoe_oborydovanie" outlined :clearable="clearable"></v-select>
            </v-flex>
           
            </v-layout>
          </v-card>
        </v-container>

        <v-container pa-2>
          <v-layout justify-start mt-10>
            <v-flex col-sm-8 col-md-8 col-lg-6 col-xl-4 col-12>
              <h3>ИНЖЕНЕРНОЕ, САНИТАРНО-ТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ</h3>
            </v-flex>
          </v-layout>

          <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Электроснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
                              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Отопление</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Холодное водоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Горячее водоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Водоотведение/канализация</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Газоснабжение</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="default_value"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
                        <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Тип вентиляции</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-select
                :items="tip_ventil"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card>
        </v-container>

        <v-layout justify-start mt-10>
          <v-flex col-sm-8 col-md-8 col-lg-6 col-xl-4 col-12>
            <h3>ДАННЫЕ АКТА ВВОДА В ЭКСПЛУАТАЦИЮ</h3>
          </v-flex>
        </v-layout>

        <v-container pa-2>
                  <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-center>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Дата акта</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <Calendar outlined_field="true" label_prop="Дата составления акта" />
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <span>Тип документа, из которого внесена стоимость</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select :items="doc_type" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12"></v-flex>
          </v-layout>

          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость по ПСД</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <span>Уровень цен ПСД</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select :items="price_year" :clearable="clearable" outlined v-model="selected" v-on:change="calendarik()"></v-select>
            </v-flex>
            <v-flex style="display:none;" class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12" id="date">
              <Calendar outlined_field="true" />
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость основных фондов</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <span>Уровень цен основных фондов</span>
            </v-flex>
            <v-flex class="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-12">
              <v-select :items="price_year" :clearable="clearable" outlined v-model="selected2" v-on:change="calendarik()"></v-select>
            </v-flex>
            <v-flex style="display:none;" class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12" id="date2">
              <Calendar outlined_field="true" />
            </v-flex>
          </v-layout>

          <br />

          <p style="font-size: 200%;">Примечания</p>
          <v-text-field
            placeholder=" "
            outlined
            :clearable="clearable"
            label="В случае, если вы знакомы с объектом, укажите свое экспертное мнение о нем (не используется/вводился очередями/долгострой/смена профиля и др.)"
          ></v-text-field>
        </v-card>
        </v-container>

      </v-container>
      <v-footer style="background-color:#0000ff;">
        <v-container>
          <v-card flat style="background-color: transparent;">
            <v-card-text>
              <v-layout row justify-center>
                <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                  <v-img
                    src="https://pr.nca.by/img/nca.6a52f026.svg"
                    aspect-ratio="5"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex
                  col-sm-4
                  col-md-2
                  col-lg-2
                  col-12
                  text-center
                  text-sm-left
                  text-md-left
                  text-lg-left
                  text-xl-left
                  pt-0
                >
                  <div mt-4>
                    <ul class="footer-list">
                      <li>
                        <a>Вопросы и ответы</a>
                      </li>
                      <li>
                        <a>Онлайн-чат</a>
                      </li>
                      <li>
                        <a>Форма обратной связи</a>
                      </li>
                    </ul>
                  </div>
                </v-flex>

                <v-flex
                  col-sm-4
                  col-md-2
                  col-lg-2
                  col-12
                  text-center
                  text-sm-left
                  text-md-left
                  text-lg-left
                  text-xl-left
                  pt-0
                  mt-5
                >
                  <div>
                    <ul class="footer-list">
                      <li></li>
                      <li>
                        <a href="https://goo.gl/rV8Jpb"
                          >https://goo.gl/rV8Jpb</a
                        >
                      </li>
                      <li>
                        <a href="https://goo.gl/PcaMnC"
                          >https://goo.gl/PcaMnC</a
                        >
                      </li>
                    </ul>
                  </div>
                </v-flex>

                <v-flex
                  col-sm-4
                  col-md-2
                  col-lg-2
                  col-12
                  text-center
                  text-sm-left
                  text-md-left
                  text-lg-left
                  text-xl-left
                  pt-0
                >
                  <h4 class="white--text">
                    Контактный номер
                  </h4>

                  <h4 class="white--text" style="margin-top:20px;">
                    E-mail
                  </h4>
                </v-flex>
                <v-flex
                  col-sm-6
                  col-md-3
                  col-lg-3
                  col-12
                  text-center
                  text-sm-left
                  text-md-left
                  text-lg-left
                  text-xl-left
                  pt-0
                >
                  <div mt-4>
                    <ul class="footer-list">
                      <li>
                        <a href="tel:+375172881035">+375-17-288-10-35</a>
                      </li>
                      <li>
                        <a href="tel:+375292206663">+375-29-220-66-63</a>
                      </li>
                      <li>
                        <a href="email:2881035@nca.by">2881035@nca.by</a>
                      </li>
                    </ul>
                  </div>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-container>
      </v-footer>

      <v-speed-dial
        v-model="fab"
        class="mr-4 mb-2"
        :top="top"
        bottom
        right
        fixed
        :left="left"
        direction="left"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn color="blue darken-2" v-model="fab" bottom right dark fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-layout mb-3 class="fixed-buttons">
          <v-btn
            style="width:138px;"
            dark
            medium
            rounded
            elevation-7
            color="red"
          >
            Очистить
            <v-icon dark right>mdi-cancel</v-icon>
          </v-btn>
          <v-btn
            style="width:138px;"
            dark
            medium
            rounded
            elevation-7
            color="green"
          >
            Файл
            <v-icon dark right>mdi-file</v-icon>
          </v-btn>
          <v-btn
            dark
            medium
            style="width:138px;"
            rounded
            elevation-7
            color="indigo"
          >
            Отправить
            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-layout>
      </v-speed-dial>
    </div>
  </v-app>
</template>

<script>

import axios from "axios";
import Calendar from "@/components/Calendar";



export default {
  components: {
    Calendar,
  },
  data: () => ({
    vnyt_otdelka: true,
    narj_odelka: true,
    selected: '',
    selected2: '',
    selected3: '',
    selected4: '',
    clearable: true,
    info: {
      addr: "",
      inv_num: ""
    },
    vnytr_otdelka: ["Окраска","Штукатурка","ПВХ панели (сайдинг)","Облицовка плиткой","Облицовка плиткой","Дерево","Иное","Нет данных"],
    naryj_otdelka: ["Вентилируемый фасад","Облицовка кирпичом (камнем)","Штукатурка","Штукатурка с утеплением","Окраска","ПВХ панели (сайдинг)","Дерево","Стекло","Иное","Нет данных"],
    col_pitch: ["Менее 6", "6-9", "9-12", "Более 12","Нет данных"],
    perekr_mat: ["Металлоконструкции", "Железобетон (сборный или монолитный)", "Дерево", "Иное","Нет данных"],
    prolet_m: ["Менее 12", "12 - 24", "Более 24","Нет данных"],
    krovl_mat: [
      "Профнастил, металлочерепица, металл листовой, сэндвич-панели",
      "Рулонные материалы",
      "Шифер",
      "Иное",
      "Нет данных"
    ],
    doc_type: [
      "Акт ввода в эксплуатацию",
      "Сметная документация",
      "Справка",
      "Технический паспорт",
      "Другое",
      "Нет данных"
    ],
    door_ins_mat: ["Деревянные", "ПВХ", "Металлические","Нет данных"],
    found_mat: ["Каменный (бутовый, кирпичный, бутобетонный)", "Бетонный (бетонный, монолитный, железобетонный, бетонные стаканы, свайный и тп.)", "Иное","Нет данных"],
    floor_height: ["Менее 4", "4 - 8", "Более 8","Нет данных"],
    door_out_mat: ["Деревянные", "Металлические", "ПВХ","Нет данных"],
    floor_mat: [
      "Бетон / Плиточные материалы",
      "Грунт (песчаное, щебеточное, гравийное)",
      "Дерево",
      "Полимерные материалы",
      "Нет данных"
    ],
    house_out_mat: [
      "Дерево",
      "Навесной вентилируемый фасад",
      "Облицовка из кирпича и камня",
      "ПВХ панели",
      "Стекло",
      "Штукатурка с утеплением, окраска",
      "Штукатурка, окраска",
      "Нет",
      "Нет данных"
    ],
    price_year: ["Текущий", "1984", "1991", "2006", "Другое","Нет данных"],
    default_value: ["Да", "Нет", "Нет данных"],
    tip_ventil: ["Вентиляция с естественным побуждением", "Вентиляция с искусственным побуждением", "Нет данных"],
    proem_window: [
      "Деревянные",
      "ПВХ",
      "Металлические",
      "Другое",
      "Нет",
      "Нет данных",
    ],
    konstr_zdania: ["Каркасная","Бескаркасная","Иное","Нет данных"],
    yers: [
      "Нет данных",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2004",
      "2003",
      "2002",
      "2001",
      "2000",
      "1999",
      "1998",
      "1997",
      "1996",
      "1995",
      "1994",
      "1993",
      "1992",
      "1991",
      "1990",
      "1989",
      "1988",
      "1987",
      "1986",
      "1985",
      "1984",
      "1983",
      "1982",
      "1981",
      "1980",
      "1979",
      "1978",
      "1977",
      "1976",
      "1975",
      "1974",
      "1973",
      "1972",
      "1971",
      "1970",
      "1969",
      "1968",
      "1967",
      "1966",
      "1965",
      "1964",
      "1963",
      "1962",
      "1961",
      "1960",
      "1959",
      "1958",
      "1957",
      "1956",
      "1955",
      "1954",
      "1953",
      "1952",
      "1951",
      "1950",
      "1949",
      "1948",
      "1947",
      "1946",
      "1945",
      "1944",
      "1943",
      "1942",
      "1941",
      "1940",
      "1939",
      "1938",
      "1937",
      "1936",
      "1935",
      "1934",
      "1933",
      "1932",
      "1931",
      "1930",
      "1929",
      "1928",
      "1927",
      "1926",
      "1925",
      "1924",
      "1923",
      "1922",
      "1921",
      "1920",
      "1919",
      "1918",
      "1917",
      "1916",
      "1915",
      "1914",
      "1913",
      "1912",
      "1911",
      "1910",
      "1909",
      "1908",
      "1907",
      "1906",
      "1905",
      "1904",
      "1903",
      "1902",
      "1901",
      "1900",
      "1899",
      "1898",
      "1897",
      "1896",
      "1895",
      "1894",
      "1893",
      "1892",
      "1891",
      "1890",
      "1889",
      "1888",
      "1887",
      "1886",
      "1885",
      "1884",
      "1883",
      "1882",
      "1881",
      "1880",
      "1879",
      "1878",
      "1877",
      "1876",
      "1875",
      "1874",
      "1873",
      "1872",
      "1871",
      "1870",
      "1869",
      "1868",
      "1867",
      "1866",
      "1865",
      "1864",
      "1863",
      "1862",
      "1861",
      "1860",
      "1859",
      "1858",
      "1857",
      "1856",
      "1855",
      "1854",
      "1853",
      "1852",
      "1851",
      "1850"
    ],    
    material_sten: [
      "Дерево (брус, бревна)",
      "Дерево (щитовые конструкции, доски)",
      "Кирпич",
      "Блоки легкобетонные (газосиликатные, керамзитобетонные)",
      "Железобетон монолитный",
      "Сборный железобетон (панели)",
      "Сэндвич-панели",
      "Металл",
      "Иное",
      "Нет данных"
    ],
    colvo_etazh: [
      "Нет данных",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    status: ["Восполнен", "Отказ от восполнения"],
    pogryzochno_razgryzochnoe_oborydovanie: [
      "Тали",
      "Ворота докового типа",
      "Кран-балки",
      "Мостовые (козловые) краны",
      "Грузовые лифты",
      "Подъемники",
      "Рампа (пандус) для автотранспорта",
      "Рампа (пандус) для железнодорожного транспорта",
      "Нет",
      "Нет данных"
    ],
    currency: ["BYR", "EUR", "USD", "BYN", "RUR", "Иное","Нет данных"],
    yes_no: ["Да", "Нет","Нет данных"]
  }),

  mounted() {
    this.info.addr = this.$route.params.address;
    this.info.inv_num = this.$route.params.inv_num;
    this.$nextTick(function() {
      Maps();
    });
  this.$nextTick(function() {
      calendarik();
      
    });
      this.$nextTick(function() {
      otdelka();
      
    });
  },
  methods: {
    send: function() {
      axios
        .get("http://localhost:3333/change", {
          params: {
            address: this.info.addr,
            inv_num: this.$route.params.inv_num
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    calendarik: function(){
      if (this.selected == "Текущий"){
        document.getElementById('date').style.display = 'block';

      }
      else {
        document.getElementById('date' ).style.display = 'none';

      }

      if (this.selected2 == "Текущий"){
        document.getElementById('date2').style.display = 'block';

      }
      else {
        document.getElementById('date2' ).style.display = 'none';

      }
    },
    otdelka: function(){
      if (this.selected3 == "Да"){
        this.narj_odelka = false;

      }
      else {
        this.narj_odelka = true;

      }

      if (this.selected4 == "Да"){
        this.vnyt_otdelka = false;
      }
      else {
        this.vnyt_otdelka = true;
      }
    },
  }
};

var x = 52.758674; // x координата из бд
var y = 26.426767; // y координата из бд

function Maps() {
  var map = L.map("map").setView([53.899138, 27.551585], 6);
  var markers = [];

  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Mq2mshhVdncP6vixLKJP",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }
  ).addTo(map);

  if (x != null && y != null) {
    var marker = L.marker([x, y]).addTo(map);
  } else {
    map.on("click", onMapClick);

    function onMapClick(e) {
      var geojsonFeature = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [e.latlng.lat, e.latlng.lng]
        }
      };
      if (markers.length > 0) {
        map.removeLayer(markers.pop());
      }
      var marker;

      L.geoJson(geojsonFeature, {
        pointToLayer: function(feature, latlng) {
          marker = L.marker(e.latlng, {
            title: "Resource Location",
            alt: "Resource Location",
            riseOnHover: true,
            draggable: true
          });
          markers.push(marker);
          x = e.latlng.lat.toString();
          y = e.latlng.lng.toString();
          return marker;
        }
      }).addTo(map);
    }
  }
  return map;
}
</script>

<style scoped>
.menu {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
}
.fields-inline {
  display: inline-flex;
  text-align: center;
}
.fields-inline .v-text-field {
  text-align: center;
  width: 150px;
  margin: 0px 10px 0px 10px;
}
.uniqueid_field {
  margin-left: 50px;
}

@media (min-width: 960px) {
  .container {
    max-width: 1800px;
  }
}

@media (min-width: 600px) {
  .span {
    text-overflow: ellipsis;
    overflow: hidden;
    height: 1.2em;
    white-space: nowrap;
  }
}

@media screen and (max-width: 600px) {
  .fixed-buttons {
    display: inline-block !important;
    margin-bottom: 80px !important;
  }
}

.layout {
  text-align: right;
}
h3 {
  text-align: start;
}
.flex {
  padding-bottom: 0px;
}
.footer-list li a {
  color: #c0c8d3;
  padding-top: 8px;
  display: inline-block;
  font-size: 14px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
header {
  height: 150px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  display: inline-table;
  background-color:blue;
}
.footer-list {
  padding: 0px;
}
a {
  text-decoration: none !important;
  outline: none !important;
  padding-top: 0px !important;
}
ul {
  list-style-type: none;
}

.v-footer {
  text-align: start;
}
</style>
