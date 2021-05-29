<template>
  <GChart
    :data="newChartData"
    :options="chartOptions"
    type="LineChart"
  />
</template>

<script>
    import {GChart} from 'vue-google-charts'

    export default {
        components: {
            GChart
        },
        props: ["cases", "deaths", "recovered", "labels", "new_cases"],
        name: "GoogleLineChart",
        data() {
            return {

                chartOptions: {
                    curveType: 'function',
                    legend: { position: 'bottom' },
                    height: 500,
                    width:'100%'
                }
            }
        },
        computed: {
            newChartData() {
                const new_labels = this.labels.map((l, i) => {
                    return [l, this.cases[i], this.deaths[i], this.new_cases[i], this.recovered[i]]
                });
                new_labels.unshift(["Date", "Cases", "Deaths", "New Cases","Recovered" ]);
                return new_labels;
            }
        }
    }

</script>

<style scoped>

</style>
