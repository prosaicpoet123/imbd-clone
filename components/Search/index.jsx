import React, { Component } from 'react';
import { Context } from '../../pages/provider';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e, searchTerm, setData) {
    e.preventDefault();
    // validateForm();
    const url = `/api/getFilms?searchTerm=${searchTerm}`;
    const data = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    setData(data);
  }

  handleOnChange(e) {
    const {
      value,
      name,
    } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      search,
    } = this.state;
    return (
      <Context.Consumer>
        {({ setData }) => (
          <form className="search" onSubmit={(e) => this.handleSubmit(e, search, setData)}>
            <input name="search" value={search} onChange={(e) => this.handleOnChange(e)} />
            <button type="submit">Get films!</button>
          </form>
        )}
      </Context.Consumer>
    );
  }
}

export default Search;
