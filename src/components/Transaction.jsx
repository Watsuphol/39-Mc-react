const Transaction = ({ items, deleteItem, setItems }) => {
  const deleteAll = () => {
    setItems((items = []));
  };
  return (
    <div>
      <div className="flex justify-center items-center p-10 flex-col w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider ">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((items, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {items.position}
                </td>
                <td>
                  <button
                    onClick={() => deleteItem(items.id)}
                    className="bg-red-500 text-white py-1 px-3 ml-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <button
            onClick={deleteAll}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
