import AdminHomeSector from "./components/AdminHomeSector";
import InputSector from "./components/InputSector";
import UserHomeSector from "./components/UserHomeSector";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableUser from "./components/TableUser";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Owner from "./components/Owner";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Position, setPosition] = useState("");

  const inputName = (event) => setName(event.target.value);
  const inputLastName = (event) => setLastName(event.target.value);
  const inputPosition = (event) => setPosition(event.target.value);

  const saveData = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      name: Name,
      lastName: LastName,
      position: Position,
    };
    setItems((prevItems) => [...prevItems, itemData]);
    setName("");
    setLastName("");
    setPosition("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: "/User",
      element: (
        <div>
          <NavBar />
          <UserHomeSector />
          <TableUser items={items} />
        </div>
      ),
    },
    {
      path: "/Admin",
      element: (
        <div>
          <NavBar />
          <AdminHomeSector />
          <InputSector
            inputName={inputName}
            inputLastName={inputLastName}
            inputPosition={inputPosition}
            saveData={saveData}
            items={items}
            Name={Name}
            LastName={LastName}
            Position={Position}
            deleteItem={deleteItem}
            setItems={setItems}
          />
        </div>
      ),
    },
    {
      path: "/Owner",
      element: (
        <div>
          <NavBar />
          <Owner />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
