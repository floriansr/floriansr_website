const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/404.js"))),
  "component---src-pages-app-jsx": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/App.jsx"))),
  "component---src-pages-home-index-jsx": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/Home/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/index.jsx"))),
  "component---src-pages-project-index-jsx": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/Project/index.jsx"))),
  "component---src-pages-projects-index-jsx": hot(preferDefault(require("/Users/FlorianSueur/Desktop/v/formation/floriansr_website/front/src/pages/Projects/index.jsx")))
}

