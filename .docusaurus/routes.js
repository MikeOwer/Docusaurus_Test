
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','192'),
    routes: [
      {
        path: '/docs/data-communication-security/page1',
        component: ComponentCreator('/docs/data-communication-security/page1','d44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-communication-security/page2',
        component: ComponentCreator('/docs/data-communication-security/page2','589'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-communication-security/page3',
        component: ComponentCreator('/docs/data-communication-security/page3','1eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/internet-of-things/page1',
        component: ComponentCreator('/docs/internet-of-things/page1','f70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/internet-of-things/page2',
        component: ComponentCreator('/docs/internet-of-things/page2','175'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/internet-of-things/page3',
        component: ComponentCreator('/docs/internet-of-things/page3','5d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/meet-us',
        component: ComponentCreator('/docs/meet-us','891'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/sockets-application-programming/page1',
        component: ComponentCreator('/docs/sockets-application-programming/page1','5be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/sockets-application-programming/page2',
        component: ComponentCreator('/docs/sockets-application-programming/page2','515'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/sockets-application-programming/page3',
        component: ComponentCreator('/docs/sockets-application-programming/page3','4f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web-security/page1',
        component: ComponentCreator('/docs/web-security/page1','f74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web-security/page2',
        component: ComponentCreator('/docs/web-security/page2','f99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web-security/page3',
        component: ComponentCreator('/docs/web-security/page3','cde'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
