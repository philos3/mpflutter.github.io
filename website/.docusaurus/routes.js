
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/zh/',
  component: ComponentCreator('/zh/','9c2'),
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
  component: ComponentCreator('/zh/docs','9db'),
  
  routes: [
{
  path: '/zh/docs/api-index',
  component: ComponentCreator('/zh/docs/api-index','aa0'),
  exact: true,
},
{
  path: '/zh/docs/build-weapp',
  component: ComponentCreator('/zh/docs/build-weapp','130'),
  exact: true,
},
{
  path: '/zh/docs/build-web',
  component: ComponentCreator('/zh/docs/build-web','722'),
  exact: true,
},
{
  path: '/zh/docs/compare',
  component: ComponentCreator('/zh/docs/compare','a9d'),
  exact: true,
},
{
  path: '/zh/docs/concepts',
  component: ComponentCreator('/zh/docs/concepts','d4d'),
  exact: true,
},
{
  path: '/zh/docs/contact',
  component: ComponentCreator('/zh/docs/contact','a32'),
  exact: true,
},
{
  path: '/zh/docs/data-network',
  component: ComponentCreator('/zh/docs/data-network','e71'),
  exact: true,
},
{
  path: '/zh/docs/getting-started',
  component: ComponentCreator('/zh/docs/getting-started','ed7'),
  exact: true,
},
{
  path: '/zh/docs/gitpod',
  component: ComponentCreator('/zh/docs/gitpod','7c3'),
  exact: true,
},
{
  path: '/zh/docs/install',
  component: ComponentCreator('/zh/docs/install','86b'),
  exact: true,
},
{
  path: '/zh/docs/teams',
  component: ComponentCreator('/zh/docs/teams','09c'),
  exact: true,
},
{
  path: '/zh/docs/troubleshooting',
  component: ComponentCreator('/zh/docs/troubleshooting','310'),
  exact: true,
},
{
  path: '/zh/docs/ui-animation',
  component: ComponentCreator('/zh/docs/ui-animation','d8a'),
  exact: true,
},
{
  path: '/zh/docs/ui-assets',
  component: ComponentCreator('/zh/docs/ui-assets','a38'),
  exact: true,
},
{
  path: '/zh/docs/ui-router',
  component: ComponentCreator('/zh/docs/ui-router','76b'),
  exact: true,
},
{
  path: '/zh/docs/ui-widgets',
  component: ComponentCreator('/zh/docs/ui-widgets','0e0'),
  exact: true,
},
{
  path: '/zh/docs/ui-widgets-index',
  component: ComponentCreator('/zh/docs/ui-widgets-index','5e4'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
