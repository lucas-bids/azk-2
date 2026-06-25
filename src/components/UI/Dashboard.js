import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import TimelineSidebar from "./TimelineSidebar";

const Dashboard = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex min-h-screen w-full">
      <MenuBar />
      <main className="flex min-w-0 grow px-3 py-4 sm:px-4">
        <div className="min-w-0 grow overflow-hidden pr-0 xl:pr-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </div>
        <TimelineSidebar />
      </main>
    </div>
  );
};

export default Dashboard;
