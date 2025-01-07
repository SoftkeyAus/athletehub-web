import React, { useState, useEffect } from 'react';
import Member from './MembersTableItem';

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

function MembersTable({ selectedItems }) {
  const members = [
    {
      id: 1,
      image: Image01,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: '+1234567890',
      trainingType: 'Fitness',
      ageGroup: '30-40',
    },
    {
      id: 2,
      image: Image01,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      mobile: '+1987654321',
      trainingType: 'Yoga',
      ageGroup: '20-30',
    },
    {
      id: 3,
      image: Image01,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      mobile: '+1122334455',
      trainingType: 'Pilates',
      ageGroup: '40-50',
    },
    {
      id: 4,
      image: Image01,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.brown@example.com',
      mobile: '+1555666777',
      trainingType: 'Cardio',
      ageGroup: '20-30',
    },
    {
      id: 5,
      image: Image01,
      firstName: 'David',
      lastName: 'Wilson',
      email: 'david.wilson@example.com',
      mobile: '+1444333222',
      trainingType: 'CrossFit',
      ageGroup: '30-40',
    },
    {
      id: 6,
      image: Image01,
      firstName: 'Sarah',
      lastName: 'Taylor',
      email: 'sarah.taylor@example.com',
      mobile: '+1777888999',
      trainingType: 'Swimming',
      ageGroup: '20-30',
    },
    {
      id: 7,
      image: Image01,
      firstName: 'James',
      lastName: 'Anderson',
      email: 'james.anderson@example.com',
      mobile: '+1666777888',
      trainingType: 'Martial Arts',
      ageGroup: '40-50',
    },
    {
      id: 8,
      image: Image01,
      firstName: 'Emma',
      lastName: 'Johnson',
      email: 'emma.johnson@example.com',
      mobile: '+1888777666',
      trainingType: 'Dance',
      ageGroup: '20-30',
    },
    {
      id: 9,
      image: Image01,
      firstName: 'Ryan',
      lastName: 'Clark',
      email: 'ryan.clark@example.com',
      mobile: '+1222333444',
      trainingType: 'Weightlifting',
      ageGroup: '30-40',
    },
    {
      id: 10,
      image: Image01,
      firstName: 'Olivia',
      lastName: 'Martinez',
      email: 'olivia.martinez@example.com',
      mobile: '+1999888777',
      trainingType: 'Running',
      ageGroup: '20-30',
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
                {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <span className="sr-only">Favourite</span>
                </th> */}
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">First Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Last Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Email</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Mobile</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Training Type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Age Group</div>
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
                  <Member
                    key={customer.id}
                    id={customer.id}
                    image={customer.image}
                    firstName={customer.firstName}
                    lastName={customer.lastName}
                    email={customer.email}
                    mobile={customer.mobile}
                    trainingType={customer.trainingType}
                    ageGroup={customer.ageGroup}
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

export default MembersTable;
