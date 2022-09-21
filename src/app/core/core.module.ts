import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, IconsModule],
  exports: [IconsModule, LoginModule, TemplatesModule, UiModule]
})
export class CoreModule {

}
