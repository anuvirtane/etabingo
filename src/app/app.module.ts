import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { LaheisbingoComponent } from './laheisbingo/laheisbingo.component';
import { EtaopetusbingoComponent } from './etaopetusbingo/etaopetusbingo.component';
import { AlkuComponent } from './alku/alku.component';
import { TeeBingoComponent } from './tee-bingo/tee-bingo.component';
import { OmaBingoComponent } from './oma-bingo/oma-bingo.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [ {path: '', component: AlkuComponent},
                             {path: 'etaopetusbingo', component: EtaopetusbingoComponent},
                              {path: 'laheisbingo', component: LaheisbingoComponent},
                              {path: 'tee-bingo', component: TeeBingoComponent},
                              {path: 'oma-bingo/:id', component: OmaBingoComponent},
                              {path: '**', component: AppComponent}
                            ]




@NgModule({
  declarations: [
    AppComponent,
    LaheisbingoComponent,
    EtaopetusbingoComponent,
    AlkuComponent,
    TeeBingoComponent,
    OmaBingoComponent,
    NavbarComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

