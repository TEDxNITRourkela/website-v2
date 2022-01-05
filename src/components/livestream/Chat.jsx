import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const Chat = ({channelId}) => (
  <WidgetBot
    server="903710963566526515"
    channel={channelId}
		style={{width: '100%', height: 'calc(100%)', marginTop: '20px'}}
  />
)

export default Chat;