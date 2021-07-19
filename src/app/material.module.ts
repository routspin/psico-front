import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatMenuTrigger,
    MatIconModule,
  ]
})
export class MaterialModule { }