
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/public/',
  component: ComponentCreator('/public/','fb4'),
  exact: true,
},
{
  path: '/public/blog',
  component: ComponentCreator('/public/blog','314'),
  exact: true,
},
{
  path: '/public/blog/2020/12/08/approaching',
  component: ComponentCreator('/public/blog/2020/12/08/approaching','5d8'),
  exact: true,
},
{
  path: '/public/help/',
  component: ComponentCreator('/public/help/','738'),
  exact: true,
},
{
  path: '/public/docs',
  component: ComponentCreator('/public/docs','be8'),
  
  routes: [
{
  path: '/public/docs/api',
  component: ComponentCreator('/public/docs/api','143'),
  exact: true,
},
{
  path: '/public/docs/concepts',
  component: ComponentCreator('/public/docs/concepts','cb1'),
  exact: true,
},
{
  path: '/public/docs/getting-started',
  component: ComponentCreator('/public/docs/getting-started','bb6'),
  exact: true,
},
{
  path: '/public/docs/troubleshooting',
  component: ComponentCreator('/public/docs/troubleshooting','e3b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
