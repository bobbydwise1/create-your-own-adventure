import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { StartWorkingComponent } from './start-working/start-working.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MakeDirectoryComponent } from './make-directory/make-directory.component';
import { AngleNoobComponent } from './angle-noob/angle-noob.component';
import { GenerateComponentsComponent } from './generate-components/generate-components.component';
import { PlanComponent } from './plan/plan.component';




@NgModule({
  declarations: [
    AppComponent,
    GoHomeComponent,
    StartWorkingComponent,
    WelcomeComponent,
    MakeDirectoryComponent,
    AngleNoobComponent,
    GenerateComponentsComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
