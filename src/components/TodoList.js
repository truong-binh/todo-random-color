import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if (editIndex !== null) {
            if (editIndex < tasks.length) {
                const newTasks = [...tasks];
                newTasks[editIndex].text = task;
                setTasks(newTasks);
            }
            setEditIndex(null);
        } else {
            setTasks([...tasks, { text: task, completed: false }]);
        }
        setTask('');
    };

    const editTask = (index) => {
        if (index < tasks.length) {
            setTask(tasks[index].text);
            setEditIndex(index);
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        if (editIndex === index) {
            setEditIndex(null);
            setTask('');
        } else if (editIndex !== null && index < editIndex) {
            setEditIndex(editIndex - 1);
        }
    };

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <input 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button onClick={addTask}>{editIndex !== null ? 'Sửa' : 'Thêm'}</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                        <input 
                            type="checkbox" 
                            checked={t.completed} 
                            onChange={() => toggleTask(index)} 
                        />
                        {t.text}
                        <button onClick={() => editTask(index)}>Sửa</button>
                        <button onClick={() => deleteTask(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
