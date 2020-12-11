export default class Info extends React.Component {
    constructor() {
        super();

        this.state = {
            peopleOnline: 0,
        };

        window.io.on('update-players', (m) => {
            this.setState({
                peopleOnline: m,
            });
        });
    }

    render() {
        let word;

        this.state.peopleOnline > 1 ? (word = 'people') : (word = 'person');

        return (
            <div id="info">
                <p
                    style={{
                        whiteSpace: 'nowrap',
                    }}
                >
                    {this.state.peopleOnline} {word} online
                    {'  •  '.replace(/ /g, '\u00A0\u00A0')}
                    <img
                        src="GitHubLogo.png"
                        style={{
                            position: 'relative',
                            top: '3px',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                    <a
                        href="https://github.com/giilbert/socket.io-chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            color: 'rgb(88, 166, 255)'
                        }}
                    >
                        {' '}
                        source code on GitHub
                    </a>
                </p>
            </div>
        );
    }
}
