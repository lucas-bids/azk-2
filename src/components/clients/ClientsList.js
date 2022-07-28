import ClientItem from "./ClientItem";

const ClientList = (props) => {
  const clients = props.clients

  const clientList = clients.map((clients) => (
    <ClientItem key={clients.id} id={clients.id} clientName={clients.client} pricehour={clients.pricehour} currency={clients.currency} hoursmonth={clients.hoursmonth} refresh={props.refresh}/>
  ));

  return (
    <ul className="pt-3">
      {clientList}
    </ul>
  );
};

export default ClientList;