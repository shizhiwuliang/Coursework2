import React from 'react';

// Avatar组件，接受person和size作为props
function Avatar({ person, size = 100 }) {
    return (
        <img
            src={person.avatarUrl}
            alt={person.name}
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
}

// Card组件，它将children作为内置prop
function Card({ children }) {
    return <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{children}</div>;
}

// App组件，我们的主组件
function App() {
    const person = {
        name: 'Jane Doe',
        avatarUrl: 'https://placekitten.com/g/200/200' // 使用一个占位图像URL
    };

    return (
        <div>
            <h1>Welcome to React Props Example</h1>
            <Card>
                {/* 在这里，我们将Avatar组件作为Card的children传递 */}
                <Avatar person={person} size={150} />
            </Card>
        </div>
    );
}

export default App;