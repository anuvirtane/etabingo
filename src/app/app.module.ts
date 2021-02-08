import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { LaheisbingoComponent } from './laheisbingo/laheisbingo.component';
import { EtaopetusbingoComponent } from './etaopetusbingo/etaopetusbingo.component';
import { AlkuComponent } from './alku/alku.component';

const appRoutes: Routes = [ {path: '', component: AlkuComponent},
                             {path: 'etaopetusbingo', component: EtaopetusbingoComponent},
                              {path: 'laheisbingo', component: LaheisbingoComponent},
                              {path: '**', component: AppComponent},
                            ]




@NgModule({
  declarations: [
    AppComponent,
    LaheisbingoComponent,
    EtaopetusbingoComponent,
    AlkuComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

