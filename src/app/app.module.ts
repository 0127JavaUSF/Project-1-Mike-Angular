import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/Router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { Route } from '@angular/compiler/src/core';
import { pathToFileURL } from 'url';


const appRoutes: Routes = [
{path: 'user', component:UserComponent},
{path: 'manager', component:ManagerComponent},
{path: 'login', component:LoginComponent}
];

@NgModule({
 
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ManagerComponent,
    
  ],
  imports: [
    RouterModule.forRoot(

      appRoutes

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
