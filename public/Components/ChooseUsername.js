var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChooseUsername = function (_React$Component) {
    _inherits(ChooseUsername, _React$Component);

    function ChooseUsername() {
        _classCallCheck(this, ChooseUsername);

        var _this = _possibleConstructorReturn(this, (ChooseUsername.__proto__ || Object.getPrototypeOf(ChooseUsername)).call(this));

        _this.onChange = _this.onChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);

        _this.state = {
            currentAlias: 'unnamed'
        };
        return _this;
    }

    _createClass(ChooseUsername, [{
        key: 'onChange',
        value: function onChange(e) {
            this.setState({
                currentAlias: e.target.value
            });
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
            window.currentUsername = this.state.currentAlias;
            localStorage.setItem('username', this.state.currentAlias);
            this.forceUpdate();
        }
    }, {
        key: 'render',
        value: function render() {

            if (localStorage.getItem('username') != null) {
                return null;
            }

            return React.createElement(
                'div',
                { id: 'choose-username' },
                React.createElement(
                    'div',
                    { id: 'choose-username-bg' },
                    React.createElement(
                        'form',
                        { onSubmit: this.onSubmit },
                        React.createElement(
                            'label',
                            { 'for': 'alias' },
                            'enter an alias: '
                        ),
                        React.createElement('input', {
                            name: 'alias',
                            placeholder: 'bob',
                            onChange: this.onChange
                        }),
                        React.createElement('br', null),
                        ' ',
                        React.createElement('br', null),
                        React.createElement(
                            'button',
                            null,
                            'go!'
                        )
                    )
                )
            );
        }
    }]);

    return ChooseUsername;
}(React.Component);

export default ChooseUsername;