import { Component } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private bidi: BidiModule) {
    console.log(bidi);
  }
  title = 'yedidim-ng';
}
