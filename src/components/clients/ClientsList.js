import { AnimatePresence, motion } from "framer-motion";
import ClientItem from "./ClientItem";

const ClientsList = ({ clients, onDelete }) => {
  return (
    <motion.ul layout className="pt-3">
      <AnimatePresence initial={false}>
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
      </AnimatePresence>
    </motion.ul>
  );
};

export default ClientsList;
