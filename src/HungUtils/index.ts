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
const g: object = { a: 1, b: 2 };
const h: { a: number; b: number } = { a: 1, b: 2 };
const i: { a: number; b: number }[] = [{ a: 1, b: 2 }];
const j: { a: number; b: number }[] = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
];
