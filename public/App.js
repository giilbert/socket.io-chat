var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import MessageInput from './Components/MessageInput.js';
import MessageView from './Components/MessageView.js';
import ChooseUsername from './Components/ChooseUsername.js';
import Info from './Components/Info.js';

window.SERVER_URL = ''; // leave blank for current URL, no trailing slash

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            username: localStorage.getItem('username')
        };

        window.currentUsername = localStorage.getItem('username');

        window.io = io(window.SERVER_URL);
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            var chooseUsername = void 0;
            if (this.state.username == null) {
                chooseUsername = React.createElement(ChooseUsername, null);
            }

            return React.createElement(
                'div',
                { id: 'root' },
                chooseUsername,
                React.createElement(MessageView, null),
                React.createElement(MessageInput, null),
                React.createElement(Info, null)
            );
        }
    }]);

    return App;
}(React.Component);

export default App;