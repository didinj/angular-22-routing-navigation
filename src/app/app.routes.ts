import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ProductDetails } from './product-details/product-details';
import { NotFound } from './not-found/not-found';
import { Dashboard } from './dashboard/dashboard';
import { Overview } from './dashboard/overview/overview';
import { Users } from './dashboard/users/users';
import { Settings } from './dashboard/settings/settings';
import { Login } from './login/login';
import { authGuard } from './auth.guard';
import { productResolver } from './product.resolver';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home | Angular Routing Tutorial',
    data: {
      description: 'Welcome to the Angular routing tutorial.',
      section: 'Main'
    }
  },
  {
    path: 'about',
    component: About,
    title: 'About | Angular Routing Tutorial',
    data: {
      description: 'Learn more about this application.',
      section: 'Information'
    }
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | Angular Routing Tutorial',
    data: {
      description: 'Contact us for more information.',
      section: 'Information'
    }
  },
  {
    path: 'products/:id',
    component: ProductDetails,
    title: 'Product Details | Angular Routing Tutorial',
    data: {
      section: 'Products'
    }
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard',
    children: [
      {
        path: '',
        component: Overview,
        title: 'Dashboard Overview'
      },
      {
        path: 'overview',
        component: Overview,
        title: 'Dashboard Overview'
      },
      {
        path: 'users',
        component: Users,
        title: 'Dashboard Users'
      },
      {
        path: 'settings',
        component: Settings,
        title: 'Dashboard Settings'
      }
    ]
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports/reports').then(m => m.Reports),
    title: 'Reports'
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes')
        .then(m => m.ADMIN_ROUTES),
    title: 'Admin'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login'
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./admin/admin.routes')
        .then(m => m.ADMIN_ROUTES),
    title: 'Admin'
  },
  {
    path: 'products/:id',
    component: ProductDetails,
    title: 'Product Details',
    resolve: {
      product: productResolver
    }
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound,
    title: '404 - Page Not Found'
  }
];
