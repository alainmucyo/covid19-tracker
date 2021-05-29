<template>
  <GChart
    :data="markers"
    :options="chartOptions"
    :settings="{ packages: ['geochart'] ,mapsApiKey:'AIzaSyD3jw_q2QpJsuVg-k_vbPrTztLP4KfPVVk'}"
    type="GeoChart"
  />
</template>
<script>
    import {GChart} from 'vue-google-charts'

    export default {
        name: "GeoChart",
        props: ['markers','continent'],
        components: {
            GChart
        },
        data() {
            return {
                chartData: [
                    ['Country', 'Value', {role: 'tooltip', p: {html: true}}],
                    ['Russia', 5, '<div><b>Hello:</b> world</div><div>Hello world</div>'],
                    ['US', 20, '<div>Hello world</div><div>Hello world</div>']
                ],
              /*  chartOptions: {
                    tooltip: {isHtml: true},
                    colorAxis: {colors: ['#FFE0B2', '#C62828']},
                }*/
            }
        },
        computed: {
            chartOptions() {
                return {
                    region:this.continent.region,
                    tooltip: {isHtml: true},
                    colorAxis: {colors: ['#FFE0B2', '#C62828']},
                }
            }
            /*chartData() {
                const markers = this.markers;
                console.log("Markers",markers)
            }*/
        }
    }
</script>

<style>
  div.google-visualization-tooltip {
    width: 340px;
  }

  /*div.google-visualization-tooltip * {
    padding: 5px;
    margin: 0;
  }
  .desc-div{
    margin-top: -100px;
  }
  .desc {
    display: inline-block;
  }*/
</style>
