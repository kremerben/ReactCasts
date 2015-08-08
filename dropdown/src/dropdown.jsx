// show button and list
// will know when to show the list when user clicks on button

var React = require('react');
var Buttoned = require('./button');
// var List = require('./list');



module.exports = React.createClass({

    handleClick() {
        alert('buttonclick');
    },


render() {
    return <div className="dropdown">
      <Buttoned whenClicked={this.handleClick} className='btn-default' title={this.props.title} subtitleClassName="caret" />
    </div>
}


});
