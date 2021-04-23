module.exports = {
  future: {
  	purgeLayersByDefault: true,
  	removeDeprecatedGapUtilities: true,
  },
  purge: {
  	content: [
  		"./src/**/*.svelte",
  	],
  	enabled: false
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
