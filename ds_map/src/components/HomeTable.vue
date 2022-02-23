<template>
  <div>
    <b-table :data="data" :sticky-header="true" :columns="columns"></b-table>
  </div>
</template>
<script>
export default {
  name: "HomeTable",
  data() {
    return {
      data: [],
      columns: [
        {
          field: "date",
          label: "date",
          centered: true
        },
        {
          field: "Iran",
          label: "Iran",
          centered: true,
        },
        {
          field: "China",
          label: "China",
          centered: true,
        },
        {
          field: "Italy",
          label: "Italy",
          centered: true,
        },
        {
          field: "Japan",
          label: "Japan",
          centered: true,
        },
        {
          field: "France",
          label: "France",
          centered: true,
        },
        {
          field: "South Korea",
          label: "South Korea",
          centered: true,
        },
        {
          field: "United States",
          label: "United States",
          centered: true,
        },
        {
          field: "Brazil",
          label: "Brazil",
          centered: true,
        },
        {
          field: "Russia",
          label: "Russia",
          centered: true,
        },
        {
          field: "Iran",
          label: "Iran",
          centered: true,
        },
        {
          field: "United Kingdom",
          label: "United Kingdom",
          centered: true,
        },
        {
          field: "Peru",
          label: "Peru",
          centered: true,
        },
        {
          field: "Chile",
          label: "Chile",
          centered: true,
        },
        {
          field: "Mexico",
          label: "Mexico",
          centered: true,
        },
        {
          field: "South Africa",
          label: "South Africa",
          centered: true,
        },
        {
          field: "Spain",
          label: "Spain",
          centered: true,
        },
        {
          field: "Germany",
          label: "Germany",
          centered: true,
        },
        {
          field: "Turkey",
          label: "Turkey",
          centered: true,
        },
        {
          field: "France",
          label: "France",
          centered: true,
        }
      ],
    };
  },
  watch: {
    tableData(val, oldVal) {
      //普通的watch监听
      val.forEach((v) => {
         var date = new Date(v['date']);
         v['date'] = this.formatDate(date);
      });
      this.data = val;
    },
  },
  methods: {
    formatDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
  },
  props: ["tableData"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
/deep/ .b-table .table th .th-wrap.is-centered {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/deep/ .b-table .table-wrapper.has-sticky-header {
    height: 500px;
}
</style>