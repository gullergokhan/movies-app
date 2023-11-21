import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }
}

