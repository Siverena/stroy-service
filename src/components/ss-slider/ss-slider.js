import { VueAgile } from 'vue-agile';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SsSlider',
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      loading: true,
      promo: [],
      housesOnPromo: [],
    };
  },
  computed: {
    ...mapGetters(['getHousesOnPromo', 'getPromo']),
    randomHouses() {
      const firstIndex = this.getRandomindex(this.getHousesOnPromo);
      const result = [this.getHousesOnPromo[firstIndex]];
      if (this.getHousesOnPromo.length > 1) {
        const filtered = this.getHousesOnPromo.filter(
          (el, i) => i !== firstIndex
        );
        result.push(filtered[this.getRandomindex(filtered)]);
      }
      return result;
    },
  },
  methods: {
    ...mapActions(['fetchHousesOnPromo', 'fetchPromo']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchHousesOnPromo();
        await this.fetchPromo();

        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    getRandomindex(arr) {
      return Math.floor(Math.random() * (arr.length - 1));
    },
    getPercent(promoId) {
      console.log(promoId);

      try {
        // this.loading = true;
        // this.fetchPromo();
        const per = this.getPromo.find((el) => el.promoID === promoId);
        console.log(per);
        console.log(per.sale);
        // this.loading = false;
        return per.sale;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async created() {
    this.loadData();
  },
};
