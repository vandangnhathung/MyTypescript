//Intersection Types
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentify {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentify & IContact;
type Customer = IBusinessPartner & IContact;
let nhatHung: Employee = {
  id: 1,
  name: "Nhat Hung",
  email: "vandangnhathung@gmail.com",
  phone: "123456789",
};
let paul: Customer = {
  name: "Paul",
  email: "",
  credit: 100,
  phone: "123456789",
};
//Type Casting
//Type Assertion
