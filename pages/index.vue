<template>
  <v-layout
    column
  >
    <v-flex
      md12
      sm12
      xs12
    >
      <v-row style="margin-bottom: 15px">
        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <i class="mdi mdi-account-group blue-grey--text icon-lg"></i>
            <v-card-text class="card-text">
              <span class="card-number blue-grey--text">{{ (rwanda_reports.cases).toLocaleString()}}</span>
              <span class="card-details">Abanduye</span>
            </v-card-text>
          </v-card>
          <!-- <v-alert
             border="right"
             color="blue-grey"
             dark
           >
             Abanduye: {{ (rwanda_reports.cases).toLocaleString()}}

           </v-alert>-->
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <span class="mdi mdi-account red--text icon-lg"></span>
            <v-card-text class="card-text">
              <span class="card-number red--text">{{ (rwanda_reports.deaths).toLocaleString()}}</span>
              <span class="card-details">Abapfuye: {{rwanda_reports.cases>0?((100*rwanda_reports.deaths/rwanda_reports.cases).toFixed(2)).toLocaleString():0}}%</span>
            </v-card-text>
          </v-card>
          <!--<v-alert
            border="top"
            color="red"
            dark
          >
            Abapfuye: {{ (rwanda_reports.deaths).toLocaleString()}}
            <span style="float: right">
                   {{rwanda_reports.cases>0?((100*rwanda_reports.deaths/rwanda_reports.cases).toFixed(2)).toLocaleString():0}}%
                 </span>
          </v-alert>-->
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <span class="mdi mdi-account-check green--text icon-lg"></span>
            <v-card-text class="card-text">
              <span class="card-number green--text">{{ (rwanda_reports.recovered).toLocaleString()}}</span>
              <span class="card-details">Abakize: {{rwanda_reports.cases>0?((100*rwanda_reports.recovered/rwanda_reports.cases).toFixed(2)).toLocaleString():0}}%</span>
            </v-card-text>
          </v-card>
          <!-- <v-alert
             border="left"
             color="green"
             dark
           >
             Abakize: {{ (rwanda_reports.recovered).toLocaleString()}}
             <span style="float: right">
                      {{rwanda_reports.cases>0?((100*rwanda_reports.recovered/rwanda_reports.cases).toFixed(2)).toLocaleString():0}}%
                    </span>
           </v-alert>-->
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <span class="mdi mdi-account-multiple-plus icon-lg" style="color: #E57373"></span>
            <v-card-text class="card-text">
              <span class="card-number" style="color: #E57373">{{ (rwanda_reports.todayCases).toLocaleString()}}</span>
              <span class="card-details">Abarwayi Bashya</span>
            </v-card-text>
          </v-card>
          <!-- <v-alert
             border="right"
             color="red lighten-2"
             dark
           >
             Abarwayi Bashya: {{ (rwanda_reports.todayCases).toLocaleString()}}

           </v-alert>-->
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <span class="mdi mdi-medical-bag blue--text icon-lg"></span>
            <v-card-text class="card-text">
              <span class="card-number blue--text">{{ (rwanda_reports.tests).toLocaleString()}}</span>
              <span class="card-details">Abasuzumwe Bose</span>
            </v-card-text>
          </v-card>
          <!-- <v-alert
             border="top"
             color="blue"
             dark
           >
             Abasuzumwe Bose: {{ (rwanda_reports.tests).toLocaleString()}}
           </v-alert>-->
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-card :flat="true" class="card">
            <span class="mdi mdi-human-male-child icon-lg indigo--text"></span>
            <v-card-text class="card-text">
              <span class="card-number indigo--text">{{ (rwanda_reports.active).toLocaleString()}}</span>
              <span class="card-details">Abakirwaye: {{rwanda_reports.cases>0?((100*rwanda_reports.active/rwanda_reports.cases).toFixed(2)).toLocaleString():0}}%</span>
            </v-card-text>
          </v-card>
          <!--  <v-alert
              border="left"
              color="indigo"
              dark
            >
              Abakirwaye: {{ (rwanda_reports.active).toLocaleString()}}
            </v-alert>-->
        </v-col>
      </v-row>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" offset-md="8" sm="6">
              <v-autocomplete
                :items="countries.map(c=>c.country)"
                @change="changeCountry"
                dense
                filled
                label="Hitamo Igihugu"
                v-if="countries.length>0"
                v-model="country"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <GoogleLineChart :cases="cases" :deaths="deaths" :labels="dates" :new_cases="new_cases"
                               :recovered="recovered"
                               v-if="dates && cases && cases.length !=0 && new_cases"></GoogleLineChart>
              <!--<LineChart :cases="cases" :deaths="deaths" :labels="dates" :new_cases="new_cases"
                         :recovered="recovered" v-if="dates && cases && cases.length !=0 && new_cases"></LineChart>-->
            </v-col>
            <v-col class="d-flex" cols="12" offset-sm="8" sm="4">
              <v-select
                :items="continents"
                @change="onChangeContinent"
                item-text="name"
                label="Umugabane"
                v-model="continent_value"
              ></v-select>
            </v-col>
            <v-col cols="12" md="12" sm="12">

              <!-- <Map :markers="markers" v-if="markers && markers.length>0"></Map>-->
              <GeoChart :continent="continent" :markers="markers" v-if="markers && markers.length>0"/>
            </v-col>
            <v-col cols="12" md="12" sm="12" v-if="countries.length>0">
              <v-card-title>
                <v-row>
                  <!--                  <v-col cols="12" md="6" sm="12"></v-col>-->
                  <v-col cols="12" md="6" offset-md="6" sm="12">
                    <v-text-field
                      append-icon="mdi-magnify"
                      hide-details
                      label="Shakisha..."
                      single-line
                      v-model="search"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-data-table :headers="table_headers"
                            :items="countries"
                            :items-per-page="10"
                            :search="search"
                            :sort-by="['cases']"
                            :sort-desc="[true]"
                            class="elevation-1"
              >
                <template v-slot:item.cases="{ item }">
                  <v-chip>{{ item.cases.toLocaleString() }}</v-chip>
                </template>
                <template v-slot:item.deaths="{ item }">
                  <v-chip color="red" dark>{{ item.deaths.toLocaleString() }}</v-chip>
                </template>
                <template v-slot:item.recovered="{ item }">
                  <v-chip color="green" dark>{{ item.recovered.toLocaleString() }}</v-chip>
                </template>
                <template v-slot:item.todayCases="{ item }">
                  <v-chip color="blue-grey" dark>+{{ item.todayCases.toLocaleString() }}</v-chip>
                </template>
                <template v-slot:item.todayDeaths="{ item }">
                  <v-chip color="red" dark>+{{ item.todayDeaths.toLocaleString() }}</v-chip>
                </template>
                <template v-slot:item.active="{ item }">
                  {{ item.active.toLocaleString() }}
                </template>
                <template v-slot:item.tests="{ item }">
                  {{ item.tests.toLocaleString() }}
                </template>
                <template v-slot:item.critical="{ item }">
                  <v-chip color="red lighten-2" dark>{{ item.critical.toLocaleString() }}</v-chip>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import LineChart from "../components/LineChart";
    import Map from "../components/Map";
    import GeoChart from "../components/GeoChart";
    import GoogleLineChart from "../components/GoogleLineChart";

    export default {
        components: {GoogleLineChart, GeoChart, Map, LineChart},
        asyncData(context) {
            return context.$axios.$get("/countries/rwanda")
                .then(data => {
                    return {rwanda_reports: data}
                })
                .catch(() => {
                    console.log("Error")
                })
        },
        data() {
            return {
                country: 'Rwanda',
                search: '',
                pagination: {'sortBy': 'cases', 'descending': true, 'rowsPerPage': -1},
                continents: [
                    {region: '002', name: "Africa"},
                    {region: '142', name: "Asia"},
                    {region: '009', name: "Australia/Oceania"},
                    {region: '019', name: "America"},
                    {region: '150', name: "Europe"},
                    {region: 'world', name: 'World'}

                ],
                continent: {region: '002', name: "Africa"},
                continent_value: 'Africa',
                table_headers: [
                    {text: 'Igihugu', value: 'country'},
                    {text: 'Abanduye', value: 'cases'},
                    {text: 'Abapfuye', value: 'deaths'},
                    {text: 'Abakize', value: 'recovered'},
                    {text: 'Abarwayi Bashya', value: 'todayCases'},
                    {text: 'Abapfuye Bashya', value: 'todayDeaths'},
                    {text: 'Abakirwaye', value: 'active'},
                    {text: 'Abarembye', value: 'critical'},
                    {text: 'Abasuzumwe', value: 'tests'},
                ],
                markers: null,
                dates: null,
                cases: null,
                deaths: null,
                recovered: null,
                new_cases: null,
                countries: []
            }
        },
        methods: {
            changeCountry() {
                this.cases = null;
                this.loadCountryHistorical();
            }
            ,
            ajaxLoading(bool) {
                this.$root.$emit("loading", bool)
            }
            ,
            loadCountryHistorical() {
                this.ajaxLoading(true);
                this.$axios.$get("/historical/" + this.country)
                    .then(data => {
                        const cases = data.timeline.cases;
                        this.dates = Object.keys(cases);
                        this.cases = Object.values(cases);
                        let new_cases = [];
                        const cases__length = this.cases.length;
                        for (let i = 0; i < cases__length; i++) {
                            new_cases.push(this.cases[i - 1] >= 0 ? this.cases[i] - this.cases[i - 1] : 0)
                        }
                        this.new_cases = new_cases;
                        this.recovered = Object.values(data.timeline.recovered);
                        this.deaths = Object.values(data.timeline.deaths);
                        this.ajaxLoading(false);
                    })
                    .catch(err => {
                        this.ajaxLoading(false);
                        if (err.response.status == 404)
                            alert(err.response.data.message)
                    })
            }
            ,
            onChangeContinent() {
                this.loadMapMarkers()
            },

            loadMapMarkers() {
                this.continent = this.continents.find(c => c.name == this.continent_value);
                this.markers = null;
                const countries = this.countries.filter(c => {
                    if (this.continent.name == "America")
                        return c.continent == "North America" || c.continent == "South America"

                    if (this.continent.region == "world")
                        return true;

                    return c.continent == this.continent.name
                });
                const markers = countries.map(c => {
                    return [c.country == "USA" ? 'United States' : c.country, c.cases, `
<div class="row">
<div class="col">
<div><b>Cases: </b>${c.cases.toLocaleString()}</div>
<div><b>Deaths: </b>${c.deaths.toLocaleString()}</div>
<div><b>Recovered: </b>${c.recovered.toLocaleString()}</div>
 <div><b>New Deaths: </b>${c.todayDeaths.toLocaleString()}</div>
</div>
<div class="col">
 <div><b>New Cases: </b>${c.todayCases.toLocaleString()}</div>
              <div><b>Active: </b>${c.active.toLocaleString()}</div>
              <div><b>Critical: </b>${c.critical.toLocaleString()}</div>
              <div><b>Tests: </b>${c.tests.toLocaleString()}</div>
<div>
</div>
`]
                });
                markers.unshift(["Country", "Cases", {role: 'tooltip', p: {html: true}}]);
                this.markers = markers;
            }
            ,
            loadCountries() {
                this.ajaxLoading(true);
                this.$axios.$get("/countries")
                    .then(data => {
                        this.countries = data;
                        /*this.markers = data.map(c => {
                            return {
                                country: c.country,
                                position: {lat: parseFloat(c.countryInfo.lat), lng: parseFloat(c.countryInfo.long)}
                            }
                        });*/
                        this.loadMapMarkers();
                        this.ajaxLoading(false);
                    })
                    .catch(err => {
                        this.ajaxLoading(false);
                        console.log(err)
                    })
            }
            ,
        }
        ,
        created() {
            this.loadCountryHistorical();
            this.loadCountries();
            this.$root.$emit("about", false)
        }
    }
</script>
<style>
  .card {
    height: 130px;
    text-align: right;
    padding-top: 5%;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-radius: 3px !important;
    position: relative;
  }

  .icon-lg {
    display: inline-block;
    float: left;
    font-size: 600%;

    /*padding: -10px 0 0 1.5rem;*/
    position: absolute;
    left: 10px;
    top: -13px;
  }
.card-text{
  /*padding-left: 200px;*/
}
  .card-number {
    display: block;
    font-size: 180%;
    letter-spacing: 2px;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .card-details {
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>
