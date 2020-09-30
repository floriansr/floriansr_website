// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-app-jsx": () => import("./../../../src/pages/App.jsx" /* webpackChunkName: "component---src-pages-app-jsx" */),
  "component---src-pages-home-index-jsx": () => import("./../../../src/pages/Home/index.jsx" /* webpackChunkName: "component---src-pages-home-index-jsx" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-project-index-jsx": () => import("./../../../src/pages/Project/index.jsx" /* webpackChunkName: "component---src-pages-project-index-jsx" */),
  "component---src-pages-projects-index-jsx": () => import("./../../../src/pages/Projects/index.jsx" /* webpackChunkName: "component---src-pages-projects-index-jsx" */)
}

