Vue.config.productionTip = false;

const URL = "https://pokeapi.co/api/v2/pokemon/1";
const app = new Vue({
  el: "#app",
  data: {
    name: "",
    weight: 0,
    height: 0,
    imgUrl: "",
    types: [],
  },
  methods: {
    fetchData() {
      return fetch(URL)
        .then((response) => response.json())
        .then((data) => data);
    },
  },
  mounted() {
    this.fetchData().then((data) => {
      console.log(data);
      this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.weight = data.weight;
      this.height = data.height;
      this.imgUrl =
        data.sprites.versions["generation-iv"].platinum.front_default;
      this.types = data.types;
    });
  },
});
