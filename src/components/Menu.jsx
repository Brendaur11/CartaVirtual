import { useState } from "react";
import { menuItems } from "../data/menu";

function Menu() {
  const [activeTab, setActiveTab] = useState(menuItems[0].category);

  const currentTab = menuItems.find((tab) => tab.category === activeTab);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex justify-center items-center bg-lime-950 h-1/5" id="fondoMenu">
      <h1 className="text-2xl text-gray-100 font-normal">Bienvenido a PESTO</h1>
      </div>
      {/* Contenido */}
      <div className="flex-1 overflow-auto rounded-t-3xl bg-gray-100 p-4">
        {currentTab.items.map((item, index) => (
          <div key={index} className="mb-4 bg-white shadow rounded-2xl p-4">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            {item.description && (
              <p className="text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Tabs */}
      <div className="flex border-t border-gray-200 bg-white">
        {menuItems.map((tab) => (
          <button
            key={tab.category}
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === tab.category
                ? "text-blue-500 border-t-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
