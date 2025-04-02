import React, { useState } from 'react';

const InputChange = () => {
    const [text, setText] = useState('');

    function handleInputChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={handleInputChange} 
            />
            <p>Input text: {text}</p>
        </div>
    );
};

export default InputChange;
