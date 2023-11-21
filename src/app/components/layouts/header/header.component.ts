import { Component} from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
}

