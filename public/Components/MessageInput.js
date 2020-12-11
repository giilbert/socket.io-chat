var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageInput = function (_React$Component) {
    _inherits(MessageInput, _React$Component);

    function MessageInput() {
        _classCallCheck(this, MessageInput);

        var _this = _possibleConstructorReturn(this, (MessageInput.__proto__ || Object.getPrototypeOf(MessageInput)).call(this));

        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onChange = _this.onChange.bind(_this);

        _this.state = {
            currentMessage: ''
        };
        return _this;
    }

    _createClass(MessageInput, [{
        key: 'onChange',
        value: function onChange(e) {
            this.setState({
                currentMessage: e.target.value
            });
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            window.currentUsername = localStorage.getItem('username');

            e.preventDefault();
            this.setState({
                currentMessage: ''
            });

            var content = this.state.currentMessage;

            if (content == '') return;

            window.io.emit('message', {
                author: window.currentUsername,
                content: content,
                time: Date.now()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'message-input' },
                React.createElement('br', null),
                React.createElement(
                    'form',
                    {
                        onSubmit: this.onSubmit,
                        onChange: this.onChange
                    },
                    React.createElement('input', {
                        value: this.state.currentMessage,
                        autoComplete: 'off',
                        placeholder: 'chatting as ' + window.currentUsername + '... '
                    })
                )
            );
        }
    }]);

    return MessageInput;
}(React.Component);

export default MessageInput;