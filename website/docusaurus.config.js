/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

"use strict";

const siteConfig = {
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          editUrl: "https://github.com/mpflutter/mpflutter/edit/master/website",
          sidebarPath: require.resolve("./sidebars.json"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  title: "MPFlutter",
  tagline: "使用 Flutter 构建『Web』和『小程序』应用",
  organizationName: "mpflutter",
  projectName: "mpflutter.github.io",
  url: "https://mpflutter.github.io",
  baseUrl: "/public/",
  favicon: "img/favicon.png",
  themeConfig: {
    navbar: {
      title: "MPFlutter",
      logo: {
        alt: "MPFlutter Logo",
        src: "img/metro.svg",
      },
      items: [
        { label: "文档", to: "docs/getting-started" },
        { label: "API", to: "docs/api" },
        { label: "帮助", to: "help" },
        { label: "博客", to: "blog" },
        // {
        //   label: 'Twitter',
        //   href: 'https://twitter.com/MetroBundler',
        //   position: 'right',
        // },
        {
          label: "GitHub",
          href: "https://github.com/mpflutter/mpflutter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Quick Start", to: "docs/getting-started" },
            { label: "API Reference", to: "docs/api" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/mpflutter",
            },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "blog" },
            { label: "Github", href: "https://github.com/mpflutter/mpflutter" },
          ],
        },
      ],
      logo: {
        alt: "MPFlutter Logo",
        src: "img/oss_logo.png",
        href: "https://opensource.facebook.com/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} MPFlutter Team. Built with Docusaurus.`,
    },
    image: "img/opengraph.png",
  },
  scripts: ["https://buttons.github.io/buttons.js"],
};

module.exports = siteConfig;
