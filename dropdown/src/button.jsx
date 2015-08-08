var React= require('react');



//define a class
module.exports = React.createClass({

    // added to dropdown.jsx
    // handleClick() {
    //     alert('buttonclick');
    // },



    render() {
        return <div>
        <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
            {this.props.title}
            <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
        </div>
    }
});
