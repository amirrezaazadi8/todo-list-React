import React, { useCallback } from 'react';
import done from "../icons/icons8-done.svg";
import remove from "../icons/icons8-remove-30.png";
import style from "./style.module.css";

const Todo = ({ todoData, setTodoList }) => {

    const removeHandler = useCallback((id) => {
        setTodoList(todoData.filter((task) => task.id !== id));
    }, [setTodoList, todoData]);


    const doneHandler = useCallback((id) => {
        setTodoList(
            todoData.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        )
    }, [setTodoList, todoData]);


    return (
        <div className={style.mainList}>
            {
                todoData.map(item => {
                    if (item.completed) {
                        return (
                            <div className={style.completed} key={item.id}>

                                <button onClick={() => removeHandler(item.id)}>
                                    <img src={remove} alt="remove"></img>
                                </button>

                                <span>
                                    {item.taskName}
                                </span>

                                <button onClick={() => doneHandler(item.id)}>
                                    <img src={done} alt="done"></img>
                                </button>

                            </div>
                        )
                    } else {
                        return (
                            <div className={style.list} key={item.id}>

                                <button onClick={() => removeHandler(item.id)}>
                                    <img src={remove} alt="remove"></img>
                                </button>

                                <span>
                                    {item.taskName}
                                </span>

                                <button onClick={() => doneHandler(item.id)}>
                                    <img src={done} alt="done"></img>
                                </button>

                            </div>
                        )
                    }
                }
                )
            }
        </div>
    );
};

export default Todo;