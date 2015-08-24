    var options = {

        thumbnailData: [
            {
            title: 'Inbox',
            number: 12,
            imageUrl: 'http://www.fillmurray.com/500/500',
            description: 'Learn React',
            header: 'Thumbnail Label Text!'
            },
            {
            title: 'Inbox',
            number: 23,
            imageUrl: 'http://www.fillmurray.com/600/600',
            description: 'Learn Gulp',
            header: 'Thumbnail Label Text!'
            },
            {
            title: 'Inbox',
            number: 34,
            imageUrl: 'http://www.fillmurray.com/400/400',
            description: 'Hello world',
            header: 'Thumbnail Label Text!'
            },
            {
            title: 'Inbox',
            number: 45,
            imageUrl: 'http://www.fillmurray.com/555/555',
            description: 'Hello world',
            header: 'Thumbnail Label Text!'
            }]
    };



    //react, make instance of this class
    var element = React.createElement(ThumbnailList, options);


    //react, after render => place in document.body tag
    // React.render(<Badge />, document.body);
    React.render(element, document.querySelector('.target'));

//define a class
var Badge = React.createClass({displayName: "Badge",


    render() {
        return React.createElement("div", null, 
        React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
        )
    }
});

var Thumbnail = require('thumbnail');


var ThumbnailList = React.createClass({displayName: "ThumbnailList",

    render() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });
        return React.createElement("div", null, list)

    }
});

var Badge = require('badge');

var Thumbnail = React.createClass({displayName: "Thumbnail",

    render() {

       return  React.createElement("div", {className: "col-sm-6 col-md-4"}, 
            React.createElement("div", {className: "thumbnail"}, 
          React.createElement("img", {src: this.props.imageUrl}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
                React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
          )
          )
        )
    }
});
