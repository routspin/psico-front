import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatMenuTrigger,
  ]
})
export class MaterialModule { }