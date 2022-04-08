import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared-ui/src/lib/header/header.component';
import { MaterialModule  } from '@async/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedUiModule {}
