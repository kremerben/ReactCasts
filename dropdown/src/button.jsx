var React= require('react');

//define a class
var Button = React.createClass({


    render() {
        return <button onClick={this.props.whenClicked} className={"btn "+ this.props.className} type="button">
            {this.props.title}
             <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
    }
});

module.exports = Button;



// react event types
// http://facebook.github.io/react/docs/events.html
