<template >
  <v-app>
    <header>
      <h2 class="text-center mt-3 white--text">СДЕЛКА С ИЗОЛИРОВАННЫМ ПОМЕЩЕНИЕМ</h2>
      <v-container>
        <v-layout row wrap align-baseline justify-space-around>
          <v-flex col-sm-3 col-md-5 col-lg-5 col-12>
            <v-select
              :items="status"
              label="Укажите статус восполнения"
              background-color="white"
              single-line
              solo
            ></v-select>
          </v-flex>

          <v-flex col-sm-3 col-md-5 col-lg-5 col-12>
            <v-text-field
              placeholder="Заполните в случае отказа от восполнения"
              :clearable="clearable"
              background-color="white"
              single-line
              solo
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </header>

    <v-container class="my-5" style=" padding: 0px;">
      <v-container pa-2>
        <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
          <h3>ОБЩИЕ СВЕДЕНИЯ</h3>
        </v-flex>

        <v-card outlined style="padding: 15px 15px 15px 15px ;">
          <v-container pa-2>
            <v-layout row wrap>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field disabled label="Инвентарный номер ИП:" placeholder=" " value></v-text-field>
                  </v-flex>
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field disabled label="Инвентарный номер КС:" placeholder=" " value></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field disabled label="Адрес:" value placeholder=" "></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field label="Дата сделки:" disabled placeholder=" " value></v-text-field>
                  </v-flex>
                  <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                    <v-text-field
                      label="ФИО текущего правообладателя / организации:"
                      disabled
                      placeholder=" "
                      value
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap align-baseline>
                  <v-flex class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                    <v-text-field
                      label="Категория субъекта (правообладателя):"
                      disabled
                      value
                      placeholder=" "
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                <v-card outlined style=" height:450px">
                  <div id="map" style="height:450px;"></div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <br />

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Назначение ИП</span>
            </v-flex>
            <v-flex class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-input></v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наименование ИП</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                outlined
                placeholder="  "
              ></v-text-field>
            </v-flex>
          </v-layout>

          <br />

          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Назначение КС</span>
            </v-flex>
            <v-flex class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-input></v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наименование КС</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                outlined
                placeholder="  "
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
            <H3>ОБЩИЕ ХАРАКТЕРИСТИКИ</H3>
          </v-flex>
        </v-layout>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Год постройки КС</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="yers"
                label="Заполнить в случае несоответствия"
                placeholder=" "
                outlined
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь ИП, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                label="Заполнить в случае несоответствия"
                placeholder=" "
                outlined
                :clearable="clearable"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Год реконструкции КС</span>
            </v-flex>
             <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="yers"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь КС, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Этаж расположения</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-combobox
                :items="etaji"
                multiple
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-combobox>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Объем ИП, куб. м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Физический износ здания, %</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Нормируемая (полезная) площадь ИП, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field disabled outlined></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Дата обследования при технической инвентаризации</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <Calendar outlined_field="true" label_prop="Дата обследования" />
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательная площадь ИП, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field disabled outlined></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
                placeholder=" "
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
            <h3>ПЛОЩАДНЫЕ ХАРАКТЕРИСТИКИ КС</h3>
          </v-flex>
        </v-layout>
        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12" ml-3 mb-3>
          <h2 >Общая площадь: </h2> 
          </v-flex>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Производственных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>   
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Складских помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Административных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Торговых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Коммунально-бытовых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений транспортного назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательных помещений (коридоры, лестницы, бойлерные, тамбуры, и тп.), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Иных помещений (помещения, не вошедшие в вышеуказанные категории), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field label="Доп. помещения" outlined placeholder=" "></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-5 col-lg-7 col-xl-7 col-12>
            <h3>КОНСТРУКТИВНЫЕ ХАРАКТЕРИСТИКИ ИЗОЛИРОВАННОГО ПОМЕЩЕНИЯ И КАПИТАЛЬНОГО СТРОЕНИЯ</h3>
          </v-flex>
        </v-layout>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Высота потолка ИП</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="visota_potolka" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Шаг колонн ИП, м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="shag_kolonn" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал покрытия пола ИП (по преобладающей площади)</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_pola" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Пролет ИП, м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="prolet" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал дверей внутренних ИП</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_dveri" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал фундаментов КС</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_fundam" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Внутренняя отделка ИП</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items="items" outlined :clearable="clearable" v-on:change="atdelk()" v-model="selected"></v-select>
            </v-flex>
            <v-flex  class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12" >
              <v-select 
                :disabled="otdelka" 
                :items="vnutr_otdelka_zdania" 
                outlined 
                :clearable="clearable" 
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал перекрытий КС</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_pokrit" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
 <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал стен</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                :items="material_sten"
                outlined
                placeholder=" "
              ></v-select>
            </v-flex>
