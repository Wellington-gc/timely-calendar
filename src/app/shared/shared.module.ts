import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  exports: [TruncatePipe],
  imports: [CommonModule]
})
export class SharedModule {}
