var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {

thumbnailData: [
    {
    title: 'Outbox',
    number: 120,
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
    title: 'Sidebox',
    number: 34,
    imageUrl: 'http://www.fillmurray.com/400/400',
    description: 'Hello world',
    header: 'Thumbnail Label Text!'
    },
    {
    title: 'Somebox',
    number: 383,
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
