import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbuttonComponent } from './navbutton/navbutton.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    
    SharedModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    SliderComponent,
    NavbuttonComponent
  ],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  isLoading: boolean = false;
 
}
