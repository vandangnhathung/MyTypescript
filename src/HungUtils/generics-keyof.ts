function getDeviceKeys<A, B extends keyof A>(items: A[], dataKey: B): A[B][] {
  return items.map((item) => item[dataKey]);
}

const brands = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung", price: 500 },
];

console.log(getDeviceKeys(brands, "name"));
