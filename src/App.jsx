import MessageInput from './Components/MessageInput.js';
import MessageView from './Components/MessageView.js';
import ChooseUsername from './Components/ChooseUsername.js';
import Info from './Components/Info.js';

window.SERVER_URL = ''; // leave blank for current URL, no trailing slash

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: localStorage.getItem('username')
        }

        window.currentUsername = localStorage.getItem('username')

        window.io = io(window.SERVER_URL);

        if (window.currentUsername) {
            window.io.emit('X-connect', window.currentUsername);
        }
    }
    
    render() {

        let chooseUsername;
        if (this.state.username == null) {
            chooseUsername = <ChooseUsername />
        }

        return (
            <div id="root">
                {chooseUsername}
                <MessageView />
                <MessageInput />
                <Info />
            </div>
        )
    }
}