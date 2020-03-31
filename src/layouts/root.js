import React from 'react';
import { Provider } from 'react-redux';
import Messages from './Messages';
import 'antd/dist/antd.css';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Messages />
    </Provider>
  );
}
