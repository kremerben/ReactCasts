// show button and list
// will know when to show the list when user clicks on button

var React = require('react');
var ButtonBadge = require('./buttonbadge');
// var List = require('./list');

var classNames = require('classnames');


var Dropdown = React.createClass({

    handleClick() {
        alert('buttonclicker');
        this.state.visible = !this.state.visible;
    },



    render() {
        var dropdownClasses = classNames({
            // 'visible': this.state.visible,
                'visible': true
        });
        return <div className="dropdown">
            <ButtonBadge whenClicked={this.handleClick}
                className='btn-default' title={this.props.title}
                subTitleClassName="caret" />
        </div>
    }


});


module.exports = Dropdown;


// <List className={dropdownClasses} />
