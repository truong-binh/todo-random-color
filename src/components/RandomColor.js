import React, { useState } from 'react';

function RandomColor() {
    const [color, setColor] = useState('#ffffff');
    const [history, setHistory] = useState([]);

    const changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(newColor);
        setHistory([...history, newColor]);
    };

    const clearHistory = () => {
        setHistory([]);
        setColor('#ffffff'); // Đặt lại màu về mặc định khi xóa toàn bộ lịch sử
    };

    const deleteColor = (index) => {
        const newHistory = history.filter((_, i) => i !== index);
        setHistory(newHistory);
        if (newHistory.length > 0) {
            setColor(newHistory[newHistory.length - 1]); // Thay đổi ô màu theo màu cũ mới nhất
        } else {
            setColor('#ffffff'); // Đặt lại màu về mặc định nếu không còn màu nào
        }
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Random Color</h2>
            <div style={{ width: '100px', height: '100px', backgroundColor: color, marginBottom: '20px' }}></div> {/* Ô chứa màu */}
            <button onClick={changeColor}>Thay đổi màu</button>
            <button onClick={clearHistory}>Xóa toàn bộ lịch sử</button>
            <div>
                <h3>Lịch sử màu sắc</h3>
                {history.map((h, index) => (
                    <div key={index} style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                        {h} {/* Hiển thị tên màu */}
                        <button onClick={() => deleteColor(index)} style={{ marginLeft: '10px' }}>Xóa</button> {/* Nút xóa từng màu */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RandomColor;
