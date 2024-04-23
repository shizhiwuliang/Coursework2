function getOrientation() {
    return window.innerHeight > window.innerWidth;
}

class App extends Component {
    state = {
        isPortrait: getOrientation(),
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ isPortrait: getOrientation() });
    };

    render() {
        const { isPortrait } = this.state; // 从state中获取isPortrait

        return (
            //... 你的其他代码
            <h1>当前屏幕方向是：{isPortrait ? '竖屏' : '横屏'}</h1>
            //... 你的其他代码
        );
    }
}

export default App;