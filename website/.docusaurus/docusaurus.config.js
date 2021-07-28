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
  "tagline": "渐进式 Flutter 开发框架",
  "organizationName": "mpflutter",
  "projectName": "mpflutter.github.io",
  "url": "https://mpflutter.github.io",
  "baseUrl": "/zh/",
  "favicon": "img/favicon.png",
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "dart"
      ]
    },
    "navbar": {
      "title": "MPFlutter",
      "logo": {
        "alt": "MPFlutter Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "label": "文档",
          "to": "docs/concepts",
          "position": "left"
        },
        {
          "label": "API",
          "to": "docs/api-index",
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
              "to": "docs/concepts"
            },
            {
              "label": "API Reference",
              "to": "docs/api-index"
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
        "href": "https://github.com/mpflutter/mpflutter"
      },
      "copyright": "Copyright © 2021 MPFlutter Team. Built with Docusaurus."
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
    "hideableSidebar": false
  },
  "scripts": [],
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