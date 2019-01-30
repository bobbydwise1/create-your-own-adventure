import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { StartWorkingComponent } from './start-working/start-working.component'
import { MakeDirectoryComponent } from './make-directory/make-directory.component';
import { AngleNoobComponent } from './angle-noob/angle-noob.component';
import { GenerateComponentsComponent } from './generate-components/generate-components.component';
import { PlanComponent } from './plan/plan.component';

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
  },
  {
    path: 'make-directory',
    component: MakeDirectoryComponent
  },
  {
    path: 'angle-noob',
    component: AngleNoobComponent
  },
  {
    path: 'generate-components',
    component: GenerateComponentsComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
