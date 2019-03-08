import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
  userId:number;
  id : number;
  title: string;
  completed: boolean;
 }
