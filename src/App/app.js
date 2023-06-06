import SsHeader from '@/components/ss-header/SsHeader.vue';
import SsFooter from '@/components/ss-footer/SsFooter.vue';
import SsContacts from '@/components/ss-contacts/SsContacts.vue';
import SsModal from '@/components/ss-modal/SsModal.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    SsHeader,
    SsFooter,
    SsContacts,
    SsModal,
  },
  methods: {},
  computed: {
    ...mapGetters(['isModalOpen']),
  },
};
