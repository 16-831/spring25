import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
