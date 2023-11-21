import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  searchData(event: any) {
    let filtered: string = event.target.value;
    this.router.navigate([`search/featured-movie/${filtered}`])
    console.log(event.target.value)
  }
}
