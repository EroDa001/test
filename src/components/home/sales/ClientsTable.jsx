import React, { useState } from 'react';
import clientsData from './clients.json';

const ClientsTable = () => {
  const [expandedClient, setExpandedClient] = useState(null);

  const toggleExpandedClient = (clientId) => {
    if (expandedClient === clientId) {
      setExpandedClient(null);
    } else {
      setExpandedClient(clientId);
    }
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Client Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contacts
            </th>
            <th className="px-6 py-3"></th> 
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clientsData.map((client) => (
            <React.Fragment key={client.id}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap cursor-pointer" onClick={() => toggleExpandedClient(client.id)}>
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full border-2 border-supplair-primary mr-2"
                      src={client.picture}
                      
                    />
                    <div className="truncate">{client.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {[...Array(client.rate)].map((_, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                    {[...Array(5 - client.rate)].map((_, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.state}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="bg-supplair-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-2" onClick={() => toggleExpandedClient(client.id)}>
                    {expandedClient === client.id ? 'Hide Orders' : 'Show Orders'}
                  </button>
                </td>
              </tr>
              {expandedClient === client.id && (
                <tr>
                  <td colSpan="5" className="p-5">
                    <table className=" w-full divide-y border-supplair-primary border-2 rounded-xl divide-supplair-primary divide-2">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-supplair-primary">
                        {client.orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {order.order_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              ${order.total_amount.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
