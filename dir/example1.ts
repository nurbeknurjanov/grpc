interface Todo {
    title: string;
}

/*const todo: Partial<Todo> = {
    title: "Delete inactive users",
};*/
const todo: Todo = {
    title: "Delete inactive users",
};

todo.title = "Hello";
console.log(todo);
