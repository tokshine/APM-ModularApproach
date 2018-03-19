import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';


// import {HttpClientModule} from '@angular/common/http' this is deprecated 
//httpclientmodule is now replaced by http
@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,HttpModule,
  

    
    RouterModule.forRoot([
    
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]), ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
