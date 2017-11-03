import React, { Component } from 'react';

class AddItemWidget extends Component {
  constructor(props) {
    super(props);

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
  }

  _handleItemValueChange(event) {
    let value = event.target.value;
    this.setState(() => ({value}));
  }

  render() {
    return (
      <div className="add-widget">
        <input type="text" value={this.state.value} placeholder="Insert new item..." onChange={this._handleItemValueChange} />
        <button type="button" onClick={this._handleAddButtonClick}>Add</button>
      </div>
    );
  }
}

export default AddItemWidget;
