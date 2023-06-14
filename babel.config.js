module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './components',
          elements: './elements',
          pages: './pages',
          img: './assets/img',
        },
      },
    ],
  ],
};
