import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";

export default async function Test() {
  const todos = [
    {
      id: 1,
      text: "test",
    },
  ];

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul>
    </main>
  );
}
