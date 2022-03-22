import React, { useCallback, useState} from 'react'
import TodoData from './TodoData';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from 'react-router-dom';
import './todo.css';
function Todo({ theme  }) {
  // using useCallback is optional
  const style = {
    background: theme ? '#00005' : '#fff',
    color: theme ? '#fff' : '#000',
  };
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  const [todo, settodo] = useState({
    title: "",
    description: "",
    completed: false,
    createAt: "",
    finishedAt: "",
  });
  const [todoarray, settodoarray] = useState([]);
  const deleteTodo = (index) => {
    const newtodoarray = [...todoarray];
    newtodoarray.splice(index, 1);
    settodoarray(newtodoarray);
  };

  const editHandler = (e) => {
    const { name, value } = e.target;
    settodo({
      ...todo,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    todoarray.push(todo);
    settodoarray(todoarray);
    settodo({
      title: "",
      description: "",
      completed: false,
      createAt: "",
      finishedAt: "",
    });
  };

  return (
    <div className="todo">
      <form style={style} onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={editHandler}
        />
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={editHandler}
        />
        <input
          type="text"
          name="createAt"
          value={todo.createAt}
          onChange={editHandler}
        />
        <input
          type="text"
          name="finishedAt"
          value={todo.finishedAt}
          onChange={editHandler}
        />
        <button type="submit">creating</button>
      </form>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable>
          {(provided, _) => (
            <div
              ref={provided.innerRef}
              droppableId="droppable-1"
              {...provided.droppableProps}
            >
              {todoarray.map((todo) => (
                <Draggable
                  key={todo.title}
                  draggableId={"draggable-" + todo.title}
                  index={todoarray.indexOf(todo)}
                >
                  {(provided, snapshot) => (
                    <div
                      className="showingdata"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging
                          ? "0px 0px 10px #000"
                          : "none",
                      }}
                    >
                      <Link rel="stylesheet" to={todo.title}>
                        {todo.title}
                      </Link>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <TodoData todos={todoarray} deleteTodo={deleteTodo} />
    </div>
  );
}


export default Todo