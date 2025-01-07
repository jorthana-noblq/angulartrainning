import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  @Input() count:number =0;

  @Output() onIncrement = new EventEmitter();

  Increment(){
    this.onIncrement.emit();
  }

}
