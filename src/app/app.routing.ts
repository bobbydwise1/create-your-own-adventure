import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { StartWorkingComponent } from './start-working/start-working.component'


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'go-home',
    component: GoHomeComponent
  },
  {
    path: 'start-working',
    component: StartWorkingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
