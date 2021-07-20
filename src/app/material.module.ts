import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatMenuTrigger,
    MatIconModule,
    MatCardModule,
  ]
})
export class MaterialModule { }