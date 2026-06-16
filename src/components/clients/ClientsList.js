import ClientItem from "./ClientItem";

const ClientsList = ({ clients, onDelete }) => {
  return (
    <ul className="pt-3">
      {clients.map((client) => (
        <ClientItem
          key={client.id}
          id={client.id}
          clientName={client.client}
          pricehour={client.pricehour}
          currency={client.currency}
          hoursmonth={client.hoursmonth}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ClientsList;
