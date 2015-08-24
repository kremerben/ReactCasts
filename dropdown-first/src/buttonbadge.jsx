var React= require('react');
var classNames = require('classnames');



//define a class
var ButtonBadge = React.createClass({

    // added to dropdown.jsx
    // handleClick() {
    //     alert('buttonclick');
    // },




    render() {
        var _className = this.props.className;
        var ButtonBadgeClasses = classNames({
            'btn btn-default': true,
            _className: true
        });
        return <div>
        <button onClick={this.props.whenClicked}
                className={ButtonBadgeClasses}
                type="button">
            {this.props.title}
            <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
        </div>
    }
});


module.exports = ButtonBadge;
