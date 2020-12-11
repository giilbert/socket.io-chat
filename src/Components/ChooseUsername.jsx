export default class ChooseUsername extends React.Component {

    constructor() {
        super()

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            currentAlias: 'unnamed'
        }
    }

    onChange(e) {
        this.setState({
            currentAlias: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        window.currentUsername = this.state.currentAlias;
        localStorage.setItem('username', this.state.currentAlias)
        this.forceUpdate();
        window.io.emit('X-connect', this.state.currentAlias);
    }

    render() {

        if (localStorage.getItem('username') != null) {
            return null;
        }

        return (
            <div id="choose-username">
                <div id="choose-username-bg">
                    <form onSubmit={this.onSubmit}>
                        <label for="alias">enter an alias: </label>
                        <input
                            name="alias"
                            placeholder="bob"
                            onChange={this.onChange}
                        />
                        <br /> <br />
                        <button>go!</button>
                    </form>
                </div>
            </div>
        )
    }
}