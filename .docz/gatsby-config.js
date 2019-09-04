const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'React Hooks Library',
    description: 'General purpose React hooks library',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [
          { name: 'General', menu: ['Introduction', 'Getting started'] },
          'Hooks',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz',
        base: '/',
        source: './',
        src: './',
        files: 'docs/**/*.mdx',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Hooks Library',
        description: 'General purpose React hooks library',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/tylucaskelley/Code/personal/lib-react-hooks',
          templates:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/package.json',
          docz: '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz',
          cache:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/.cache',
          app: '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app',
          appPublic:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/public',
          appNodeModules:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/node_modules',
          appPackageJson:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/package.json',
          appYarnLock:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/gatsby-config.js',
          gatsbyBrowser:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/gatsby-browser.js',
          gatsbyNode:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/gatsby-node.js',
          gatsbySSR:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/gatsby-ssr.js',
          importsJs:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app/imports.js',
          rootJs:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app/root.jsx',
          indexJs:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app/index.jsx',
          indexHtml:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app/index.html',
          db:
            '/Users/tylucaskelley/Code/personal/lib-react-hooks/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}

module.exports = merge(config, custom)
