import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-no-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './no-search.component.html',
  styleUrls: ['./no-search.component.css']
})
export class NoSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
