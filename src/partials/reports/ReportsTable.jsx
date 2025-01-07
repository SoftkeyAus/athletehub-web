import React, { useState, useEffect } from 'react';
import Report from './ReportsTableItem';

import Image01 from '../../assets/images/user-40-01.jpg';
import Image02 from '../../assets/images/user-40-02.jpg';
import Image03 from '../../assets/images/user-40-03.jpg';
import Image04 from '../../assets/images/user-40-04.jpg';
import Image05 from '../../assets/images/user-40-05.jpg';
import Image06 from '../../assets/images/user-40-06.jpg';
import Image07 from '../../assets/images/user-40-07.jpg';
import Image08 from '../../assets/images/user-40-08.jpg';
import Image09 from '../../assets/images/user-40-09.jpg';
import Image10 from '../../assets/images/user-40-10.jpg';

function ReportsTable({ selectedItems }) {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      transactionId: 'TX123456',
      datePaid: '2024-05-01',
      amount: 100.5,
      invoiceDate: '2024-04-25',
    },
    {
      id: 2,
      name: 'Alice Smith',
      transactionId: 'TX234567',
      datePaid: '2024-05-02',
      amount: 75.2,
      invoiceDate: '2024-04-27',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      transactionId: 'TX345678',
      datePaid: '2024-05-03',
      amount: 120.75,
      invoiceDate: '2024-04-28',
    },
    {
      id: 4,
      name: 'Emily Brown',
      transactionId: 'TX456789',
      datePaid: '2024-05-04',
      amount: 90.0,
      invoiceDate: '2024-04-29',
    },
    {
      id: 5,
      name: 'David Wilson',
      transactionId: 'TX567890',
      datePaid: '2024-05-05',
      amount: 150.8,
      invoiceDate: '2024-04-30',
    },
    {
      id: 6,
      name: 'Sarah Taylor',
      transactionId: 'TX678901',
      datePaid: '2024-05-06',
      amount: 80.25,
      invoiceDate: '2024-05-01',
    },
    {
      id: 7,
      name: 'James Anderson',
      transactionId: 'TX789012',
      datePaid: '2024-05-07',
      amount: 200.0,
      invoiceDate: '2024-05-02',
    },
    {
      id: 8,
      name: 'Emma Johnson',
      transactionId: 'TX890123',
      datePaid: '2024-05-08',
      amount: 110.6,
      invoiceDate: '2024-05-03',
    },
    {
      id: 9,
      name: 'Ryan Clark',
      transactionId: 'TX901234',
      datePaid: '2024-05-09',
      amount: 130.9,
      invoiceDate: '2024-05-04',
    },
    {
      id: 10,
      name: 'Olivia Martinez',
      transactionId: 'TX012345',
      datePaid: '2024-05-10',
      amount: 85.75,
      invoiceDate: '2024-05-05',
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(members);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          All Members <span className="text-slate-400 dark:text-slate-500 font-medium">{members.length}</span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Transaction Id</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Invoice Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Paid Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
              {list.map((customer) => {
                return (
                  <Report
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    transactionId={customer.transactionId}
                    datePaid={customer.datePaid}
                    amount={customer.amount}
                    invoiceDate={customer.invoiceDate}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(customer.id)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsTable;
