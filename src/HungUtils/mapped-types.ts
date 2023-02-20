//Mapping modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutablee<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccountt = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccountt = CreateMutablee<LockedAccountt>;
// Removes 'optional' attributes from a type's properties
type Concretee<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUserr = {
  id: string;
  name?: string;
  age?: number;
};

type Userr = Concretee<MaybeUserr>;
// Key Remapping via as
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties]
// }
type Getterss<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPersonn = Getterss<Person>;
//Another one
type OnChange<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    val: Type[Property]
  ) => Type[Property];
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Focus`]?: (
    val: Type[Property]
  ) => Type[Property];
};

type Employees = {
  name: string;
  age: number;
  phone: string;
};

type LazyEmployees = OnChange<Employees>;
// Remove the 'kind' property
type RemoveKindFieldd<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCirclee = RemoveKindFieldd<Circle>;

//You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:
type EventConfigg<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEventt = { kind: "squaree"; x: number; y: number };
type CircleEventt = { kind: "circle"; radius: number };

type Configg = EventConfigg<SquareEventt | CircleEventt>;
