import SsBtn from '@/elements/ss-btn/SsBtn';
export default {
  name: 'SSModalGallery',
  props: [
    'currentImage',
    'images',
    'closeGallery',
    'setPrevImage',
    'setNextImage',
  ],
  components: {
    SsBtn,
  },
};
