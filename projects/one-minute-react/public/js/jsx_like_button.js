'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        // Using JSX approach; require:
        // 1)   Babel; that is to say hosting HTML file needs to add: 
        // <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        // 2)   Specify the type of script tag to be "text/babel"
        // <script src="js/jsx_like_button.js" type="text/babel"></script>
        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);