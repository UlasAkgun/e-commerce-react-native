
import { difference } from 'lodash';
import {
  USER_LIST_FETCHED,
  MESSAGE_SENT,
  CONVERSATION_FETCHED,
  MESSAGE_RECEIVED,
  MESSAGES_FETCHED,
  MESSAGE_ADDED,
  NOTIFICATION_CLEARED,
  TYPING_NOTIFICATION,
  UNREAD_MESSAGE_ADDED,
  INBOX_FETCHED,
  USER_LOGOUT,
} from '../constants/actionTypes';


export default function user(state = { userList: [], inbox: [], conversations: [], typing: { received: [], sent: [] } }, action) {
  switch (action.type) {
    case CONVERSATION_FETCHED:
      {
        let newConversations;
        const copyConversation = Object.assign({}, action.payload);
        if (state.conversations) {
          newConversations = state.conversations.filter((conversation) => {
            if (conversation.receiverId !== copyConversation.receiverId) {
              return conversation;
            }
            if (copyConversation.messages && conversation.unreadMessages) {

              conversation.unreadMessages.forEach((unreadMessage) => {
                let copyMessages = copyConversation.messages.filter((message) => {
                  if (message.msgTime === unreadMessage.msgTime
                    && message.msgText === unreadMessage.msgText
                    && message.sender.id === unreadMessage.sender.id
                    && message.receiver.id === unreadMessage.receiver.id) {
                    return null;
                  }
                  return message;
                });
                copyConversation.messages = [...copyMessages];
                copyMessages = [];
              });
              copyConversation.unreadMessages = conversation.unreadMessages;
            }
          });
          if (copyConversation.messages && copyConversation.messages.length === 0) {
            copyConversation.messages = [...copyConversation.unreadMessages];
          }
          newConversations = newConversations.concat([copyConversation]);
        } else {
          newConversations = [action.payload];
        }

        return Object.assign({}, state, { conversations: newConversations });
      }
    case MESSAGES_FETCHED:
      {
        if (action.payload.length > 0) {
          const conversation = state.conversations.find((message) => {
            return message.id === action.payload[0].conversationId;
          });
          if (conversation) {
            const copyConversation = Object.assign({}, conversation);
            if (action.payload[0].allMessagesLoaded) {
              copyConversation.allMessagesLoaded = true;
            } else {
              copyConversation.messages = action.payload.concat(copyConversation.messages || []);
            }
            const newMessages = difference(state.conversations, [conversation]);
            newMessages.push(copyConversation);
            return Object.assign({}, state, { conversations: newMessages });
          }
        }
        return Object.assign({}, state);
      }
    case INBOX_FETCHED:
      return Object.assign({}, state, { inbox: action.payload.inbox });
    case TYPING_NOTIFICATION:
      {
        if (action.payload.type === 'Message') {
          const copyTyping = Object.assign({}, state.typing);
          if (action.payload.data.state === 'sender_removed') {
            copyTyping.sent = copyTyping.sent.filter((item) => item.receiverId !== action.payload.data.receiverId);
          } else if (action.payload.data.state === 'receiver_removed') {
            copyTyping.received = copyTyping.received.filter((item) => item.receiverId !== action.payload.data.receiverId);
          } else if (action.payload.data.state === 'added') {
            copyTyping.sent.push(action.payload.data);
          } else if (action.payload.data.state === 'received') {
            copyTyping.received.push({ senderId: action.payload.data.senderId, receiverId: action.payload.data.receiverId, key: action.payload.data.key });
          }
          return Object.assign({}, state, { typing: copyTyping });
        }
        break;
      }
    case NOTIFICATION_CLEARED:
      {
        const copyConversations = [...state.conversations];
        const currentConversation = copyConversations.find(conv => conv.receiverId === action.payload.receiverId);
        delete currentConversation.unreadMessages;
        return Object.assign({}, state, { conversations: copyConversations });
      }
    case UNREAD_MESSAGE_ADDED:
      {
        const copyConversations = [...state.conversations];
        const currentConversation = copyConversations.find(conv => conv.receiverId === action.payload.receiverId);
        const test = currentConversation.messages.find(message => message.id === action.payload.lastUnreadMessage.id );
        
        if (action.payload.type === 'multi') {
          currentConversation.messages = currentConversation.messages && !test
            ? currentConversation.messages.concat(currentConversation.unreadMessages)
            : currentConversation.unreadMessages;
        } else {
          currentConversation.messages = currentConversation.messages && !test
            ? currentConversation.messages.concat([action.payload.lastUnreadMessage])
            : currentConversation.unreadMessages;
        }

        return Object.assign({}, state, { conversations: copyConversations });
      }
    case MESSAGE_RECEIVED: {
      const receivedMessage = action.payload;
      const copyConversations = [...state.conversations];
      const currentConversation = copyConversations.find(conv => conv.receiverId === receivedMessage.sender.id);
      if (currentConversation) {
        currentConversation.unreadMessages = currentConversation.unreadMessages
          ? currentConversation.unreadMessages.concat([receivedMessage])
          : [receivedMessage];
        return Object.assign({}, state, { conversations: copyConversations });
      }
      const newConversation = {
        id: receivedMessage.conversationId,
        messages: [receivedMessage],
        receiverId: receivedMessage.sender.id,
        unreadMessages: [receivedMessage],
      };
      copyConversations.push(newConversation);
      return Object.assign({}, state, { conversations: copyConversations });
    }
    // case NOTIFICATION_CLEARED: {
    //   let copyMessages = [...state.conversations];
    //   const currentConversation = copyMessages.find((conversation) => {
    //     return conversation.conversationId === action.payload;
    //   });
    //   copyMessages = difference(copyMessages, currentConversation);
    //   delete currentConversation.unreadMessages;
    //   copyMessages.push(currentConversation);
    //   return Object.assign({}, state, { conversations: copyMessages });
    // }
    case USER_LIST_FETCHED:
      return Object.assign({}, state, { userList: action.payload });
    case MESSAGE_ADDED:
      {
        const copyMessages = [...state.conversations];
        const currentConversation = copyMessages.find((conversation) => {
          return conversation.receiverId === action.payload.receiver.id;
        });
        const newMessages = currentConversation.messages.filter((message) => {
          return message.id !== action.payload.id;
        });
        newMessages.push(action.payload);
        currentConversation.messages = newMessages;
        return Object.assign({}, state, { conversations: copyMessages });
      }
    case MESSAGE_SENT:
      {
        const messages = state.conversations ? [...state.conversations] : [];
        let conversation = messages.find((message) => {
          return message.receiverId === action.payload.receiverId;
        });
        if (conversation) {
          // conversation.receiverId = action.payload.receiverId;
          conversation.id = action.payload.conversationId;
          if (conversation.messages) {
            if (conversation.unreadMessages && conversation.unreadMessages.length > 0) {
              conversation.messages = conversation.messages.concat(conversation.unreadMessages);
            }
            conversation.messages.push(action.payload);
          } else {
            if (conversation.unreadMessages && conversation.unreadMessages.length > 0) {
              conversation.messages = conversation.unreadMessages;
            }
            conversation.messages = [action.payload];
          }
          delete conversation.unreadMessages;
        } else {
          conversation = {
            id: action.payload.conversationId,
            receiverId: action.payload.receiverId,
            messages: [action.payload],
          };
          messages.push(conversation);
        }
        return Object.assign({}, state, { conversations: messages });
      }
    case USER_LOGOUT:
      return Object.assign({}, state, {
        userList: [],
        inbox: [],
        conversations: [],
        typing: { received: [], sent: [] } });
    default:
      return state;
  }
}
