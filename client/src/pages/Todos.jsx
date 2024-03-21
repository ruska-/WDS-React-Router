import { useLoaderData } from "react-router-dom";

export function Todos() {
  const todosArray = useLoaderData();
  console.log(todosArray);
  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {todosArray.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : ""}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
