import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Adeesha",
      lastName: "Gunawardana",
      email: "test@test.com",
    },
    {
      id: 2,
      firstName: "Ishara",
      lastName: "Madhuhansi",
      email: "ishu@test.com",
    },
    {
      id: 3,
      firstName: "Poorni",
      lastName: "Gunawardana",
      email: "poo@test.com",
    },
    {
      id: 4,
      firstName: "Maduka",
      lastName: "Wickramage",
      email: "wicky@test.com",
    },
    {
      id: 5,
      firstName: "Poornaka",
      lastName: "Nadeeshan",
      email: "killerb@test.com",
    },
  ];
  return (
    <div className='container'>
      <h2 className="text-center"> List Of Employees </h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th> Employee ID </th>
            <th> Employee First Name </th>
            <th> Employee Last Name </th>
            <th> Employee Email </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td> {employee.id} </td>
              <td>{employee.firstName} </td>
              <td> {employee.lastName} </td>
              <td> {employee.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
