<template >
  <v-app>
    <header>
      <h2 class="text-center mt-3 white--text">СДЕЛКА С КАПИТАЛЬНЫМ СТРОЕНИЕМ</h2>
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
        <v-layout justify-start>
          <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
            <h3>ОБЩИЕ СВЕДЕНИЯ</h3>
          </v-flex>
        </v-layout>

        <v-card outlined style="padding: 15px 15px 15px 15px ;">
            <v-container pa-2>
              <v-layout row wrap>
                <v-flex col-sm-6 col-md-6 col-lg-6 col-12>
                  <v-layout row wrap align-baseline>
                    <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                      <v-text-field label="Инвентарный номер:" disabled placeholder=" " value></v-text-field>
                    </v-flex>
                    <v-flex class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
                      <v-text-field label="Дата сделки" disabled placeholder=" " value></v-text-field>
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
                        label="ФИО текущего правообладателя / организации: "
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
                        placeholder=" "
                        value
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
        <v-card outlined style="padding: 15px 15px 15px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Назначение </span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
 <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined  value :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наименование </span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field disabled outlined  value></v-text-field>
            </v-flex>

 <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined :clearable="clearable" value></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>

        <br />
        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Кадастровый номер ЗУ</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наименование ЗУ</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field outlined value :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Назначение ЗУ</span>
            </v-flex>
            <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
                        <v-flex class="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12">
              <v-text-field  outlined  value :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Площадь ЗУ, га</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field outlined type="number" :clearable="clearable"></v-text-field>
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
              <span>Год постройки </span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                outlined
                :items="yers"
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Общая площадь , кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field
                type="number"
                outlined
                placeholder=" "
                :clearable="clearable"
                label="Заполнить в случае несоответствия"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
             <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Год реконструкции </span>
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
              <span>Объем , куб. м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Количество надземных этажей</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value="1"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-combobox
                outlined
                :items="etaji"
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-combobox>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Нормируемая (полезная) площадь , кв.м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Количество подземных этажей (подвал)</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="etaji"
                placeholder=" "
                outlined
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательная площадь, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Физический износ здания, %</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Площадь застройки, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
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
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Торговых помещений, кв.м</span>
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
              <span>Площадь административных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Коммунально-бытовых помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещения транспортного назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Образовательных, воспитательных, научных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений финансового назначения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Культурно-просветительскиех помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Спортивных помещений, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений здравоохранения, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Подвала, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Помещений общественного питания, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Цокольного этажа, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Вспомогательных помещений (коридоры, бойлерные, тамбуры и т.д.), кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>  
            
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Мансардного этажа, кв.м</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field type="number" outlined :clearable="clearable"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-5 col-lg-5 col-xl-5 col-12>
            <h3>КОНСТРУКТИВНЫЕ ХАРАКТЕРИСТИКИ </h3>
          </v-flex>
        </v-layout>

        <v-card outlined style="padding: 15px 15px 0px 15px ;">
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Конструкция здания</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="konstrukcia_zdania" outlined single-line :clearable="clearable"></v-select>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <span>Материал покрытия пола (по преобладающей площади)</span>
              </v-flex>
              <v-flex col-sm-4 col-md-4 col-lg-4 col-12>
                <v-select outlined :items="floor_mat" :clearable="clearable"></v-select>
              </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал перекрытий</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="perekr_mat" outlined single-line :clearable="clearable"></v-select>
            </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал стен</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select
                :items="material_sten"
                outlined
                placeholder=" "
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Проёмы оконные</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="proem_window" outlined single-line :clearable="clearable"></v-select>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Материал кровли</span>
            </v-flex>
            <v-flex class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-12">
              <v-select :items="krovl_mat" outlined single-line :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Внутренняя отделка здания</span>
            </v-flex>
           <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
                <v-select outlined :items="items" :clearable="clearable" v-model="selected4" v-on:change="otdelka()"></v-select>
              </v-flex>
              <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-combobox           
                  :disabled="vnyt_otdelka"    
                  :items="vnytr_otdelka"
                  multiple
                  outlined                
                  placeholder=" "
                  :clearable="clearable"
              ></v-combobox>
              </v-flex>

            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Наружная отделка здания</span>
            </v-flex>
            <v-flex col-sm-2col-md-2 col-lg-2 col-12>
                <v-select outlined :items="items" :clearable="clearable" v-model="selected3" v-on:change="otdelka()"></v-select>
              </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
                            <v-combobox           
                  :disabled="narj_odelka"    
                  :items="naryj_otdelka"
                  multiple
                  outlined                
                  placeholder=" "
                  :clearable="clearable"
              ></v-combobox>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container pa-2>
        <v-layout justify-start mt-10>
          <v-flex col-sm-7 col-md-7 col-lg-7 col-xl-7 col-12>
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
                :items="items"
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
                :items="items"
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
                :items="items"
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
                :items="items"
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
                :items="items"
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
                :items="items"
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
          <v-flex col-sm-7 col-md-5 col-lg-4 col-xl-3 col-12>
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
                type="number"
                :clearable="clearable"
                placeholder=" "
                label="Заполнить в случае несоответствия"
              ></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Валюта сделки</span>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <v-select
                :items="valuta"
                outlined
                placeholder=" "
                label="Заполнить в случае несоответствия"
                :clearable="clearable"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Доля</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined disabled></v-text-field>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field
                outlined
                type="number"
                :clearable="clearable"
                placeholder=" "
                label="Заполнить в случае несоответствия"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-baseline>
            <v-flex class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-12">
              <span>Описание сделки</span>
            </v-flex>
            <v-flex class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-12">
              <v-text-field outlined disabled value></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap fill-height>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Наличие НДС в цене сделки</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="NDS" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12 fill-height>
              <span>Цена сделки включает элементы существующего бизнеса</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Продажа с аукциона</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap style="vertical-align:top">
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12 self-start>
              <span>Принудительная продажа по решению суда</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Приватизация</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap fill-height>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Цена включает движимое имущество</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Стоимость включенного в сделку движимого имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined :clearable="clearable" type="number" label="Указать стоимость при необходимости" placeholder=" "></v-text-field>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Валюта движимого имущества, включенного в сделку</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="valuta" :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Цена включает зачетное имущество (в т.ч. с доплатой)</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Стоимость зачетного имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined :clearable="clearable" type="number"  label="Указать стоимость при необходимости" placeholder=" "></v-text-field>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Валюта, в которой указана стоимость зачетного имущества</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="valuta" :clearable="clearable"></v-select>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Продажа по договору с рассрочкой</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-select outlined :items="items" :clearable="clearable"></v-select>
            </v-flex>

            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <span>Срок рассрочки, мес</span>
            </v-flex>
            <v-flex col-sm-2 col-md-2 col-lg-2 col-12>
              <v-text-field outlined :clearable="clearable" type="number"></v-text-field>
            </v-flex>
          </v-layout>
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
                <h4 class="white--text" style="margin-top:20px;">Контактный номер</h4>
                <h4 class="white--text">E-mail</h4>
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
  mounted() {
    this.$nextTick(function() {
      Maps();
    });
  this.$nextTick(function() {
      otdelka();
      
    });
  },
  components: {
    Calendar
  },
  methods: {
    clickk: function() {
      alert("отправить");
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
  },
  data: () => ({
    clearable: true,
    persistentHint: true,
     vnyt_otdelka: true,
    narj_odelka: true,
        selected: '',
    selected2: '',
    selected3: '',
    selected4: '',
    items: ["Да", "Нет", "Нет данных"],
     vnytr_otdelka: ["Окраска","Штукатурка","ПВХ панели (сайдинг)","Облицовка плиткой","Облицовка плиткой","Дерево","Иное","Нет данных"],
  
    Tip_Docyment: [
      "Акт ввода в эксплуатацию",
      "Сметная документация",
      "Справка",
      "Другое",
      "Нет данных"
    ],
     naryj_otdelka: ["Вентилируемый фасад","Облицовка кирпичом (камнем)","Штукатурка","Штукатурка с утеплением","Окраска","ПВХ панели (сайдинг)","Дерево","Стекло","Иное","Нет данных"],
    
        proem_window: [
      "Деревянные",
      "ПВХ",
      "Металлические",
      "Другое",
      "Нет",
      "Нет данных"
    ],
    vid_IP: [
      "Общественно-деловая недвижимость",
      "Производственно-складская недвижимость",
      "Нет данных"
    ],
    etaji: [
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
        floor_mat: [
      "Бетон",
      "Плитка",
      "Дерево",
      "Полимерные материалы",
      "Иное",
      "Нет данных"
    ],
    Lvl_cen: ["1984", "1991", "2006", "Текущий", "Другое",
      "Нет данных"],
    status: ["Восполнен", "Отказ от восполнения",
      "Нет данных"],
    konstrukcia_zdania: ["Каркасная", "Бескаркасная",
      "Нет данных"],
    valuta: [ "USD", "EUR", "BYR", "BYN", "RUB", "Иное",
      "Нет данных"],
    expertnoe_mnenie: [
      "Наименование КС",
      "Внутренняя отделка",
      "Наружная отделка",
      "Снабжение (коммуникации)",
      "Общее состояник здания",
      "Нет данных"
    ],
        krovl_mat: [
      "Профнастил, металлочерепица, металл листовой, сэндвич-панели",
      "Рулонные материалы",
      "Шифер",
      "Иное", 
      "Нет данных"
    ],
    material_sten: ["Дерево (брус, бревна)", "Дерево (щитовые конструкции, доски)", "Кирпич","Блоки легкобетонные (газосиликатные, керамзитобетонные)","Железобетон монолитный","Сборный железобетон (панели)","Сэндвич-панели","Металл","Иное","Нет данных"],
    Narujn_otdelka_sdania: [
      "Навесной вентилируемый фасад",
      "Облицовка из кирпича и камня",
      "Штукатурка с утеплением, окраска",
      "Штукатурка окраска",
      "ПВХ панели(сайдинг)",
      "Дерево",
      "Стекло",
      "Нет",
      "Нет данных"
    ],
    material_krovli: [
      "Шифер",
      "Рулонные материалы, мастики (битумные, полимерные и др.)",
      "Металлические листы, металлочерепицы",
      "Черепица",
      "Нет данных"
    ],
    sostoyanie_zsania: [
      "Новое, отличное ",
      "Очень хорошее",
      "Хорошее",
      "Удовлетворительное",
      "Условно пригодное",
      "Неудовлетворительное",
      "Непригодное к эксплуатации",
      "Нет данных"
    ],
    NDS: ["Да", "Нет", "Не выделен",
      "Нет данных"],
    perekr_mat: ["Металлоконструкция", "Железобетон (сборный или монолитный)", "Дерево", "Иное", "Нет данных"],
    Naznachenie_IP: [
      "Изолированное помещение",
      "Помещение, относящееся к жилищному фонду",
      "Квартира",
      "Секция (ячейка жилая) общежития",
      "Жилая комната",
      "Вспомогательное помещение жилого дома",
      "Специальное жилое помещение",
      "Помещение, не относящееся к жилищному фонду",
      "Производственное помещение",
      "Административное помещение",
      "Торговое помещение",
      "Административно-торговое помещение",
      "Складское помещение",
      "Помещение образовательного, воспитательного и научного назначения",
      "Помещение санитарно-бытового назначения",
      "Помещение здравоохранения",
      "Помещение общественного питания",
      "Помещение коммунального хозяйства",
      "Помещение для оказания ветеринарных услуг",
      "Помещение культурно-просветительного и зрелищного назначения",
      "Помещение физкультурно-оздоровительного и спортивного назначения",
      "Помещение транспортного назначения",
      "Вспомогательное (подсобное) помещение, не относящееся к жилищному фонду",
      "Помещение связи",
      "Помещение для размещения представительств иностранных государств",
      "Помещение финансового назначения",
      "Помещение специализированное для органов государственного управления, обороны, государственной безопасности, внутренних дел",
      "Помещение для ритуально-похоронного обслуживания",
      "Помещение бытового обслуживания населения",
      "Помещение для размещения подразделений по чрезвычайным ситуациям",
      "Помещение гражданской обороны",
      "Помещение для организации азартных игр",
      "Помещение многофункциональное",
      "Машино-место",
      "Помещение неустановленного назначения",
      "Нет данных"
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
    naznachenie_ZU: [
      "Административная недвижимость",
      "Торговая недвижимость (недвижимость розничной торговли)",
      "Недвижимость общественного питания",
      "Недвижимость связи и телекоммуникаций",
      "Недвижимость транспорта",
      "Финансовая недвижимость",
      "Недвижимость бытового обслуживания",
      "Недвижимость здравоохранения",
      "Недвижимость образования",
      "Культурно-просветительская и зрелищная недвижимость",
      "Физкультурно-спортивная недвижимость",
      "Развлекательно-увеселительная и игорная недвижимость",
      "Гостиничная недвижимость и недвижимость для временного проживания и отдыха",
      "Складская недвижимость и недвижимость оптовой торговли",
      "Производственная недвижимость",
      "Сельскохозяйственная недвижимость",
      "Недвижимость энергетики и инженерно-технического обеспечения",
      "Недвижимость иного назначения",
      "Нет данных"
    ],
    UID_adress: [
      "Внесены данные из ЕГРНИ",
      "Внесены данные из ТП",
      "Внесены данные из договора купли-продажи",
      "Требуется проверка/доработка",
      "Сформирован",
      "Нет данных"
    ],
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  })
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