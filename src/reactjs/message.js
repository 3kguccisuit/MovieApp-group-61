import React from 'react';
import { useState, useEffect } from 'react';
// import '../views/styles.css';
import '../views/SearchMovieView.css';

const Message = ({ message, type, timeout }) => {
    const [visible, setVisible] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, timeout);
        return () => clearTimeout(timer);
    }, [message]);

    if (!visible)
        return;

    return (
        <div>
            {message && (
                <div className={`message-container-${type}`}>
                    <div className={`message-${type}`}>{message}</div>
                </div>
            )}
        </div>
    );
};

export default Message;
