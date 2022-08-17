export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CreateTodoRequest {
  todo: string;
}

export interface UpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}
