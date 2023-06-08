import SsHeader from '@/components/ss-header/SsHeader.vue';
import SsFooter from '@/components/ss-footer/SsFooter.vue';
import SsContacts from '@/components/ss-contacts/SsContacts.vue';
import SsModal from '@/components/ss-modal/SsModal.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    SsHeader,
    SsFooter,
    SsContacts,
    SsModal,
    SsBtn,
  },
  methods: {},
  computed: {
    ...mapGetters(['isModalOpen']),
  },
};
