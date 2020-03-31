import React from 'react';
import { Timeline } from 'antd';

const MessageList = ({ messages = [] }) => (
  <Timeline>
    {messages.map(m => (
      <Timeline.Item>{m.text}</Timeline.Item>
    ))}
    <Timeline.Item></Timeline.Item>
    {/* FIXME: render a <Timeline.Item> for each message */}
  </Timeline>
);

export default MessageList;
