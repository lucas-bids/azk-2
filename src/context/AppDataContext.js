import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { mockClients, mockReports, mockTasks } from "../data/mockData";
import {
  buildReportTitle,
  formatCurrencyAmount,
  formatDateShort,
  formatHoursDecimal,
  formatMinutesToTime,
  parseMoney,
  parseTimeToMinutes,
} from "../utils/format";

const AppDataContext = createContext();

const createReportId = () => `report-${Date.now()}`;

const getClientByName = (clients, name) =>
  clients.find((client) => client.client === name);

const getReportDetails = (report, clients, tasks) => {
  if (!report) {
    return null;
  }

  const selectedClients = clients.filter((client) =>
    report.clientIds.includes(client.id)
  );

  const rows = selectedClients.map((client) => {
    const clientTasks = tasks.filter(
      (task) =>
        task.client === client.client &&
        task.date >= report.startDate &&
        task.date <= report.endDate
    );

    const totalMinutes = clientTasks.reduce(
      (sum, task) => sum + parseTimeToMinutes(task.time),
      0
    );
    const rate = parseMoney(client.pricehour);
    const amount = (totalMinutes / 60) * rate;

    return {
      id: `${report.id}-${client.id}`,
      client: client.client,
      time: formatMinutesToTime(totalMinutes),
      pricehour: client.pricehour,
      currency: report.currency,
      amount: formatCurrencyAmount(amount),
      totalMinutes,
      amountNumber: amount,
    };
  });

  const totalMinutes = rows.reduce((sum, row) => sum + row.totalMinutes, 0);
  const totalAmount = rows.reduce((sum, row) => sum + row.amountNumber, 0);

  return {
    ...report,
    title: buildReportTitle(report.startDate, report.endDate),
    clients: selectedClients,
    rows,
    totalTime: formatMinutesToTime(totalMinutes),
    totalAmount: `${formatCurrencyAmount(totalAmount)} ${report.currency}`,
  };
};

export const AppDataProvider = ({ children }) => {
  const [clients, setClients] = useState(mockClients);
  const [tasks, setTasks] = useState(mockTasks);
  const [reports, setReports] = useState(mockReports);
  const [draftReport, setDraftReport] = useState(null);

  const addTask = (taskData) => {
    const newTask = {
      id: `task-${Date.now()}`,
      ...taskData,
    };
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  const addClient = (clientData) => {
    const newClient = {
      id: `client-${Date.now()}`,
      ...clientData,
    };
    setClients((currentClients) => [newClient, ...currentClients]);
  };

  const deleteClient = (clientId) => {
    setClients((currentClients) =>
      currentClients.filter((client) => client.id !== clientId)
    );
  };

  const createDraftReport = (reportData) => {
    setDraftReport({
      id: "draft",
      ...reportData,
    });
  };

  const discardDraftReport = () => {
    setDraftReport(null);
  };

  const saveDraftReport = () => {
    if (!draftReport) {
      return null;
    }

    const savedReport = {
      ...draftReport,
      id: createReportId(),
    };

    setReports((currentReports) => [savedReport, ...currentReports]);
    setDraftReport(null);
    return savedReport.id;
  };

  const primaryCurrency = useMemo(
    () => clients[0]?.currency || "EUR",
    [clients]
  );

  const getReportById = useCallback(
    (reportId) => {
      if (reportId === "draft") {
        return getReportDetails(draftReport, clients, tasks);
      }

      const report = reports.find((item) => item.id === reportId);
      return getReportDetails(report, clients, tasks);
    },
    [clients, draftReport, reports, tasks]
  );

  const savedReports = useMemo(
    () =>
      reports
        .map((report) => getReportDetails(report, clients, tasks))
        .filter(Boolean),
    [clients, reports, tasks]
  );

  const timelineEntries = useMemo(() => {
    const grouped = tasks.reduce((acc, task) => {
      if (!acc[task.date]) {
        acc[task.date] = [];
      }
      acc[task.date].push(task);
      return acc;
    }, {});

    return Object.entries(grouped)
      .sort(([left], [right]) => right.localeCompare(left))
      .slice(0, 5)
      .map(([date, dayTasks]) => {
        const uniqueClients = [...new Set(dayTasks.map((task) => task.client))];
        const totalMinutes = dayTasks.reduce(
          (sum, task) => sum + parseTimeToMinutes(task.time),
          0
        );
        const amount = dayTasks.reduce((sum, task) => {
          const client = getClientByName(clients, task.client);
          return sum + (parseTimeToMinutes(task.time) / 60) * parseMoney(client?.pricehour);
        }, 0);

        const entryCurrency =
          getClientByName(clients, dayTasks[0]?.client)?.currency || primaryCurrency;

        return {
          date,
          displayDate: formatDateShort(date),
          clients: uniqueClients,
          worked: formatHoursDecimal(totalMinutes),
          earned: Math.round(amount),
          currency: entryCurrency,
        };
      });
  }, [clients, primaryCurrency, tasks]);

  const dashboardSummary = useMemo(() => {
    const totalMinutes = tasks.reduce(
      (sum, task) => sum + parseTimeToMinutes(task.time),
      0
    );
    const cashEarned = tasks.reduce((sum, task) => {
      const client = getClientByName(clients, task.client);
      return sum + (parseTimeToMinutes(task.time) / 60) * parseMoney(client?.pricehour);
    }, 0);

    return {
      hoursInput: formatHoursDecimal(totalMinutes),
      cashEarned: formatCurrencyAmount(cashEarned),
      currency: primaryCurrency,
      tasksCreated: tasks.length,
    };
  }, [clients, primaryCurrency, tasks]);

  const clientsSummary = useMemo(() => {
    const totalAssignedMinutes = clients.reduce(
      (sum, client) => sum + parseTimeToMinutes(client.hoursmonth),
      0
    );
    const workedMinutes = tasks.reduce(
      (sum, task) => sum + parseTimeToMinutes(task.time),
      0
    );
    const plannedIncome = clients.reduce((sum, client) => {
      return (
        sum +
        (parseTimeToMinutes(client.hoursmonth) / 60) * parseMoney(client.pricehour)
      );
    }, 0);

    return {
      totalHours: formatHoursDecimal(workedMinutes),
      hoursLeft: formatHoursDecimal(Math.max(totalAssignedMinutes - workedMinutes, 0)),
      plannedIncome: formatCurrencyAmount(plannedIncome),
      currency: primaryCurrency,
    };
  }, [clients, primaryCurrency, tasks]);

  const value = {
    clients,
    tasks,
    reports,
    draftReport,
    addTask,
    deleteTask,
    addClient,
    deleteClient,
    createDraftReport,
    discardDraftReport,
    saveDraftReport,
    getReportById,
    savedReports,
    timelineEntries,
    dashboardSummary,
    clientsSummary,
  };

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
