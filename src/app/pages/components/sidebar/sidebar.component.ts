import { Component } from '@angular/core';
import { faPenToSquare, faVideo, faEllipsis, faSearch,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faEllipsis = faEllipsis;
  faVideo = faVideo;
  faPenToSquare = faPenToSquare;
  faSearch = faSearch;
  faPlus = faPlus;
}
