//Function overloading
//Definition: Function overloading is a way create multiple functions with the same name but have differences in parameters (Not common)
// const total = (a: number, b: number): number => {};
// const total = (a: string, b: string): string => {};
function total(a: number, b: number): number;
function total(a: string, b: string): string;

function total(a: any, b: any) {
  return a + b;
}

total(5, 7);
total("a", "b");
