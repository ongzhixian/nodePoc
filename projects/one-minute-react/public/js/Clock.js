class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        // componentDidMount() method runs after the component output has been rendered to the DOM
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { 
        this.setState({ date: new Date() }); 
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      </div>
        );
    }
}

window.MyComponents = window.MyComponents || {};
window.MyComponents.Clock = Clock;