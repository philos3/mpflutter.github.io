
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/mpflutter/',
  component: ComponentCreator('/mpflutter/','939'),
  exact: true,
},
{
  path: '/mpflutter/blog',
  component: ComponentCreator('/mpflutter/blog','1f3'),
  exact: true,
},
{
  path: '/mpflutter/blog/2020/12/08/approaching',
  component: ComponentCreator('/mpflutter/blog/2020/12/08/approaching','ca3'),
  exact: true,
},
{
  path: '/mpflutter/help/',
  component: ComponentCreator('/mpflutter/help/','779'),
  exact: true,
},
{
  path: '/mpflutter/docs',
  component: ComponentCreator('/mpflutter/docs','be2'),
  
  routes: [
{
  path: '/mpflutter/docs/api',
  component: ComponentCreator('/mpflutter/docs/api','26b'),
  exact: true,
},
{
  path: '/mpflutter/docs/concepts',
  component: ComponentCreator('/mpflutter/docs/concepts','2ac'),
  exact: true,
},
{
  path: '/mpflutter/docs/getting-started',
  component: ComponentCreator('/mpflutter/docs/getting-started','35e'),
  exact: true,
},
{
  path: '/mpflutter/docs/troubleshooting',
  component: ComponentCreator('/mpflutter/docs/troubleshooting','269'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
