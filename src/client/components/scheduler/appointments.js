import {
  pink, purple, teal, amber, deepOrange,
} from '@material-ui/core/colors';

export const appointments = [
  {
    id: 0,
    title: '1.Commande (avec sélection véhicule) enregistrée par IV3A',
    roomId: 1,
    members: [1,2, 3],
    startDate: new Date(),
    endDate: new Date(2020, 4, 1, 11),
    rRule: 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10',
  },  {
    id: 1,
    title: 'Oil Painting for Beginners',
    roomId: 2,
    members: [2],
    startDate: new Date(2020, 4, 1, 9, 30),
    endDate: new Date(2020, 4, 1, 11),
    rRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
  }, {
    id: 2,
    title: 'Testing',
    roomId: 3,
    members: [3],
    startDate: new Date(2020, 4, 1, 12, 0),
    endDate: new Date(2020, 4, 1, 13, 0),
    rRule: 'FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2',
  }, {
    id: 3,
    title: 'Meeting of Instructors',
    priorityId: 1,
    roomId: 4,
    members: [4, 1],
    startDate: new Date(2020, 4, 1, 9, 0),
    endDate: new Date(2020, 4, 1, 9, 15),
    rRule: 'FREQ=DAILY;BYDAY=WE;UNTIL=20170601',
  }, {
    id: 4,
    title: 'Recruiting students',
    priorityId: 2,
    roomId: 5,
    members: [3, 4, 5],
    startDate: new Date(2020, 4, 26, 10, 0),
    endDate: new Date(2020, 4, 26, 11, 0),
    rRule: 'FREQ=YEARLY;BYWEEKNO=23',
    exDate: '20170611T100000',
  }, {
    id: 5,
    title: 'Final exams',
    priorityId: 1,
    roomId: 3,
    members: [2, 3],
    startDate: new Date(2020, 4, 26, 12, 0),
    endDate: new Date(2020, 4, 26, 13, 35),
    rRule: 'FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR',
  }, {
    id: 6,
    title: 'Monthly Planning',
    priorityId: 2,
    roomId: 4,
    members: [1, 3],
    startDate: new Date(2020, 4, 26, 14, 30),
    endDate: new Date(2020, 4, 26, 15, 45),
    rRule: 'FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1',
  }, {
    id: 7,
    title: 'Open Day',
    roomId: 5,
    members: [1, 3, 5],
    startDate: new Date(2020, 4, 1, 9, 30),
    endDate: new Date(2020, 4, 1, 13),
    rRule: 'FREQ=YEARLY;BYYEARDAY=148',
  },{
      title: 'Upgrade Personal Computers',
      startDate: new Date(2020, 5, 27, 15, 15),
      endDate: new Date(2020, 5, 27, 16, 30),
      id: 8,
      location: 'Room 3',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 5, 28, 11, 0),
      endDate: new Date(2020, 5, 28, 12, 0),
      id: 9,
      location: 'Room 3',
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2020, 5, 28, 11, 0),
      endDate: new Date(2020, 5, 28, 13, 30),
      id: 10,
      location: 'IV3A',
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2020, 5, 28, 14, 0),
      endDate: new Date(2020, 5, 28, 15, 30),
      id: 11,
      location: 'PT',
    }, {
      title: 'Create Icons for Website',
      startDate: new Date(2020, 5, 29, 10, 0),
      endDate: new Date(2020, 5, 29, 11, 30),
      id: 12,
      location: 'PT',
    }, {
      title: 'Upgrade Server Hardware',
      startDate: new Date(2020, 5, 29, 14, 30),
      endDate: new Date(2020, 5, 29, 16, 0),
      id: 13,
      location: 'Room 3',
    }, {
      title: 'Submit New Website Design',
      startDate: new Date(2020, 5, 29, 16, 30),
      endDate: new Date(2020, 5, 29, 18, 0),
      id: 14,
      location: 'Room 3',
    }, {
      title: 'Launch New Website',
      startDate: new Date(2020, 5, 29, 12, 20),
      endDate: new Date(2020, 5, 29, 14, 0),
      id: 15,
      location: 'IV3A',
    }, {
      title: 'Website Re-Design Plan',
      startDate: new Date(2020, 6, 2, 9, 30),
      endDate: new Date(2020, 6, 2, 15, 30),
      id: 16,
      location: 'IV3A',
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2020, 6, 2, 12, 0),
      endDate: new Date(2020, 6, 2, 13, 0),
      id: 17,
      location: 'Room 3',
    }, {
      title: 'Install New Router in Dev Room',
      startDate: new Date(2020, 6, 2, 14, 30),
      endDate: new Date(2020, 6, 2, 17, 30),
      id: 18,
      location: 'PT',
    }, {
      title: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date(2020, 6, 2, 16, 0),
      endDate: new Date(2020, 6, 3, 9, 0),
      id: 19,
      location: 'PT',
    }, {
      title: 'Final Budget Review',
      startDate: new Date(2020, 6, 3, 10, 15),
      endDate: new Date(2020, 6, 3, 13, 35),
      id: 20,
      location: 'IV3A',
    }, {
      title: 'New Brochures',
      startDate: new Date(2020, 6, 3, 14, 30),
      endDate: new Date(2020, 6, 3, 15, 45),
      id: 21,
      location: 'Room 3',
    }, {
      title: 'Install New Database',
      startDate: new Date(2020, 6, 3, 15, 45),
      endDate: new Date(2020, 6, 4, 12, 15),
      id: 22,
      location: 'Room 3',
    }, {
      title: 'Approve New Online Marketing Strategy',
      startDate: new Date(2020, 6, 4, 12, 35),
      endDate: new Date(2020, 6, 4, 14, 15),
      id: 23,
      location: 'Room 3',
    }, {
      title: 'Upgrade Personal Computers',
      startDate: new Date(2020, 6, 4, 15, 15),
      endDate: new Date(2020, 6, 4, 20, 30),
      id: 24,
      location: 'PT',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 6, 5, 6, 0),
      endDate: new Date(2020, 6, 5, 14, 20),
      id: 25,
      location: 'IV3A',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 6, 5, 14, 35),
      endDate: new Date(2020, 6, 5, 16, 20),
      id: 26,
      location: 'PT',
    }, {
      title: 'Customer Workshop 2',
      startDate: new Date(2020, 6, 5, 10, 0),
      endDate: new Date(2020, 6, 5, 11, 20),
      id: 27,
      location: 'IV3A',
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2020, 6, 5, 20, 0),
      endDate: new Date(2020, 6, 6, 13, 30),
      id: 28,
      location: 'Room 3',
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2020, 6, 6, 14, 10),
      endDate: new Date(2020, 6, 6, 15, 30),
      id: 29,
      location: 'Room 3',
    }, {
      title: 'Create Icons for Website',
      startDate: new Date(2020, 6, 6, 10, 0),
      endDate: new Date(2020, 6, 7, 14, 30),
      id: 30,
      location: 'IV3A',
    }, {
      title: 'Upgrade Server Hardware',
      startDate: new Date(2020, 6, 3, 9, 30),
      endDate: new Date(2020, 6, 3, 12, 25),
      id: 31,
      location: 'PT',
    }, {
      title: 'Submit New Website Design',
      startDate: new Date(2020, 6, 3, 12, 30),
      endDate: new Date(2020, 6, 3, 18, 0),
      id: 32,
      location: 'PT',
    }, {
      title: 'Launch New Website',
      startDate: new Date(2020, 6, 3, 12, 20),
      endDate: new Date(2020, 6, 3, 14, 10),
      id: 33,
      location: 'IV3A',
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2020, 5, 26, 0, 0),
      endDate: new Date(2020, 5, 27, 0, 0),
      id: 34,
      location: 'PT',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 5, 29, 10, 0),
      endDate: new Date(2020, 5, 30, 14, 30),
      id: 35,
      location: 'IV3A',
    }, {
      title: 'Google AdWords Strategy',
      startDate: new Date(2020, 6, 3, 0, 0),
      endDate: new Date(2020, 6, 4, 10, 30),
      id: 36,
      location: 'Room 3',
    }, {
      title: 'Rollout of New Website and Marketing Brochures',
      startDate: new Date(2020, 6, 5, 10, 0),
      endDate: new Date(2020, 6, 9, 14, 30),
      id: 37,
      location: 'Room 3',
    }, {
      title: 'Update NDA Agreement',
      startDate: new Date(2020, 6, 1, 10, 0),
      endDate: new Date(2020, 6, 3, 14, 30),
      id: 38,
      location: 'PT',
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 6, 1),
      endDate: new Date(2020, 6, 2),
      allDay: true,
      id: 39,
      location: 'IV3A',
    },
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2020, 5, 25, 12, 35),
    endDate: new Date(2020, 5, 25, 15, 0),
    id: 0,
    members: [1, 3, 5],
    location: 'PT',
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2020, 5, 26, 12, 35),
    endDate: new Date(2020, 5, 26, 15, 0),
    id: 1,
    members: [2, 4],
    location: 'IV3A',
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2020, 5, 27, 12, 35),
    endDate: new Date(2020, 5, 27, 15, 0),
    id: 2,
    members: [3],
    location: 'Room 3',
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2020, 5, 28, 12, 35),
    endDate: new Date(2020, 5, 28, 15, 0),
    id: 3,
    members: [4, 1],
    location: 'Room 4',
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2020, 5, 29, 12, 35),
    endDate: new Date(2020, 5, 29, 15, 0),
    id: 4,
    members: [5, 1, 3],
    location: 'Room 5',
  }];

  export const resourcesData = [
    {
      text: 'IV3A',
      id: 1,
      color: amber,
    }, {
      text: 'PT',
      id: 2,
      color: pink,
    }, 
    // {
    //   text: 'Room 103',
    //   id: 3,
    //   color: purple,
    // }, {
    //   text: 'Meeting room',
    //   id: 4,
    //   color: deepOrange,
    // }, {
    //   text: 'Conference hall',
    //   id: 5,
    //   color: teal,
    // },
  ];
  export const appointmentsMonth = [
    {
      title: 'Website Re-Design Plan',
      startDate: new Date(2020, 6, 23, 9, 30),
      endDate: new Date(2020, 6, 23, 11, 30),
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2020, 6, 23, 12, 0),
      endDate: new Date(2020, 6, 23, 13, 0),
    }, {
      title: 'Install New Router in Dev Room',
      startDate: new Date(2020, 6, 23, 14, 30),
      endDate: new Date(2020, 6, 23, 15, 30),
    }, {
      title: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date(2020, 6, 24, 10, 0),
      endDate: new Date(2020, 6, 24, 11, 0),
    }, {
      title: 'Final Budget Review',
      startDate: new Date(2020, 6, 24, 12, 0),
      endDate: new Date(2020, 6, 24, 13, 35),
    }, {
      title: 'New Brochures',
      startDate: new Date(2020, 6, 24, 14, 30),
      endDate: new Date(2020, 6, 24, 15, 45),
    }, {
      title: 'Install New Database',
      startDate: new Date(2020, 6, 25, 9, 45),
      endDate: new Date(2020, 6, 25, 11, 15),
    }, {
      title: 'Approve New Online Marketing Strategy',
      startDate: new Date(2020, 6, 25, 12, 0),
      endDate: new Date(2020, 6, 25, 14, 0),
    }, {
      title: 'Upgrade Personal Computers',
      startDate: new Date(2020, 6, 25, 15, 15),
      endDate: new Date(2020, 6, 25, 16, 30),
    }, {
      title: 'Customer Workshop',
      startDate: new Date(2020, 6, 26, 11, 0),
      endDate: new Date(2020, 6, 26, 12, 0),
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2020, 6, 26, 11, 0),
      endDate: new Date(2020, 6, 26, 13, 30),
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2020, 6, 26, 14, 0),
      endDate: new Date(2020, 6, 26, 15, 30),
    }, {
      title: 'Create Icons for Website',
      startDate: new Date(2020, 6, 27, 10, 0),
      endDate: new Date(2020, 6, 27, 11, 30),
    }, {
      title: 'Upgrade Server Hardware',
      startDate: new Date(2020, 6, 27, 14, 30),
      endDate: new Date(2020, 6, 27, 16, 0),
    }, {
      title: 'Submit New Website Design',
      startDate: new Date(2020, 6, 27, 16, 30),
      endDate: new Date(2020, 6, 27, 18, 0),
    }, {
      title: 'Launch New Website',
      startDate: new Date(2020, 6, 26, 12, 20),
      endDate: new Date(2020, 6, 26, 14, 0),
    }, {
      title: 'Website Re-Design Plan',
      startDate: new Date(2020, 6, 16, 9, 30),
      endDate: new Date(2020, 6, 16, 15, 30),
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2020, 6, 16, 12, 0),
      endDate: new Date(2020, 6, 16, 13, 0),
    }, {
      title: 'Install New Database',
      startDate: new Date(2020, 6, 17, 15, 45),
      endDate: new Date(2020, 6, 18, 12, 15),
    }, {
      title: 'Approve New Online Marketing Strategy',
      startDate: new Date(2020, 6, 18, 12, 35),
      endDate: new Date(2020, 6, 18, 14, 15),
    }, {
      title: 'Upgrade Personal Computers',
      startDate: new Date(2020, 6, 19, 15, 15),
      endDate: new Date(2020, 6, 20, 20, 30),
    }, {
      title: 'Prepare 2015 Marketing Plan',
      startDate: new Date(2020, 6, 20, 20, 0),
      endDate: new Date(2020, 6, 20, 13, 30),
    }, {
      title: 'Brochure Design Review',
      startDate: new Date(2020, 6, 20, 14, 10),
      endDate: new Date(2020, 6, 20, 15, 30),
    }, {
      title: 'Vacation',
      startDate: new Date(2020, 5, 22),
      endDate: new Date(2020, 6, 1),
    }, {
      title: 'Vacation',
      startDate: new Date(2020, 6, 28),
      endDate: new Date(2020, 7, 7),
    },
  ];
export  const locations = [
    { text: 'IV3A', id: 1 },
    { text: 'PT', id: 2 },
  ];
  export const priorityData = [
    {
      text: 'Low Priority',
      id: 1,
    }, {
      text: 'High Priority',
      id: 2,
    },
  ];
export  const recurrenceAppointments = [{
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 100,
    rRule: 'FREQ=DAILY;COUNT=3',
    exDate: '20180628T063500Z,20180626T061500Z',
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 101,
    rRule: 'FREQ=DAILY;COUNT=4',
    exDate: '20180627T091100Z',
    allDay: true,
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 102,
    rRule: 'FREQ=DAILY;COUNT=5',
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: 'PT',
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2018, 5, 27, 11, 45),
    endDate: new Date(2018, 5, 27, 13, 20),
    id: 4,
    location: 'PT',
  }, {
    title: 'New Brochures',
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: 'PT',
  }, {
    title: 'Install New Database',
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
    location: 'IV3A',
  }, {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
    location: 'Room 3',
  }, {
    title: 'Create Icons for Website',
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: 'IV3A',
  }];