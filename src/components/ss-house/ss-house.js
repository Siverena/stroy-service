import SsLoader from '@/elements/ss-loader/SsLoader.vue';
import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SsHouse',
  components: {
    SsLoader,
    SsSectionHeader,
  },
  data() {
    return {
      loading: true,
      house: {},
      sizes: {},
    };
  },
  computed: {
    ...mapGetters(['getHouse', 'getCategory']),
  },
  methods: {
    ...mapActions(['fetchHouse', 'fetchCategory']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchHouse(this.$route.params.id);
        this.house = this.getHouse[0];
        await this.fetchCategory(this.house.idCategory);
        this.sizes = this.getCategory[0].sizes;
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    formattedPrice(string) {
      return new Intl.NumberFormat('ru-RU').format(string);
    },
    getSizeForPrice(price) {
      // const res = this.categories.
      //price:487000
      // sizeId:20001
      //нужно обратиться к категориям (categories.sizes) и по id размера достать сам размер,
    },
  },
  async created() {
    this.loadData();
  },
  mounted() {},
};
