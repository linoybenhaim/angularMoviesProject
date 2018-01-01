import { Component , OnInit} from '@angular/core';
import { DataCenterService } from './core/services/data-center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    localStorage.removeItem("tabledata");
  }
  title = 'app';
}





