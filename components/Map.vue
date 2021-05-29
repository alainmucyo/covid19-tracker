<template>
  <div>
    <!--    <img src="https://media.giphy.com/media/XBKaDapAVVwjT44Hcz/giphy.gif" alt="">-->
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="3"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :clickable="true"
        :draggable="false"
        :key="index"
        :position="m.position"
        @click="openWindow(m)"
        v-for="(m, index) in markers"
      />
      <gmap-info-window
        :opened="window_open"
        :options="{
                pixelOffset: {
                  width: 0,
                  height: 0
                }
        }"
        :position="infowindow"
        @closeclick="window_open=false"
      >
        <div style="width: 300px" v-if="country">
          <v-row style="margin-bottom: -12px">
            <v-col>
              <h2>{{ country.country}}</h2>
            </v-col>
            <v-col>
              <img :src="country.countryInfo.flag" alt="" style="width: 30px;float: right">
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div><strong>Cases: </strong>{{ country.cases.toLocaleString()}}</div>
              <div><b>Deaths: </b>{{ country.deaths.toLocaleString()}}</div>
              <div><b>Recovered: </b>{{ country.recovered.toLocaleString()}}</div>
              <div><b>Today Deaths: </b>{{ country.todayDeaths.toLocaleString()}}</div>
            </v-col>
            <v-col>
              <div><b>Today Cases: </b>{{ country.todayCases.toLocaleString()}}</div>
              <div><b>Active Cases: </b>{{ country.active.toLocaleString()}}</div>
              <div><b>Critical: </b>{{ country.critical.toLocaleString()}}</div>
              <div><b>Tests: </b>{{ country.tests.toLocaleString()}}</div>
            </v-col>
          </v-row>
        </div>
        <div style="padding: 10px" v-else>
          Loading Country....
        </div>
      </gmap-info-window>
    </GmapMap>
  </div>
</template>
<script>
    export default {
        name: "Map",
        props: ['markers'],
        data() {
            return {
                country: null,
                infowindow: {},
                window_open: false,
                icon:
                    {
                        scaledSize: {width: 20, height: 20},

                    }
            }

        },
        methods: {
            ajaxLoading(bool){
                this.$root.$emit("loading",bool)
            },
            openWindow(marker) {
                this.infowindow = {...marker.position};
                this.loadCountry(marker.country);
                this.window_open = true
            },
            loadCountry(country) {
                this.ajaxLoading(true);
                this.country = null
                this.$axios.$get("/countries/" + country)
                    .then(data => {
                        this.country = data;
                        this.ajaxLoading(false);
                    })
                    .catch(() => {
                        this.ajaxLoading(false);
                        console.log("Error")
                    })
            }
        }
    }
</script>
