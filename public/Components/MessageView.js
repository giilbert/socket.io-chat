var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageView = function (_React$Component) {
    _inherits(MessageView, _React$Component);

    function MessageView() {
        _classCallCheck(this, MessageView);

        var _this = _possibleConstructorReturn(this, (MessageView.__proto__ || Object.getPrototypeOf(MessageView)).call(this));

        _this.state = {
            messages: [{
                author: 'System',
                content: 'loading existing messages',
                time: 1
            }]
        };

        var existingMessages = [];
        fetch(window.SERVER_URL + '/existing/messages').then(function (res) {
            res.json().then(function (json) {
                existingMessages = json.data.map(function (v) {
                    return {
                        author: v.a,
                        content: v.c,
                        time: v.t
                    };
                });

                _this.setState({
                    messages: existingMessages
                });
            });
        });

        window.io.on('message', function (msg) {
            _this.setState({
                messages: _this.state.messages.concat(msg)
            });

            var div = document.getElementById('message-view');
            div.scrollTop = div.scrollHeight;
        });

        return _this;
    }

    _createClass(MessageView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'message-view' },
                React.createElement(
                    'ul',
                    null,
                    this.state.messages.map(function (v) {
                        return React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'h3',
                                null,
                                v.author,
                                React.createElement(
                                    'span',
                                    { style: {
                                            fontSize: '10px',
                                            fontColor: '#222',
                                            position: 'relative',
                                            left: '10px'
                                        } },
                                    new Date(v.time).toLocaleString('en-us')
                                )
                            ),
                            React.createElement('p', {
                                dangerouslySetInnerHTML: { __html: v.content }
                            })
                        );
                    })
                ),
                React.createElement('div', { id: 'bottom' })
            );
        }
    }]);

    return MessageView;
}(React.Component);

export default MessageView;