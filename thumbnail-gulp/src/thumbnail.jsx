var React= require('react');
var Badge = require('./badge');

var Thumbnail = React.createClass({

    render() {

       return  <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
          <img src={this.props.imageUrl} />
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
                <Badge title={this.props.title} number={this.props.number}  />
            </p>
          </div>
          </div>
        </div>
    }
});

module.exports = Thumbnail;
