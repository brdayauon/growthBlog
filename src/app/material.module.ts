import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatExpansionModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatExpansionModule, MatInputModule,  MatToolbarModule]
})
export class MaterialModule { }