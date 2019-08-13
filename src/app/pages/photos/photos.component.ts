import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photoRemote;
  photoRemoto: any;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.photoRemoto = this.dataservice.getPhoto();
  }

}
