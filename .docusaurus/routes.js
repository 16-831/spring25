import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/spring25/__docusaurus/debug',
    component: ComponentCreator('/spring25/__docusaurus/debug', 'd6c'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/config',
    component: ComponentCreator('/spring25/__docusaurus/debug/config', 'd51'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/content',
    component: ComponentCreator('/spring25/__docusaurus/debug/content', '1d0'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/globalData',
    component: ComponentCreator('/spring25/__docusaurus/debug/globalData', 'b80'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/metadata',
    component: ComponentCreator('/spring25/__docusaurus/debug/metadata', '1f1'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/registry',
    component: ComponentCreator('/spring25/__docusaurus/debug/registry', 'b22'),
    exact: true
  },
  {
    path: '/spring25/__docusaurus/debug/routes',
    component: ComponentCreator('/spring25/__docusaurus/debug/routes', '1e6'),
    exact: true
  },
  {
    path: '/spring25/lectures',
    component: ComponentCreator('/spring25/lectures', '31c'),
    exact: true
  },
  {
    path: '/spring25/logistics',
    component: ComponentCreator('/spring25/logistics', 'a5d'),
    exact: true
  },
  {
    path: '/spring25/previous',
    component: ComponentCreator('/spring25/previous', 'd11'),
    exact: true
  },
  {
    path: '/spring25/projects',
    component: ComponentCreator('/spring25/projects', '34f'),
    exact: true
  },
  {
    path: '/spring25/docs',
    component: ComponentCreator('/spring25/docs', 'e23'),
    routes: [
      {
        path: '/spring25/docs',
        component: ComponentCreator('/spring25/docs', '4d5'),
        routes: [
          {
            path: '/spring25/docs',
            component: ComponentCreator('/spring25/docs', 'd7e'),
            routes: [
              {
                path: '/spring25/docs/intro',
                component: ComponentCreator('/spring25/docs/intro', '31c'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/spring25/',
    component: ComponentCreator('/spring25/', 'b4b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
