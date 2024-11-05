import { Component } from '@angular/core';
import { faPhone, faVideo, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  faPhone = faPhone;
  faVideo = faVideo;
  faCircleInfo = faCircleInfo;
} 
