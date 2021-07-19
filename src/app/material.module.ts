import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatMenuTrigger,
    MatIconModule,
    BrowserAnimationsModule,
  ]
})
export class MaterialModule { }