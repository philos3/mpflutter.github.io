
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/zh/',
  component: ComponentCreator('/zh/','9c2'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug',
  component: ComponentCreator('/zh/__docusaurus/debug','a9f'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/config',
  component: ComponentCreator('/zh/__docusaurus/debug/config','d38'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/content',
  component: ComponentCreator('/zh/__docusaurus/debug/content','b3d'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/globalData',
  component: ComponentCreator('/zh/__docusaurus/debug/globalData','bfe'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/metadata',
  component: ComponentCreator('/zh/__docusaurus/debug/metadata','0ca'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/registry',
  component: ComponentCreator('/zh/__docusaurus/debug/registry','ffc'),
  exact: true,
},
{
  path: '/zh/__docusaurus/debug/routes',
  component: ComponentCreator('/zh/__docusaurus/debug/routes','c25'),
  exact: true,
},
{
  path: '/zh/blog',
  component: ComponentCreator('/zh/blog','1c0'),
  exact: true,
},
{
  path: '/zh/blog/2020/12/08/approaching',
  component: ComponentCreator('/zh/blog/2020/12/08/approaching','073'),
  exact: true,
},
{
  path: '/zh/help/',
  component: ComponentCreator('/zh/help/','110'),
  exact: true,
},
{
  path: '/zh/docs',
  component: ComponentCreator('/zh/docs','29e'),
  
  routes: [
{
  path: '/zh/docs/api',
  component: ComponentCreator('/zh/docs/api','334'),
  exact: true,
},
{
  path: '/zh/docs/concepts',
  component: ComponentCreator('/zh/docs/concepts','d4d'),
  exact: true,
},
{
  path: '/zh/docs/getting-started',
  component: ComponentCreator('/zh/docs/getting-started','ed7'),
  exact: true,
},
{
  path: '/zh/docs/troubleshooting',
  component: ComponentCreator('/zh/docs/troubleshooting','310'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
