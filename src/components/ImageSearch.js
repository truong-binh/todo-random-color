import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const searchImages = async () => {
        const API_KEY = '46177377-a020a2fd0232397999dea6e91'; // Thay YOUR_API_KEY bằng API key của bạn
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`);
        setImages(response.data.hits.map(hit => hit.webformatURL)); // Lấy URL ảnh
    };

    return (
        <div>
            <h2>Tìm kiếm ảnh</h2>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchImages}>Tìm kiếm</button>
            <div>
                {images.map((img, index) => (
                    <img key={index} src={img} alt="search" style={{ width: '200px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
}

export default ImageSearch;
