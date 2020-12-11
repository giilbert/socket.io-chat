var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
    _inherits(Info, _React$Component);

    function Info() {
        _classCallCheck(this, Info);

        var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this));

        _this.state = {
            peopleOnline: 0
        };

        window.io.on('update-players', function (m) {
            _this.setState({
                peopleOnline: m
            });
        });
        return _this;
    }

    _createClass(Info, [{
        key: 'render',
        value: function render() {
            var word = void 0;

            this.state.peopleOnline > 1 ? word = 'people' : word = 'person';

            return React.createElement(
                'div',
                { id: 'info' },
                React.createElement(
                    'p',
                    {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    this.state.peopleOnline,
                    ' ',
                    word,
                    ' online',
                    '  •  '.replace(/ /g, '\xA0\xA0'),
                    React.createElement('img', {
                        src: 'GitHubLogo.png',
                        style: {
                            position: 'relative',
                            top: '3px',
                            width: '20px',
                            height: '20px'
                        }
                    }),
                    React.createElement(
                        'a',
                        {
                            href: 'https://github.com/giilbert/socket.io-chat',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            style: {
                                textDecoration: 'none',
                                color: 'rgb(88, 166, 255)'
                            }
                        },
                        ' ',
                        'source code on GitHub'
                    )
                )
            );
        }
    }]);

    return Info;
}(React.Component);

export default Info;