export class Asset {
    constructor(
      public id?: number,
      public typeId?: number,
      public rooms?: number,
      public meters?: number,
      public floor?: number,
      public location?: string,
      public price?: number,
    ){}
  }