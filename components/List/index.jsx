import React from 'react';
import { Context } from '../../pages/provider';

const List = () => (
  <Context.Consumer>
    {({ data }) => (
      <p>
        {data && data.Title}
      </p>
    )}
  </Context.Consumer>
);

export default List;
