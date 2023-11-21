import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from 'src/models/tab';

@Component({
  selector: 'app-tab-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabComponent {
  @Input() tabs: Tab[] = [];
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  activeTab: string = '';

  onTabChange(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }
}