<v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Конструкция здания</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="konstrukcia_zdania" outlined single-line></v-select>
            </v-flex>
          </v-layout>

           
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Проёмы оконные ИП</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="proemi_okonnie" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал кровли КС</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_krovli" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Погрузочно-разгрузочное оборудование ИП</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="pogryzochno_razgryzochnoe_oborydovanie" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал дверей наружных КС</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="mater_dveri_naruj" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наружная отделка КС</span>
            </v-flex>
             <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items="items" outlined :clearable="clearable" v-on:change="atdelk()" v-model="selected_KS"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-combobox 
                :disabled="otdelka_KS" 
                :items="naruj_otdelka_zdania" 
                outlined 
                :clearable="clearable"
                multiple
              ></v-combobox>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Внутренняя отделка КС</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items="items" outlined :clearable="clearable" v-on:change="atdelk()" v-model="selected_KS2"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-combobox 
                :disabled="otdelka_KS2" 
                :items="vnutr_otdelka_zdania" 
                outlined 
                :clearable="clearable" 
                multiple
              ></v-combobox> 
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-6 col-lg-6 col-xl-6 col-12>
            <h3>ИНЖЕНЕРНОЕ, САНИТАРНО-ТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ КАПИТАЛЬНОГО СТРОЕНИЯ</h3>
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
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
                :items="items"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
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

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-5 col-lg-5 col-xl-3 col-12>
            <h3>СВЕДЕНИЯ ОБ УСЛОВИЯХ СДЕЛКИ</h3>
          </v-flex>
        </v-layout>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цена сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                type="number"
                :clearable="clearable"
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Валюта сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value=" "></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="valuta"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Доля</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined label="Заполнить в случае несоответствия" placeholder="Пример: 10/100" :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Продажа в комплексе объектов</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="items2"
                outlined
                label="Заполнить в случае несоответствия"
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"></v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field
                outlined
                :clearable="clearable"
                placeholder=" "
                label="Инвентарный номера объектов в комплексе:"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
        <br />
        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Описание сделки</span>
            </v-flex>
            <v-flex class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-12">
              <v-text-field outlined disabled></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наличие НДС в цене сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items="items3" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цена сделки включает элементы существующего бизнеса</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items="items2" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Продажа с аукциона</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Принудительная продажа по решению суда</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Приватизация</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цена включает движимое имущество</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость включенного в сделку движимого имущества</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                :clearable="clearable"
                label="Указать при необходимости"
                outlined
                placeholder="  "
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Валюта движимого имущества, включенного в сделку</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цена включает зачетное имущество (в т.ч. с доплатой)</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Стоимость зачетного имущества</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                :clearable="clearable"
                label="Указать при необходимости"
                outlined
                placeholder="  "
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Валюта, в которой указана стоимость зачетного имущества</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Продажа по договору с рассрочкой</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select :items=" items2" outlined :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Срок рассрочки, мес</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
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
    <v-footer color="#0000ff">
      <v-container>
        <v-card flat style="background-color: transparent;">
          <v-card-text>
            <v-layout row justify-center>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-img src="https://pr.nca.by/img/nca.6a52f026.svg" aspect-ratio="5" contain></v-img>
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
                      <a href="https://goo.gl/rV8Jpb">Онлайн-чат</a>
                    </li>
                    <li>
                      <a href="https://goo.gl/PcaMnC">Форма обратной связи</a>
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
                      <a href="https://goo.gl/rV8Jpb">https://goo.gl/rV8Jpb</a>
                    </li>
                    <li>
                      <a href="https://goo.gl/PcaMnC">https://goo.gl/PcaMnC</a>
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
                <h4 class="white--text">Контактный номер</h4>

                <h4 class="white--text" style="margin-top:20px;">E-mail</h4>
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
        <v-btn style="width:138px;" dark medium rounded elevation-7 color="red">
          Очистить
          <v-icon dark right>mdi-cancel</v-icon>
        </v-btn>

        <v-btn style="width:138px;" dark medium rounded elevation-7 color="green">
          Файл
          <v-icon dark right>mdi-file</v-icon>
        </v-btn>
        <v-btn dark medium style="width:138px;" rounded elevation-7 color="indigo">
          Отправить
          <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-layout>
    </v-speed-dial>
  </v-app>
