export type Category = {
    [x: string]: any;
    id: number;
    name: string;
    color: string;
  }


  export type Slider = {
    [x: string]: any;
    id: number;
    url: string;
  }

  export type Product = {
    attributes: any;
    id: number;
    name: string;
    description:string;
    mrp:string;
    sellingPrice:string;
    slug:string;
    images:string;
    categories:string;
  }
  
  