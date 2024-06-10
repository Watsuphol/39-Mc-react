import React from "react";

function TableUser({ items }) {
  return (
    <div>
      <div className="flex justify-center items-center p-10 flex-col w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Position
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableUser;
