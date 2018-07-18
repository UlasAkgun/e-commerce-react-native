import 'whatwg-fetch';
import {
  endpoint
} from './config';
import firebase from '../actions/firebase';
import {
  USER_LIST_FETCHED,
  MESSAGE_SENT,
  MESSAGE_NOT_SENT,
  MESSAGE_RECEIVED,
  CONVERSATION_FETCHED,
  MESSAGES_FETCHED,
  MESSAGE_ADDED,
  TYPING_NOTIFICATION,
  INBOX_FETCHED,
  NOTIFICATION_RECEIVED,
  NOTIFICATION_CLEARED,
  NOTIFICATION_FETCHED,
  UNREAD_MESSAGE_ADDED,
} from '../constants/actionTypes';

export function sendMessage(msgText, localTime, sender, receiver, conversationId) {
  const msgObject = {
    msgText,
    receiver,
    localTime,
    sender,
    conversationId: conversationId || 'null',
    isRead: false,
    status: 'sending',
  };
  return (dispatch) => {
    const endPoint = `${endpoint}Messages/savemessage`;
    fetch(endPoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgObject),
    })
      .then(response => response.json())
      .then((json) => {
        const copyJson = Object.assign({}, json.status);
        copyJson.receiverId = receiver.id;
        dispatch({
          type: MESSAGE_SENT,
          payload: copyJson,
        });
      });
  };
}
export function getUserList(userId) { // TODO: bunu ileride arkadaş listesi çekmek için kullanırım
  return (dispatch) => {
    const endPoint = `${endpoint}cbUsers`;
    fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: USER_LIST_FETCHED,
          payload: json,
        });
      });
  };
}
export function getInbox(userId) { // TODO: bunu ileride arkadaş listesi çekmek için kullanırım
  return (dispatch) => {
    const endPoint = `${endpoint}cbUsers/getInbox/${userId}`;
    fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: INBOX_FETCHED,
          payload: json,
        });
      });
  };
}

export function setTypingState(receiverId, key = null) {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const connectionKey = getState().auth.connectionKey;
    const notification = {
      type: 'Message',
      action: 'typing',
      uid,
      receiverId,
      key,
    };
    const typingRefReceiver = firebase.database().ref().child(`/users/${receiverId}/notifications`);
    if (key) {
      const typingRefSender = firebase.database().ref().child(`/users/${uid}/typing/${key}`);
      typingRefReceiver.child(key).remove((error) => {
        if (error) {
          console.log(error);
        } else {
          typingRefSender.remove();
          dispatch({
            type: TYPING_NOTIFICATION,
            payload: {
              type: 'Message',
              action: 'typing',
              data: {
                type: 'sent',
                state: 'sender_removed',
                receiverId,
                uid,
              },
            },
          });
        }
      });
    } else {
      typingRefReceiver.push({
        type: 'Message',
        action: 'typing',
        data: {
          receiverId,
          senderId: uid,
        },
        // conversationId: data.conversationId,
      }).then((result) => {
        const typingRefSender = firebase.database().ref().child(`/users/${uid}/typing/${result.key}`);

        typingRefSender.update({
          notificationKey: result.key,
          receiver: receiverId,
          connectionKey,
        });
        dispatch({
          type: TYPING_NOTIFICATION,
          payload: {
            type: 'Message',
            action: 'typing',
            data: {
              type: 'sent',
              state: 'added',
              receiverId,
              uid,
              key: result.key,
            },
          },
        });
      });
    }
  };
}
// export function getTypingState(notification) {
//   return (dispatch, getState) => {

//   };
// }
export function loadMesasges(conversationId, skip) {
  return (dispatch) => {
    // http://localhost:7000/api/conversations/5a59cea1d7b3570045e49562/msgs?filter[limit]=4&filter[skip]=2
    const filter = `conversations/${conversationId}/msgs?filter[order]=msgTime desc&filter[limit]=10&filter[skip]=${skip}`;
    // const filter = `?filter=[where][conversationId]=${conversationId}&filter[order]=msgTime desc &filter[limit]=10&filter[skip]=${skip}`;
    const endPoint = `${endpoint}${filter}`;
    fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.length === 0) {
          dispatch({
            type: MESSAGES_FETCHED,
            payload: [{
              conversationId,
              allMessagesLoaded: true,
            }],
          });
        } else {
          const copyJson = [...json];
          copyJson.reverse();
          dispatch({
            type: MESSAGES_FETCHED,
            payload: copyJson,
          });
        }
      });
  };
}
export function addMessageToConversation(message) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE_ADDED,
      payload: message,
    });
  };
}
export function clearNotifications(unreadMessages) {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const notificationPath = `users/${uid}/notifications`;
    const notificationRef = firebase.database().ref().child(notificationPath);
    const receiverId = unreadMessages[0].sender.id;
    unreadMessages.forEach(message => {
      notificationRef.child(message.notificationKey).remove(function (error) {
        if (error) {
          console.log(error);
        }
      });
    });
    dispatch({
      type: NOTIFICATION_CLEARED,
      payload: { unreadMessages, receiverId },
    });
  };
}
export function copyUnreadNotifications(unreadMessages, type) {
  return (dispatch) => {
    const receiverId = unreadMessages[0].sender.id;
    const lastUnreadMessage = unreadMessages[unreadMessages.length - 1];
    dispatch({
      type: UNREAD_MESSAGE_ADDED,
      payload: { receiverId, lastUnreadMessage, type },
    });
  };
}
export function loadConversation(userId, receiverId) {
  return (dispatch) => {
    const endPoint = `${endpoint}cbUsers/getConversation/${userId}/${receiverId}`;
    fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (!json.status) {
          const copyJson = Object.assign({}, json);
          copyJson.status = {};
          copyJson.status.receiverId = receiverId;
          dispatch({
            type: CONVERSATION_FETCHED,
            payload: copyJson.status,
          });
        } else {
          const copyJson = Object.assign({}, json);
          copyJson.status.receiverId = receiverId;
          // dispatch(loadMesasges(json.status.id, 0));
          dispatch({
            type: CONVERSATION_FETCHED,
            payload: copyJson.status,
          });
        }
      });
  };
}
