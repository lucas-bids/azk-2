export const mockClients = [
  { id: "client-1", client: "Amicia.org", pricehour: "15,00", currency: "EUR", hoursmonth: "18:00" },
  { id: "client-2", client: "Familie Liebe Frieden", pricehour: "18,00", currency: "EUR", hoursmonth: "05:00" },
  { id: "client-3", client: "Rock The Kid", pricehour: "25,00", currency: "EUR", hoursmonth: "04:00" },
  { id: "client-4", client: "Asbo Performance", pricehour: "18,00", currency: "EUR", hoursmonth: "10:30" },
  { id: "client-5", client: "Duwe & Partner", pricehour: "25,00", currency: "EUR", hoursmonth: "04:00" },
  { id: "client-6", client: "Kindereinfach", pricehour: "18,00", currency: "EUR", hoursmonth: "10:30" },
  { id: "client-7", client: "Spin Pool", pricehour: "20,00", currency: "EUR", hoursmonth: "06:00" },
  { id: "client-8", client: "Adwing", pricehour: "22,00", currency: "EUR", hoursmonth: "08:00" },
  { id: "client-9", client: "Weiku do Brasil", pricehour: "30,00", currency: "EUR", hoursmonth: "07:30" },
];

export const mockTasks = [
  { id: "task-1", date: "2022-12-13", client: "Familie Liebe Frieden", task: "Blog Layout angepasst + Email Anderungen", time: "01:30" },
  { id: "task-2", date: "2022-12-13", client: "Amicia.org", task: "Finalle Anderunge von der Website", time: "05:00" },
  { id: "task-3", date: "2022-12-13", client: "Kindereinfach", task: "Landing page tweaks", time: "02:15" },
  { id: "task-4", date: "2022-12-13", client: "Rock The Kid", task: "Content update and QA", time: "01:00" },
  { id: "task-5", date: "2022-12-13", client: "Spin Pool", task: "Header redesign pass", time: "01:15" },
  { id: "task-6", date: "2022-12-13", client: "Adwing", task: "Ads dashboard cleanup", time: "00:45" },
  { id: "task-7", date: "2022-12-12", client: "Familie Liebe Frieden", task: "Blog Layout angepasst + Email Anderungen", time: "01:30" },
  { id: "task-8", date: "2022-12-12", client: "Amicia.org", task: "Finalle Anderunge von der Website", time: "02:30" },
  { id: "task-9", date: "2022-12-11", client: "Rock The Kid", task: "Social assets export", time: "02:00" },
  { id: "task-10", date: "2022-12-11", client: "Spin Pool", task: "Campaign fixes", time: "02:00" },
  { id: "task-11", date: "2022-12-10", client: "Weiku do Brasil", task: "Portuguese content review", time: "03:00" },
  { id: "task-12", date: "2022-12-10", client: "Kindereinfach", task: "Client requested revisions", time: "03:30" },
];

export const mockReports = [
  {
    id: "report-1",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-01",
    endDate: "2022-12-31",
    currency: "EUR",
  },
  {
    id: "report-2",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-09",
    endDate: "2022-12-13",
    currency: "EUR",
  },
  {
    id: "report-3",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-10",
    endDate: "2022-12-12",
    currency: "EUR",
  },
  {
    id: "report-4",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-11",
    endDate: "2022-12-13",
    currency: "EUR",
  },
  {
    id: "report-5",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-12",
    endDate: "2022-12-13",
    currency: "EUR",
  },
  {
    id: "report-6",
    clientIds: ["client-1", "client-2", "client-6", "client-5", "client-8", "client-7", "client-9"],
    startDate: "2022-12-13",
    endDate: "2022-12-13",
    currency: "EUR",
  },
];
