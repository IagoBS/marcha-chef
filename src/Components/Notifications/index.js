import React, { useState, useEffect, useMemo } from 'react';
import { FaBell } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  Container,
  Badge,
  NotificationsList,
  Notification,
  Scroll,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotification] = useState([]);
  const hasUnread = useMemo(
    () => notifications.find((notification) => notification.read === false),
    [notifications]
  );
  async function handleToggleVisible() {
    setVisible(!visible);
  }
  async function handdleHasRead(id) {
    await api.put(`notification/${id}`);
    setNotification(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }
  useEffect(() => {
    async function loadNotification() {
      const response = await api.get('notification');
      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.created_at),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));
      setNotification(data);
    }
    loadNotification();
  }, []);

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasonRead={hasUnread}>
        <FaBell color="#ff8a00" size={20} />
      </Badge>
      <NotificationsList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handdleHasRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationsList>
    </Container>
  );
}

export default Notifications;
