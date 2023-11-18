import * as notifyData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Create Entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });
const notification = new schema.Entity("notifications", { author: user, context: message });

// Normalize data
export const normalizedData = normalize(notifyData.default, [notification]);

export const getAllNotificationsByUser = userId => {
 return notifyData.default
  .filter((data) => data.author.id === userId)
  .map((data) => data.context);
}
