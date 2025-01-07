import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  imports: [],
  templateUrl: './pagetitle.component.html',
  styleUrl: './pagetitle.component.css'
})
export class PagetitleComponent {
  @Input() parentTitle :string = "";
}
