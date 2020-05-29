import { CommonModule, DatePipe, AsyncPipe } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [],
  declarations: [],
  providers: [DatePipe, AsyncPipe],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
