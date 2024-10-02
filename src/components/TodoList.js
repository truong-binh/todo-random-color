import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null); // Thêm biến để lưu chỉ số việc cần sửa

    const addTask = () => {
        if (editIndex !== null) {
            const newTasks = [...tasks];
            newTasks[editIndex].text = task; // Cập nhật việc cần sửa
            setTasks(newTasks);
            setEditIndex(null); // Đặt lại chỉ số sửa
        } else {
            setTasks([...tasks, { text: task, completed: false }]);
        }
        setTask('');
    };

    const editTask = (index) => {
        setTask(tasks[index].text); // Đặt giá trị ô nhập để sửa
        setEditIndex(index); // Lưu chỉ số việc cần sửa
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>{editIndex !== null ? 'Sửa' : 'Thêm'}</button> {/* Thay đổi nút */}
            <ul>
                {tasks.map((t, index) => (
                    <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                        <input type="checkbox" checked={t.completed} onChange={() => toggleTask(index)} />
                        {t.text}
                        <button onClick={() => editTask(index)}>Sửa</button> {/* Nút sửa */}
                        <button onClick={() => deleteTask(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
