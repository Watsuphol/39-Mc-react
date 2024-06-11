import AdminHomeSector from "./components/AdminHomeSector";
import InputSector from "./components/InputSector";
import UserHomeSector from "./components/UserHomeSector";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableUser from "./components/TableUser";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Owner from "./components/Owner";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [Name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [Position, setPosition] = useState("");

    const [reload, setreload] = useState(true);

    //useEffect
    useEffect(() => {
        const fetchEmployer = async () => {
            try {
                const response = await axios.get(
                    "https://jsd5-mock-backend.onrender.com/members"
                );
                setItems(response.data);
            } catch (error) {
                console.error("JSD LOVER ERROR");
            }
        };
        fetchEmployer();
    }, [reload]);

    const inputName = (event) => setName(event.target.value);
    const inputLastName = (event) => setLastName(event.target.value);
    const inputPosition = (event) => setPosition(event.target.value);

    const saveData = async (event) => {
        event.preventDefault();
        const itemData = {
            name: Name,
            lastname: lastname,
            position: Position,
        };
        try {
            const response = await axios.post(
                "https://jsd5-mock-backend.onrender.com/members",
                itemData
            );
            setreload(!reload);
        } catch (error) {
            console.error("JSD LOVER ERROR");
        }

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
                        lastname={lastname}
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
