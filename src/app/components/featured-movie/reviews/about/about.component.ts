import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() about: Movie;
  constructor() {}

  ngOnInit(): void {}
}
