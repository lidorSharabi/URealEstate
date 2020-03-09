export class Asset {
    constructor(
      public id?: number,
      public typeOfPurchase?: string, //קנייה/מכירה
      public city?: string,
      public neighborhood?: string,
      public street?: string,
      public price?: number,
      public typeOfAssets?: string, //דירה/דירתגן/דופלקס/פנטהואס/בית פרטי/מגרש/מסחרי
      public numOfRooms?: number,
      public balcony?: boolean,
      public balconyMeters?: number,
      public floor?: number,
      public assetsMeters?: number,
      public parking?: boolean,
      public parkingDesc?: string,
      public warehouse?: string,
      public dateOfEntry?: string,
      public renovated?: string,
      public mamd?: string,
      public handicapAccessible?: string,
      public furnished?: string,
      public assetsImages?: string[]
    ){}
  }