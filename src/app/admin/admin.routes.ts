import { Routes } from "@angular/router";
import { Dashboard } from "../dashboard/dashboard";
import { Overview } from "../dashboard/overview/overview";
import { Settings } from "../dashboard/settings/settings";
import { Users } from "../dashboard/users/users";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
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
  }
];