</template>

<script>
import Calendar from "@/components/Calendar";

export default {
  methods: {
    clickk: function() {},
    atdelk: function(){
      if (this.selected == "Да"){
        this.otdelka = false;      
      }
      else {
        this.otdelka = true;
      }
    
      if (this.selected_KS == "Да"){
        this.otdelka_KS = false;      
      }
      else {
        this.otdelka_KS = true;
      }

      if (this.selected_KS2 == "Да"){
        this.otdelka_KS2 = false;      
      }
      else {
        this.otdelka_KS2 = true;
      }
      // if (this.selected2 == "Текущий"){
      //   document.getElementById('date2').style.display = 'block';
      //   visible = false;
      // }
      // else {
      //   document.getElementById('date2' ).style.display = 'none';
      //   visible = true;
      // }
    },
  },
  mounted() {
    this.$nextTick(function() {
      Maps();
    });
         this.$nextTick(function() {
      atdelk();
      
    });
  },
  components: {
    Calendar
  },
  data: () => ({
    
    otdelka: true,
    otdelka_KS: true,
    selected: '',
    selected_KS: '',
    selected_KS2: '',
    X: "52.758674",
    Y: "26.426767",
    clearable: true,
    persistentHint: true,
    items: ["Да", "Нет", "Нет данных"],
    tip_documenta: [
      "Акт ввода в эксплуатацию",
      "Сметная документация",
      "Справка",
      "Другое",
      "Нет данных",
    ],
    tip_ventil: ["Вентиляция с естественным побуждением", "Вентиляция с искусственным побуждением", "Нет данных"],
    lvl_cen: ["1984", "1991", "2006", "Текущий", "Другое","Нет данных",],
    visota_potolka: ["Менее 4", "4-8", "Более 8","Нет данных",],
    shag_kolonn: ["Менее 6", "6-9", "9-12", "Более 12","Нет данных",],
    mater_pola: [
      "Бетон/ плиточные материалы",
      "Грунт(песчаное, щебеночное, гравийное покрытие)",
      "Дерево",
      "Полимерные материалы",
      "Нет данных",
    ],
    prolet: ["Менее 12", "12-24", "Более 24","Нет данных",],
    mater_dveri: ["Деревянные", "Металлические", "ПВХ","Нет данных",],
    mater_fundam: [
"Каменный (бутовый, кирпичный, бутобетонный)", "Бетонный (бетонный, монолитный, железобетонный, бетонные стаканы, свайный и тп.)", "Иное","Нет данных"
    ],
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
    konstrukcia_zdania: ["Каркасная", "Бескаркасная","Иное","Нет данных"],
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
    material_sten: [
      "Кирпич",
      "Блоки легкобетонные (газосиликатные, керамзитобетонные)",
      "Железобетон монолитный",
      "Сборный железобетон (панели)",
      "Сэндвич-панели",
      "Металл,Дерево (брус,бревна)",
      "Дерево (щитовые конструкции, доски)",
      "Нет данных"
    ],
    vnytr_otdelka: [
      "Дерево",
      "Навесной вентилируемый фасад",
      "Облицовка из кирпича и камня",
      "ПВХ панели (сайдинг)",
      "Стекло",
      "Штукатурка с утеплением, окраска",
      "Штукатурка, окраска",
      "Нет",
      "Нет данных"
    ],
    mater_pokrit: [
"Металлоконструкции", "Железобетон (сборный или монолитный)", "Дерево", "Иное","Нет данных"
    ],

    mater_krovli: [
      "Профнастил, металлочерепица, металл листовой, сэндвич-панели",
      "Рулонные материалы",
      "Шифер",
      "Иное",
      "Нет данных",
    ],
    mater_dveri_naruj: ["Деревянные", "Металличесие", "ПВХ","Нет данных",],
    naruj_otdelka_zdania: [
"Вентилируемый фасад","Облицовка кирпичом (камнем)","Штукатурка","Штукатурка с утеплением","Окраска","ПВХ панели (сайдинг)","Дерево","Стекло","Иное","Нет данных"
    ],
    vnutr_otdelka_zdania: ["Окраска", "Штукатурка","ПВХ панели (сайдинг)","Облицовка плиткой","Оклейка обоями","Дерево","Иное", "Нет данных"],
    valuta: ["USD", "EUR", "BYR", "BYN", "RUB", "Иное","Нет данных",],
    items2: ["Да", "Нет","Нет данных",],
    items3: ["Да", "Нет","Не выделен",],
    etaji: [ 
      "Чердак",
      "Мезонин",
      "Антресоль",
      "Мансардный (мансарда)",
      "40-й",
      "39-й",
      "38-й",
      "37-й",
      "36-й",
      "35-й",
      "34-й",
      "33-й",
      "32-й",
      "31-й",
      "30-й",
      "29-й",
      "28-й",
      "27-й",
      "26-й",
      "25-й",
      "24-й",
      "23-й",
      "22-й",
      "21-й",
      "20-й",
      "19-й",
      "18-й",
      "17-й",
      "16-й",
      "15-й",
      "14-й",
      "13-й",
      "12-й",
      "11-й",
      "10-й",
      "9-й",
      "8-й",
      "7-й",
      "6-й",
      "5-й",
      "4-й",
"3-й",
"2-й",
"1-й",
"1-й подземный",
"2-й подземный",
"3-й подземный",
"4-й подземный",
"5-й подземный",
"6-й подземный",
"7-й подземный",
"8-й подземный",
"9-й подземный",
"10-й подземный",
"Подвальный",
"Цокольный",
"Нет данных",
    ],
    status: ["Восполнен", "Отказ от восполнения","Нет данных",]
  })
};

var x; // x координата из бд
var y; // y координата из бд

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
    var marker = L.marker([x, y]).addTo(map); // СЮДА КООРДИНАТЫ ИЗ БД
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
@media (min-width: 960px) {
  .container {
    max-width: 1800px;
  }
}
.v-footer {
  text-align: start;
}
.footer-list {
  padding: 0px;
}
.footer-list li a {
  color: #fff;
  padding-top: 8px;
  display: inline-block;
  font-size: 14px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
a {
  text-decoration: none !important;
  outline: none !important;
  padding-top: 0px !important;
}
ul {
  list-style-type: none;
}
header {
  height: 150px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 0px;
  right: 0px;

  display: inline-table;
  background-color: blue;
}
</style>