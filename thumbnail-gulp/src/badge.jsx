var React= require('react');

//define a class
var Badge = React.createClass({


    render() {
        return <div>
        <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
        </div>
    }
});

module.exports = Badge;
