import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import InputMessage from '../components/InputMessage';
import MessageList from '../components/MessageList';
import { add } from '../actions/messages';

const MessageLayout = ({ messages, dispatch }) => (
  <Layout style={{ height: 'calc(100%)' }}>
    <Layout.Content style={{ padding: '0 50px', height: 'calc(80%)' }}>
      <Layout
        style={{
          padding: '24px 0',
          background: '#fff',
          height: 'calc(100%)'
        }}
      >
        <Layout.Content style={{ padding: '0 24px', height: 'calc(80%)' }}>
          <MessageList messages={messages} />
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: '0 50px',
        textAlign: 'center',
        height: 'calc(20%)'
      }}
    >
      Write Message <InputMessage onSubmit={v => dispatch(add(v, 'toto'))} />
    </Layout.Footer>
  </Layout>
);

export default connect(reduxState => {
  return { messages: reduxState.messages };
})(MessageLayout);
