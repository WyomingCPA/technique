export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'category',
      displayName: 'menu.category',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'category-index',
          displayName: 'menu.category-index',
        },
        {
          name: 'category-create',
          displayName: 'menu.category-create',
        },
      ],
    },
    {
      name: 'products',
      displayName: 'menu.products',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'refrigerator',
          displayName: 'menu.refrigerator',
        },
        {
          name: 'washmashine',
          displayName: 'menu.washmashine',
        },
        {
          name: 'tv32',
          displayName: 'menu.tv32',
        },
        {
          name: 'tv40',
          displayName: 'menu.tv40',
        },
        {
          name: 'tv50',
          displayName: 'menu.tv50',
        },
        {
          name: 'smart',
          displayName: 'menu.smart',
        },
        {
          name: 'laptop',
          displayName: 'menu.laptop',
        },
        {
          name: 'vacuum',
          displayName: 'menu.vacuum',
        },
        {
          name: 'favorite',
          displayName: 'menu.favorite',
        },
        {
          name: 'sales',
          displayName: 'menu.sales',
        },
        {
          name: 'changes',
          displayName: 'menu.changes',
        },
      ],
    },
  ] as INavigationRoute[],
}
