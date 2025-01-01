export default class FaceSnap {

  location?: string;

  constructor(public title:string,
    public description:string,
    public snaps:number,
    public createdAt:Date,
    public imageUrl:string,
  ) {
}

  addSnaps(): void {
    this.snaps++;

  }

  removeSnaps(): void {
    this.snaps--;

  }

  setLocation(location:string): void {
    this.location = location;
  }
}
