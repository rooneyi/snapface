import { Component, Input, OnInit } from '@angular/core';
import FaceSnap from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle,NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
rgb(arg0: number,arg1: string,arg2: number): any {
throw new Error('Method not implemented.');
}

  @Input() faceSnap!:FaceSnap;
  isSnap!:boolean;
  snapButton!:string;


  ngOnInit(): void {
    this.isSnap = false;
    this.snapButton = 'Oh Snap';
  }

  onSnap(): void {
    if(!this.isSnap){
      this.faceSnap.addSnaps();
      this.isSnap = true;
      this.snapButton = 'Oops unsnap';
    }
    else{
      this.isSnap = false;
      this.snapButton = 'Oh Snap';
      this.faceSnap.removeSnaps();
    }

  }



}
