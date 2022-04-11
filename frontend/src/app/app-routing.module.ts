import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './client/inscription/inscription.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ClientComponent } from './client/client.component';
import { ClientPlatComponent } from './client/client-plat/client-plat.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ClientDetailsPlatComponent } from './client/client-details-plat/client-details-plat.component';
import { RestaurantCommandesComponent } from './restaurant/restaurant-commandes/restaurant-commandes.component';
import { RestaurantPlatsComponent } from './restaurant/restaurant-plats/restaurant-plats.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ClientListePlatsComponent } from './client/client-liste-plats/client-liste-plats.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'client/acceuil',
        component: ClientPlatComponent,
        data: {
          title: 'Plats'
        }
      },
      {
        path: 'client/plat/details',
        component: ClientDetailsPlatComponent,
        data: {
          title: 'Plats'
        }
      },
      {
        path: 'client/listecommandes',
        component: ClientListePlatsComponent,
        data: {
          title: 'Plats'
        }
      },
      {
        path: 'restaurant/commandes',
        component: RestaurantCommandesComponent,
        data: {
          title: 'Listes des Commandes'
        }
      },
      {
        path: 'restaurant/plats',
        component: RestaurantPlatsComponent,
        data: {
          title: 'Listes des restaurants'
        },
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  // {
  //   path: 'client/acceuil',
  //   component: ClientPlatComponent,
  //   data: {
  //     title: 'Plats'
  //   }
  // },
  // {
  //   path: 'client/plat/details',
  //   component: ClientDetailsPlatComponent,
  //   data: {
  //     title: 'Plats'
  //   }
  // },
  // {
  //   path: 'restaurant/commandes',
  //   component: RestaurantCommandesComponent,
  //   data: {
  //     title: 'Listes des restaurants'
  //   }
  // },
  // {
  //   path: 'restaurant/plats',
  //   component: RestaurantPlatsComponent,
  //   data: {
  //     title: 'Listes des restaurants'
  //   },
  // },

  {
    path: 'client/inscription',
    component: InscriptionComponent,
    data: {
      title: 'Inscription Page'
    }
  },
  {
    path: '',
    component: ConnexionComponent,
    data: {
      title: 'Inscription Page'
    }
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    data: {
      title: 'Inscription Page'
    }
  },
  // {
  //   path: 'restaurant/commandes',
  //   component: RestaurantCommandesComponent,
  //   data: {
  //     title: 'Listes des Commandes'
  //   }
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
