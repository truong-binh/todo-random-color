import React, { useState, useEffect, useCallback } from 'react';

function RandomColor() {
    const [color, setColor] = useState('#000000');
    const [history, setHistory] = useState([]);
    const [isAutoChanging, setIsAutoChanging] = useState(false);

    const generateRandomColor = useCallback(() => {
        const newColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        setColor(newColor);
        setHistory(prevHistory => [...prevHistory, newColor]);
    }, []);

    const toggleAutoChange = () => {
        setIsAutoChanging(prev => !prev);
    };

    useEffect(() => {
        let interval;
        if (isAutoChanging) {
            interval = setInterval(generateRandomColor, 1000);
        }
        return () => clearInterval(interval);
    }, [isAutoChanging, generateRandomColor]);

    const clearHistory = () => {
        setHistory([]);
        setColor('#000000');
    };

    const removeCurrentColor = () => {
        if (history.length > 0) {
            const newHistory = [...history];
            newHistory.pop(); // Xóa màu hiện tại khỏi lịch sử
            setHistory(newHistory);
            // Đặt màu hiện tại thành màu gần nhất trong lịch sử, hoặc màu đen nếu lịch sử trống
            setColor(newHistory.length > 0 ? newHistory[newHistory.length - 1] : '#000000');
        }
    };

    return (
        <div>
            <h2>Màu ngẫu nhiên</h2>
            <div className="color-box" style={{backgroundColor: color}}></div>
            <p>Mã màu hiện tại: {color}</p>
            <button onClick={generateRandomColor}>Đổi màu ngay</button>
            <button onClick={toggleAutoChange}>
                {isAutoChanging ? 'Dừng đổi màu tự động' : 'Bắt đầu đổi màu tự động'}
            </button>
            <button onClick={removeCurrentColor}>Xóa màu hiện tại</button>
            <h3>Lịch sử màu</h3>
            <div className="color-history">
                {history.map((c, index) => (
                    <div key={index} className="history-item">
                        <div style={{backgroundColor: c, width: '20px', height: '20px'}}></div>
                        <span>{c}</span>
                    </div>
                ))}
            </div>
            <button onClick={clearHistory}>Xóa tất cả lịch sử</button>
        </div>
    );
}

export default RandomColor;
