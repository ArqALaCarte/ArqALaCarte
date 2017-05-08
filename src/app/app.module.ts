import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyANTbZcc1SnPuFYt4IGVQ6UIx6nKEBDSdw",
  authDomain: "arqalacarte-2daa0.firebaseapp.com",
  databaseURL: "https://arqalacarte-2daa0.firebaseio.com",
  projectId: "arqalacarte-2daa0",
  storageBucket: "arqalacarte-2daa0.appspot.com",
  messagingSenderId: "181109475113"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  AngularFireModule.initializeApp(firebaseConfig),
    routes,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
