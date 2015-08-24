var React = require('react');
var Dropdown = require('./dropdown');


var options = {
title: "Choose a Dessert!",
items: ['apple pie', 'cherry pie', 'pecan pie']

};



//react, make instance of this class
var element = React.createElement(Dropdown, options);


//react, after render => place in document.body tag
// React.render(<Badge />, document.body);
React.render(element, document.querySelector('.target'));
