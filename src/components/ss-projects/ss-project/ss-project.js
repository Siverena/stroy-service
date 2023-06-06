import SsBtn from '@/elements/ss-btn/SsBtn.vue';
export default {
  name: 'SsProject',
  props: ['project'],
  components: {
    SsBtn,
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('ru-RU').format(this.project.minprice);
    },
  },
};
