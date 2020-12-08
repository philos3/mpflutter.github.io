
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','c34'),
  exact: true,
},
{
  path: '/blog/2020/12/08/approaching',
  component: ComponentCreator('/blog/2020/12/08/approaching','f53'),
  exact: true,
},
{
  path: '/help/',
  component: ComponentCreator('/help/','6dc'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','de7'),
  
  routes: [
{
  path: '/docs/api',
  component: ComponentCreator('/docs/api','65c'),
  exact: true,
},
{
  path: '/docs/concepts',
  component: ComponentCreator('/docs/concepts','4ea'),
  exact: true,
},
{
  path: '/docs/getting-started',
  component: ComponentCreator('/docs/getting-started','6e3'),
  exact: true,
},
{
  path: '/docs/troubleshooting',
  component: ComponentCreator('/docs/troubleshooting','b74'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
