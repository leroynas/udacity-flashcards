import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_STORAGE_KEY = '@udacity-flashcards:NOTIFICATIONS';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  );
}

function createNotification() {
  return {
    title: 'Do the Quiz!',
    body: "Don't forget to play the quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export async function setLocalNotification() {
  const data = AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY).then(JSON.parse);

  if (data === null) {
    const status = Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: 'day',
      });

      AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true));
    }
  }
}
