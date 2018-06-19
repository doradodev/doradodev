import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {MaterializeModule} from 'angular2-materialize';
import {TypingAnimationModule} from "angular-typing-animation";

import { BioComponent } from './bio/bio.component';
import {NgStickyDirective} from "ng-sticky";



const appRoutes: Routes = [
  {path: '', component: HomeComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    BioComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    TypingAnimationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
