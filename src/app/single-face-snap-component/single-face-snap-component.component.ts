import { Component, Input, OnInit } from '@angular/core';
import FaceSnap from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap-component',
  imports: [NgClass,NgStyle,DatePipe,TitleCasePipe],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss'
})
export class SingleFaceSnapComponentComponent implements OnInit {


constructor(private faceSnapsService: FaceSnapsService,private route:ActivatedRoute) {

 }
 

  faceSnap!:FaceSnap;
  isSnap!:boolean;
  snapButton!:string;


  // ...
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }
  
  // ...
  

  onSnap(): void {
    if(!this.isSnap){
      this.faceSnapsService.snapFaceSnaps(this.faceSnap.id,'snap');
      this.isSnap = true;
      this.snapButton = 'Oops unsnap';
    }
    else{
      this.isSnap = false;
      this.snapButton = 'Oh Snap';
      this.faceSnapsService.snapFaceSnaps(this.faceSnap.id,'unsnap');
    }

  }
  private prepareInterface() {
    this.snapButton = 'Oh Snap!';
    this.isSnap = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
