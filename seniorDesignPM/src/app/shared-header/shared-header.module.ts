import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';


import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeadingComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [HeadingComponent]
})
export class SharedHeaderModule { }
