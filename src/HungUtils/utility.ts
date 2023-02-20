interface Todo {
  title: string;
  description: string;
  date: string;
}

// interface NewTodoo {
//   title?: string;
//   description?: string;
// }

function updateTodoo(todo: Todo, newTodo: Partial<Todo>) {
  return {
    ...todo,
    ...newTodo,
  };
}

console.log(
  updateTodoo(
    {
      title: "learn typescript",
      description: "Learn typescript in 6 months",
      date: "25/08/2022",
    },
    {}
  )
);

//Required<type>: This one will make all of properties in interface into required properties instead of optional properties
interface Props {
  isActive?: boolean;
  color?: string;
}

const compC: Props = {};
const compD: Required<Props> = {
  isActive: true,
  color: "red",
};

//Readonly<T>: It's used to prevent another developer update a specific interface.
interface Book {
  title: string;
}

const lifeBook: Book = {
  title: "Cuoc song",
};

const gameBook: Readonly<Book> = {
  title: "Game of thrones",
};

//Record<Keys,Type> (Used commonly)
interface CatInfo {
  age: number;
  breed: string;
}

type CatNamee = "miffy" | "boris" | "mordred";

const catss: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

//Pick<Type, Keys>
interface Todoo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPrevieww = Pick<Todoo, "title" | "completed">;

const todoo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;

//Omit<Type, Keys>
interface TodoOmitt {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoOmittPreview = Omit<TodoOmitt, "description" | "createdAt">;

const todoOmitt: TodoOmittPreview = {
  title: "Clean room",
  completed: false,
};

todoOmitt;

//Exclude<UnionType, ExcludedMembers>
type T01 = Exclude<"a" | "b" | "c", "a">;

// type T0 = "b" | "c"
