import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderOptionsComponent } from './header-options/header-options.component';
import { BrandLabelComponent } from './brand-label/brand-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderOptionsComponent,
    BrandLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
