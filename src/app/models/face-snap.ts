import { SnapType } from "./snap-type.type";

export default class FaceSnap {

  location?: String;
  id: string;
  constructor(public title:string,
    public description:string,
    public snaps:number,
    public createdAt:Date,
    public imageUrl:string,
  ) {
    this.id = crypto.randomUUID().substring(0,8);
    console.log(this)
}

  addSnaps(): void {
    this.snaps++;

  }

  removeSnaps(): void {
    this.snaps--;

  }
  snap(snapType:SnapType){
    if (snapType==='snap'){
      this.addSnaps();
    }else if(snapType==='unsnap'){
        this.removeSnaps();
      }
  }

  setLocation(location:string): void {
    this.location = location;
  }

  withLocation(location:string){
    this.setLocation(location);
    return this;
  }
}
