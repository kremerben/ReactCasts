var React= require('react');

//define a class
var Button = React.createClass({


    render() {
        return <div>
        <button className="btn btn-primary" type="button">
            {this.props.title} <span className="button">{this.props.number}</span>
        </button>
        </div>
    }
});

module.exports = Button;
