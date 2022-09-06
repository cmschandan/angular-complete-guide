import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'angular-complete-guide';

  username = "";

  onReset(){
    // this.username = this.reset();
  }
}
