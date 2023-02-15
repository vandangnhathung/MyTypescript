export interface Product {
  name: string;
  brand: string;
  color: string;
  price: number;
}

//extends interface
//Definition: We can extend interface to use the properties of the parent interface (Inheritance)

export interface ProductNewFeature extends Product {
  speed: number;
}

export interface ICard {
  title: string;
  description: string;
  image: string;
  link: string;
}
