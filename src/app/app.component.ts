import { Component } from '@angular/core';
import { PagetitleComponent } from './common/pagetitle/pagetitle.component';
import { count } from 'console';
import { CountComponent } from './common/count/count.component';

@Component({
  selector: 'app-root',
  imports: [PagetitleComponent,CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularapp';


  count = 0;
userLoggedIn = true;
btndisabled = false

  handlingIncrement(){
    this.count++
  }
}
