import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbutton',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule],
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css']
})
export class NavbuttonComponent {

}
