import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';



@NgModule({
    exports: [
      CommonModule
    ],
    imports: [
      CommonModule,
      HttpModule
    ],
    providers: [         ]
  })
  export class SharedModule {}