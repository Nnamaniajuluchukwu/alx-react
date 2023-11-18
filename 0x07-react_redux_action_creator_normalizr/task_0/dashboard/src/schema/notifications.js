import * as notifyData from '../../notifications.json';

export const getAllNotificationsByUser = userId => {
 return notifyData.default
  .filter((data) => data.author.id === userId)
  .map((data) => data.context);
}
