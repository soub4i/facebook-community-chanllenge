import React from 'react';

import logo from './logo.svg';

import { useState, useEffect } from 'react'
export default function App() {

    const [comments, setComment] = useState([])

    useEffect(() => {

        const handleMessage = (e) => {
            setComment(e.data);
        }

        if (window.addEventListener) {
            window.addEventListener('message', handleMessage, false);
        } else if (window.attachEvent) { // ie8
            window.attachEvent('onmessage', handleMessage);
        }

    }, []);
    return <div>
        <img width="90" src={logo} alt="Logo" />
        <h4>Visitors comments</h4>
        <div>
            {comments.map((comment, index) => {
                return <div key={index} style={{ margin: '2px', borderBottom: '1px solid gray' }} >
                    <h4>{comment.name}</h4>
                    <p>
                        {comment.message}
                    </p>
                </div>
            })}

        </div>
    </div>

}

