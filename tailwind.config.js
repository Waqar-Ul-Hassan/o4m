module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./docs/.vuepress/components/Form.vue"],
  theme: {
    extend: {
      colors: {
        'o4m-blue': '#0099CC',
      }
    },
  },
  variants: {},
  plugins: [],
}
