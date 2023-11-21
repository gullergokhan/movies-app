import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-bar-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.css']
})
export class BarSearchComponent implements OnInit {
  @Output() filterTextChange: EventEmitter<string> = new EventEmitter<string>();
  filterText: string = '';

  onFilterTextChange() {
    this.filterTextChange.emit(this.filterText);
  }

  ngOnInit(): void {}
}
