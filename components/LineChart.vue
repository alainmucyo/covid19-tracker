<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "LineChart",
        props: ['labels', 'cases','recovered','deaths','new_cases'],
        extends: Line,
        data: () => ({
            options: {
                responsive: true,
                maintainAspectRatio: false,
              //At Bottom
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                userCallback: (value, index, values) => {
                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    // return Number(x).toLocaleString();
                                }
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {}
                        }
                    ]
                }
            }
        }),
        mounted() {
            this.renderChart(this.chartdata, this.options)
        },
        computed: {
            chartdata() {
                return {
                    labels: this.labels,
                    datasets: [
                        {
                            label: "Abanduye",
                            // backgroundColor: "#607d8b",
                            borderColor: "#607d8b",
                            backgroundColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "#00678b",
                            pointBorderColor: "#00678b",
                            borderWidth:2,
                            data: this.cases
                        },
                        {
                            label: "Abakize",
                            // backgroundColor:"#4CAF50",
                            borderColor: "#4CAF50",
                            backgroundColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "#00af25",
                            pointBorderColor: "#00af25",
                            borderWidth:2,
                            data: this.recovered
                        },
                        {
                            label: "Abapfuye",
                            // backgroundColor:"#E57373",
                            borderColor: "#E57373",
                            backgroundColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "#E57373",
                            pointBorderColor: "#E57373",
                            borderWidth:2,
                            data: this.deaths
                        },
                        {
                            label: "Abarwayi Bashya",
                            // backgroundColor:"#E57373",
                            borderColor: "#304FFE",
                            borderWidth:2,
                            backgroundColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "#304FFE",
                            pointBorderColor: "#304FFE",
                            data: this.new_cases
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
  h1{

  }
</style>
<!--
tooltips: {
callbacks: {
label: (tooltipItem, data) => {
const value =
data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}
},-->
