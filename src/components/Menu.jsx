import { useState } from "react";
import { menuItems } from "../data/menu";

function Menu() {
  const [activeTab, setActiveTab] = useState(menuItems[0].category); // Categoría seleccionada
  const [activeItem, setActiveItem] = useState(null); // Item dentro de la categoría (ej: Focaccias)

  const currentTab = menuItems.find((tab) => tab.category === activeTab);

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Header */}
      <div className="flex justify-center items-center h-1/5" id="fondoMenu">
        <h1 className="text-2xl text-gray-100 font-normal">Bienvenido a PESTO</h1>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-auto rounded-t-3xl bg-gray-100 p-4">
        {/* <h2 className="text-xl font-semibold mb-4 bg-lime-950 rounded-3xl p-2 text-gray-100">{activeTab}</h2> */}

        {/* Si NO hay un item activo → mostrar lista de items */}
        {!activeItem &&
          currentTab.items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-4 mb-3 cursor-pointer hover:border hover:border-lime-700 transition"
              onClick={() => item.subItems ? setActiveItem(item) : null}
            >
              <h3 className="font-semibold text-lg">{item.name}</h3>
              {item.description && (
                <p className="text-gray-600 text-sm">{item.description}</p>
              )}
            </div>
          ))}

        {/* Si hay un item activo → mostrar sus subItems */}
        {activeItem && (
          <div>
            <div className="flex ml-4">
              <button
                onClick={() => setActiveItem(null)}
                className="mb-4 text-gray-100 bg-gray-500 px-2 rounded-xl"
              >
                ← Volver
              </button>
            </div>
            {/* <h3 className="text-lg font-bold mb-3">{activeItem.name}</h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeItem.subItems.map((sub, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow rounded-2xl p-4 hover:border hover:border-lime-700 transition"
                >
                  {/* Columna izquierda */}
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

                  {/* Imagen */}
                  {sub.image && (
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="w-1/2 h-32 object-cover rounded-lg mb-3"
                    />
                  )}
                </div>
              ))}
            </div>

          </div>
        )}
      </div>

      {/* Bottom Tabs */}
      <div className="flex border-t border-gray-200 bg-white">
        {menuItems.map((tab) => (
          <button
            key={tab.category}
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === tab.category
                ? "text-lime-700 border-t-2 border-lime-700"
                : "text-gray-500 hover:text-lime-700"
            }`}
            onClick={() => {
              setActiveTab(tab.category);
              setActiveItem(null); // reset al cambiar de categoría
            }}
          >
            {tab.category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
