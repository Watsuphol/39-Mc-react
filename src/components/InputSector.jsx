import Transaction from "./Transaction";

const InputSector = ({
  inputName,
  inputLastName,
  inputPosition,
  saveData,
  items,
  Name,
  LastName,
  Position,
  deleteItem,
}) => {
  return (
    <div>
      <form onSubmit={saveData}>
        <label className="px-24 text-2xl font-bold my-5 block">
          Create User Here
        </label>
        <div className="flex gap-5 px-24">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputName}
            value={Name}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputLastName}
            value={LastName}
          />
          <input
            type="text"
            placeholder="Position"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputPosition}
            value={Position}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-5 font-bold text-base rounded-lg hover:bg-blue-600 hover:ring hover:ring-blue-300"
          >
            SAVE
          </button>
        </div>
      </form>
      <Transaction items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default InputSector;
