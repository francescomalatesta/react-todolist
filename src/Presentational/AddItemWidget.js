import React, { Component } from 'react';

class AddItemWidget extends Component {
  constructor(props) {
    super(props);

    this.itemInput = undefined;
    this.state = {
      value: ''
    };

    this._handleAddButtonClick = this._handleAddButtonClick.bind(this);
    this._handleItemValueChange = this._handleItemValueChange.bind(this);
  }

  _handleAddButtonClick() {
    if(this.state.value === '') {
      alert('Error, value cannot be empty.');
      return;
    }

    this.props.onAddButtonClick(this.state.value);
    this.setState(() => ({value: ''}));
    this.itemInput.focus();
  }

  _handleItemValueChange(event) {
    let value = event.target.value;
    this.setState(() => ({value}));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <input ref={(input) => { this.itemInput = input; }} autoFocus className="form-control" type="text" value={this.state.value} placeholder="Insert new item..." onChange={this._handleItemValueChange} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success form-control" type="button" onClick={this._handleAddButtonClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddItemWidget;
