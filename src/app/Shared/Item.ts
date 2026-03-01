export class Item {

    constructor(
      public title: string,
      public id: string | number = crypto.randomUUID() // ערך דיפולטיבי
    ) {}
  
  }