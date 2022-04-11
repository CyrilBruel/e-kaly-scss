import { INavData } from '@coreui/angular';

export const navItemsClient: INavData[] = [
  {
    name: 'Client',
    title: true
  },
  {
    name: 'Liste',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Plats',
        url: '/home/client/acceuil'
      },
      {
        name: 'Commandes',
        url: '/home/client/listecommandes'
      },
    ]
  },
]

export const navItemsRestaurant: INavData[] = [
  {
    name: 'Restaurant',
    title: true
  },
  {
    name: 'Restaurant',
    url: '/restaurant',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Commandes',
        url: 'restaurant/commandes'
      },
      {
        name: 'Plats',
        url: 'restaurant/plats'
      },
      {
        name: 'Ajouter plat',
        url: 'restaurant/ajout'
      },
    ]
  },
  {
    name: 'livreur',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Accordion',
        url: '/liste'
      },
      {
        name: 'Breadcrumbs',
        url: '/ajout'
      },
    ]
  },
]

export const navItemsLivreur: INavData[] = [
  {
    name: 'Livreur',
    title: true
  },
  {
    name: 'Commande',
    url: '',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Liste',
        url: '/liste'
      },
    ]
  },
]

export const navItemsEkaly: INavData[] = [
  {
    name: 'E-kaly',
    title: true
  },
  {
    name: 'restaurant',
    url: '',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Accordion',
        url: '/liste'
      },
      {
        name: 'Breadcrumbs',
        url: '/ajout'
      },
    ]
  },
  {
    name: 'livreur',
    url: '',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Accordion',
        url: '/liste'
      },
      {
        name: 'Breadcrumbs',
        url: '/ajout'
      },
    ]
  },
  {
    name: 'Benefice',
    url: '/',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Restaurants',
        url: '/restaurants'
      },
      {
        name: 'Clients',
        url: '/clients'
      },
    ]
  },
]

export const navItems: INavData[] = [
{
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'e-kaly',
    title: true
  },
  {
    name: 'restaurant',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Accordion',
        url: '/liste'
      },
      {
        name: 'Breadcrumbs',
        url: '/ajout'
      },
    ]
  },
  {
    name: 'livreur',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Accordion',
        url: '/liste'
      },
      {
        name: 'Breadcrumbs',
        url: '/ajout'
      },
    ]

  },
  {
    name: 'Benefices',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
