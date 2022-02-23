<template>
  <div>
    <h1>The Study of Covid 19 Cases in Major Countries</h1>
    <b-tabs size="is-medium" class="block">
      <b-tab-item label="Data Chart">
        <home-chart :chartData="data"></home-chart>
      </b-tab-item>
      <b-tab-item label="Data Table">
        <home-table :tableData="data"></home-table>
      </b-tab-item>
      <b-tab-item label="Data Map">
        <home-map />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import HomeTable from "@/components/HomeTable";
import HomeChart from "@/components/HomeChart";
import HomeMap from "@/components/HomeMap";
import axios from "axios";
export default {
  components: { HomeTable, HomeChart, HomeMap },
  name: "HomeViews",
  data() {
    return {
      data: [],
      names: [
        "Iran",
        "China",
        "Italy",
        "Japan",
        "South Korea",
        "United States",
        "Brazil",
        "Russia",
        "United Kingdom",
        "Germany",
        "France"
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      var that = this;
      axios
        .get("https://api.npoint.io/4a1cf071eefc0d9869af")
        // .get("http://localhost:9988/4a1cf071eefc0d9869af.json")
        .then(function (response) {
          var result = response.data;
          //that.createData(result);
          that.data = result;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createData(result) {
      var list = new Array();
      result.forEach((element) => {
        var newObj = {
          date:element['date']
        }
        this.names.forEach(name => {
          newObj[name] = element[name];
        })
        list.push(newObj);
      });
      console.log(list);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
