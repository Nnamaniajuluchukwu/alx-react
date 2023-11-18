import * as notifyData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Create Entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });
const notification = new schema.Entity("notifications", { author: user, context: message });

// Normalize data
export const normalizedData = normalize(notifyData.default, [notification]);

export const getAllNotificationsByUser = userId => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.entries(notifications)
    .filter(([_, val]) => val.author === userId)
    .map(([_, val]) => messages[val.context]);
}
