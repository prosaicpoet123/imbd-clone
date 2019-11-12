import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const {
      data,
    } = this.state;
    const {
      children,
    } = this.props;
    return (
      <Context.Provider
        value={
          {
            data,
            setData: (value) => this.setState({ data: value }),
          }
        }
      >
        {children}
      </Context.Provider>
    );
  }
}

Provider.defaultProps = {
  children: {},
};

Provider.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default Provider;
