import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { BtnComponent } from './component/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TableLightComponent } from './table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    BtnComponent,
    TableLightComponent,
    TotalPipe
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [TemplatesModule, IconsModule, BtnComponent, TableLightComponent, TotalPipe],
})
export class SharedModule { }
