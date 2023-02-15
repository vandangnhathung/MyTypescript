export function total(a: number, b: number) {
  return a + b;
}
total(5, 2);
//type assignment
const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: any = 5;
const e: number[] = [1, 2, 3];
const f: any[] = [1, true, "a", false];
const g: object = { a: 1, b: 2 }; //This is type of object we dont use it in real project so it is not recommended
const h: { a: number; b: number } = { a: 1, b: 2 };
const i: { a: number; b: number }[] = [{ a: 1, b: 2 }];
const j: { a: number; b: number }[] = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
];
//Tuple
//Definition: Tuple already have fixed number of elements and fixed type of elements and we can't add more elements or change the order of elements
const k: [string, number, { a: number; b: number }] = [
  "hello",
  1,
  { a: 1, b: 2 },
];
//Enum
//Definition: Enum is a special class that represents a group of constants
//Any
//Definition: Any is a type that can be anything (Not recommended)
//Union
//Definition: Union is a type that can be one of the types
//Literal
//Definition: Literal is a type that can be only one of the values
//=> It's same as union because literal has fixed values
//Void
//Definition: void is a type that can be only undefined or null
//Function
//Definition: function is a type that can be only function
export function testNumber(a: number): number {
  return a * 10;
}

//Unknown
//Definition: unknown is a type that can be anything but we can't assign it to any other type
//Never
//Definition: never is a type that can be only never (More common in error handling)

//Interface (Very important)
//Definition: When we use the beneath code, we can see that we have to write the same code for the same type of object in different places, so we can use interface to solve this problem
//We can declare interface in the same name of each other and they'll merge variables together
//Assertion
//Definition: Assertion is a way to merge two interface together and create new interface which have properties of both interfaces
