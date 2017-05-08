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
  apiKey: "AIzaSyBaXnFz79ODpebNVv25bozycoQTwENdPpo",
  authDomain: "arqlacarte-124a2.firebaseapp.com",
  databaseURL: "https://arqlacarte-124a2.firebaseio.com",
  projectId: "arqlacarte-124a2",
  storageBucket: "arqlacarte-124a2.appspot.com",
  messagingSenderId: "274713951877"
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
