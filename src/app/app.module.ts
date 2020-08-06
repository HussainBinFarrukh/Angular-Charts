import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { BarComponent } from './bar-chart/bar-chart.component';
import { BarVerticleComponent } from './bar-verticle-chart/bar-verticle-chart.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
],
  declarations: [ AppComponent, BarComponent, BarVerticleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
