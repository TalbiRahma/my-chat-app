import { Component } from '@angular/core';
import { faImage, faCamera, faMicrophone, faFaceSmile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-zone',
  templateUrl: './message-zone.component.html',
  styleUrl: './message-zone.component.css'
})
export class MessageZoneComponent {
  faImage = faImage;
  faCamera = faCamera;
  faMicrophone = faMicrophone;
  faFaceSmile = faFaceSmile;
}
