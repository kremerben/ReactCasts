render: function() {
    var visible;

    if (this.state.dropdownOpen) {
        visible = "visible";
    } else {
        visible = 'hidden';
    }

    return <div class="dropdown">
  // <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
  //   Dropdown
  //   <span className="caret"></span>
  // </button>
  <Badge />
  <UnorderedList />
  // <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
  //   <li><a href="#">Action</a></li>
  //   <li><a href="#">Another action</a></li>
  //   <li><a href="#">Something else here</a></li>
  //   <li><a href="#">Separated link</a></li>
  // </ul>
</div>

}
