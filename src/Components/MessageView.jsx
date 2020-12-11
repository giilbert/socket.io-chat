export default class MessageView extends React.Component {

    constructor() {
        super();

        this.state = {
            messages: [
                {
                    author: 'System',
                    content: 'loading existing messages',
                    time: 1
                }
            ]
        }

        let existingMessages = [];
        fetch(window.SERVER_URL + '/existing/messages')
        .then(res => {
            res.json()
            .then(json => {
                existingMessages = json.data.map(v => {
                    return {
                        author: v.a,
                        content: v.c,
                        time: v.t 
                    }
                })

                this.setState({
                    messages: existingMessages
                })
            })
        })

        window.io.on('message', msg => {
            this.setState({
                messages: this.state.messages.concat(msg)
            })

            let div = document.getElementById('message-view');
            div.scrollTop = div.scrollHeight;
        })

        window.io.on('X-connect', alias => {
            console.log(alias)
            this.setState({
                messages: this.state.messages.concat({
                    author: 'System',
                    content: `🚪​➡️️​ ${alias} has connected`,
                    time: Date.now()
                })
            })
        })

    }

    render() {
        return (
            <div id="message-view">
                <ul>
                    {
                        this.state.messages.map(v => {
                            return (
                            <li>
                                <h3>
                                    {v.author}

                                    <span style={{
                                        fontSize: '10px',
                                        fontColor: '#222',
                                        position: 'relative',
                                        left: '10px'
                                    }}>
                                        {new Date(v.time).toLocaleString('en-us')}
                                    </span>
                                </h3>
                                <p 
                                    dangerouslySetInnerHTML={{__html: v.content}}
                                />
                            </li>
                            )
                        })
                    }
                </ul>
                <div id="bottom"></div>
            </div>
        )
    }
}