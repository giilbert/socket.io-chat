export default class MessageInput extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            currentMessage: ''
        }
    }

    onChange(e) {
        this.setState({
            currentMessage: e.target.value
        })
    }

    onSubmit(e) {
        window.currentUsername = localStorage.getItem('username');

        e.preventDefault();
        this.setState({
            currentMessage: ''
        })

        let content = this.state.currentMessage;
        
        if (content == '') return;

        window.io.emit('message', {
            author: window.currentUsername,
            content: content,
            time: Date.now()
        })
    }

    render() {
        return (
            <div id="message-input">
                <br />

                <form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                >
                    <input
                        value={this.state.currentMessage}
                        autoComplete="off"
                        placeholder={'chatting as ' +
                            window.currentUsername +
                            '... '
                        }
                    />
                </form>
            </div>
        )
    }
}