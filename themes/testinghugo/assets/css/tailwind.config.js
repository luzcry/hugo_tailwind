module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    layers: ['components', 'utilities'],
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
    css: ['style.css']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
