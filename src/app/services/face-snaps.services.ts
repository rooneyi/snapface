import { Injectable } from '@angular/core';
import FaceSnap from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps:FaceSnap[]=[
      new FaceSnap(
      "Rooney aprenant angular!",
     " An app for taking selfies.",
     19,
      new Date(),
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

    ),
    new FaceSnap(
      "un bon code!",
     " An app for taking selfies.",
     189,
      new Date(),
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

    ),
    new FaceSnap(
      "Rooney aprenant angular!",
     " An app for taking selfies.",
     6,
      new Date(),
      "data:image/jpeg;base64,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",

    )
  ];
  getFaceSnaps():FaceSnap[]{
      return [...this.faceSnaps]
  }

  getFaceSnapById(faceSnapId:string):FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if(!faceSnap){
      throw new Error("Face snap not found");
    }
    return faceSnap;
  }

  snapFaceSnaps(faceSnapId:string,snapType:SnapType){
    const faceSnap = this.getFaceSnapById(faceSnapId);

    if(!faceSnap){
      throw new Error("Face snap not found");
    }
    faceSnap.snap(snapType);
  }
}
