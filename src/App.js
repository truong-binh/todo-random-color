import React from 'react';
import TodoList from './components/TodoList';
import ImageSearch from './components/ImageSearch';
import RandomColor from './components/RandomColor';
import './App.css';  // Đảm bảo đường dẫn đúng tới file CSS

function App() {
    return (
        <div>
            <TodoList />
            <ImageSearch />
            <RandomColor />
        </div>
    );
}

export default App;
