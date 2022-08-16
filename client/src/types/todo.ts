interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CreateTodoRequest {
  todo: string;
}

export interface CreateTodoResponse {
  data: Todo;
}

export interface GetTodosResponse {
  data: Todo[];
}

export interface UpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface UpdateTodoResponse {
  data: Todo;
}
