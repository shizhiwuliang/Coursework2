import React from 'react';

// 定义一个简单的组件，演示最佳实践
class BestPractices extends React.Component {
    constructor(props) {
        super(props);
        // 在构造函数中初始化状态
        this.state = {
            clicked: false
        };
    }

    // 使用箭头函数，可以避免函数内部的this指向问题
    handleClick = () => {
        // 更新状态，以便重新渲染组件
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    // 阻止默认行为和冒泡
    handleFormSubmit = (e) => {
        e.preventDefault(); // 阻止表单提交的默认行为
        e.stopPropagation(); // 阻止事件冒泡
        // 可以在这里添加表单提交的逻辑
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.clicked ? 'Clicked!' : 'Click me!'}
                </button>
                <form onSubmit={this.handleFormSubmit}>
                    {/* 输入表单项... */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default BestPractices;
