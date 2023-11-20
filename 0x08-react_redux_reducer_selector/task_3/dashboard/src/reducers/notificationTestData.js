export const expected = {
  data: [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available"
    }
  ],

  fetch: {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  },

  marked: {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: true,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  },

  filter: {
    filter: "URGENT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  }
};

export const testData = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
};
