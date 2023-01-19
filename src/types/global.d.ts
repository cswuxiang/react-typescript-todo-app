type Todo = {
  text: string;
  complete: boolean;
  key?: string;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
