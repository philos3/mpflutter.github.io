export default {
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "editUrl": "https://github.com/mpflutter/mpflutter/edit/master/website",
          "sidebarPath": "/Users/saiakirahui/Documents/mpflutter/site/website/sidebars.json"
        },
        "theme": {
          "customCss": "/Users/saiakirahui/Documents/mpflutter/site/website/src/css/custom.css"
        }
      }
    ]
  ],
  "title": "MPFlutter",
  "tagline": "使用 Flutter \b构建『Web』和『小程序』应用",
  "organizationName": "mpflutter",
  "projectName": "mpflutter.github.io",
  "url": "https://mpflutter.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.png",
  "themeConfig": {
    "navbar": {
      "title": "MPFlutter",
      "logo": {
        "alt": "MPFlutter Logo",
        "src": "img/metro.svg"
      },
      "items": [
        {
          "label": "文档",
          "to": "docs/getting-started",
          "position": "left"
        },
        {
          "label": "API",
          "to": "docs/api",
          "position": "left"
        },
        {
          "label": "帮助",
          "to": "help",
          "position": "left"
        },
        {
          "label": "博客",
          "to": "blog",
          "position": "left"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/mpflutter/mpflutter",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Quick Start",
              "to": "docs/getting-started"
            },
            {
              "label": "API Reference",
              "to": "docs/api"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/mpflutter"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "Github",
              "href": "https://github.com/mpflutter/mpflutter"
            }
          ]
        }
      ],
      "logo": {
        "alt": "MPFlutter Logo",
        "src": "img/oss_logo.png",
        "href": "https://opensource.facebook.com/"
      },
      "copyright": "Copyright © 2020 MPFlutter Team. Built with Docusaurus."
    },
    "image": "img/opengraph.png",
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};