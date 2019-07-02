import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilVeiwComponent } from './appareil-veiw/appareil-veiw.component';
import { AuthService } from './services/auth.service';
import { SingleappareilComponent } from './single-appareil/singleAppareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard-service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserlistComponent } from './user-list/userList.component';
import { NewUserComponent } from './new-user/new.user.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilVeiwComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserlistComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleappareilComponent },
  { path: 'editAppareils', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: '', component: AppareilVeiwComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
]


@NgModule({ 
 declarations: [
    UserlistComponent,
    SingleappareilComponent,
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilVeiwComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
