import React, { useState } from 'react';
import Todo from './Todo';
import style from "./style.module.css";

const TodoPage = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const changeHandler = (event) => {
        setNewTask(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const task = {
            id: todoList.length === 0
                ? 1
                : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        }

        setTodoList([...todoList, task]);
    }

    return (
        <div className={style.App}>
            <div className={style.section1}>
                <h1 className={style.h}>To Do List</h1>
                <form className={style.form}>
                    <label className={style.label}>What plans do you have for today?</label>
                    <input className={style.input} placeholder="Write here what you want to do" type="text" value={newTask} onChange={changeHandler} ></input>
                    <button className={style.submit} onClick={submitHandler}>Add Task</button>
                </form>
            </div>
            <div className='list'>
                <Todo todoData={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    );
};

export default TodoPage;