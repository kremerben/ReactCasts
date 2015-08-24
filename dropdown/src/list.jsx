var React= require('react');


var List = React.createClass({

    render() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return <Thumbnail {...thumbnailProps} />
        });
        return <li>{list}</li>

    }
});

module.exports = List;
