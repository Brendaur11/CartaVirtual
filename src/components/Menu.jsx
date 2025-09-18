import { useState, useEffect, useRef } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { menuItems } from "../data/menu";

function Menu(onClick) {
  const [activeTab, setActiveTab] = useState(menuItems[0].category);
  const [activeItem, setActiveItem] = useState(null);
  const [showTabs, setShowTabs] = useState(true); // 👈 controla visibilidad de tabs

  const scrollRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = scrollRef.current.scrollTop;

      if (currentScroll > lastScrollY.current) {
        // 👇 scroll hacia abajo → ocultar tabs
        setShowTabs(false);
      } else {
        // 👆 scroll hacia arriba → mostrar tabs
        setShowTabs(true);
      }

      lastScrollY.current = currentScroll;
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentTab = menuItems.find((tab) => tab.category === activeTab);

  return (
    <div className="flex flex-col w-screen z-10">
      {/* Header */}
      <div className="flex relative justify-center items-center h-40 bg-lime-950" id="fondoMenu">
        <div className="absolute text-9xl">
          <i className="bx bx-chef-hat" style={{ color: "#3a441f" }}></i>
        </div>
        <h1 className="absolute text-3xl text-gray-100 font-semibold">PESTO</h1>
      </div>

      {/* Contenido con scroll */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          ref={scrollRef}
          className="flex-1 overflow-auto min-h-screen rounded-t-3xl bg-gray-100 p-4 pb-20"
        >
          {!activeItem &&
            currentTab.items.map((item, index) => (
              <div
                // i
                key={index}
                className="bg-white shadow rounded-2xl p-4 mb-3 cursor-pointer hover:border hover:border-lime-700 transition lg:w-1/2 lg:mx-auto"
                onClick={() => item.subItems ? setActiveItem(item) : null}
              >
                <h3 className="font-semibold text-lg">{item.name}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
              </div>
            ))}

          {activeItem && (
            <div className="2xl:w-1/2 2xl:mx-auto">
              <div 
                className="flex ml-4">
                <button                  
                  onClick={() => setActiveItem(null)}
                  className="mb-4 text-gray-100 bg-gray-500 px-2 rounded-xl"
                >
                  ← Volver
                </button>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-18"
              >
                {activeItem.subItems.map((sub, index) => (
                  <div
                    key={index}
                    className="flex bg-white shadow rounded-2xl p-4 hover:border hover:border-lime-700 transition"
                  >
                    <div className="flex flex-col w-1/2 items-start mr-2 justify-between">
                      <div>
                        <h4 className="font-semibold text-left">{sub.name}</h4>
                        {sub.description && (
                          <p className="text-gray-600 text-sm mt-2 text-left">{sub.description}</p>
                        )}
                      </div>
                      {sub.price && (
                        <p className="text-gray-600 font-bold text-left">{sub.price}</p>
                      )}
                    </div>
                    {sub.image && (
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-1/2 h-32 object-cover rounded-lg mb-3"
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Tabs fijos con animación */}
      <div
        className={`fixed bottom-0 left-0 right-0 flex border-t border-gray-200 bg-white z-50 shadow-lg transition-transform duration-300 ${
          showTabs ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex w-screen 2xl:w-1/2 lg:mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex">
            {menuItems.map((tab) => (
              <button
                key={tab.category}
                className={`flex-shrink-0 px-4 py-3 text-center font-medium transition duration-700 ${
                  activeTab === tab.category
                    ? "text-lime-700 border-t-2 border-lime-700"
                    : "text-gray-500 hover:text-lime-700"
                }`}
                onClick={() => {
                  setActiveTab(tab.category);
                  setActiveItem(null);
                }}
              >
                {tab.category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
