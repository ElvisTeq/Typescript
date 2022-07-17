class Todo {
  // Difine value Types
  id: string;
  text: string;

  // Construct & Define Value type
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
