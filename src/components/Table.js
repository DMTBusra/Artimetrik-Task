import React from 'react'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { UserContext } from '../contexts/UserContext';
import {  useContext } from "react";
import Converter from './Converter';
const Table = () => {

    const { users,courses,details } = useContext(UserContext);
  
  console.log(users);
  // console.log(courses[0].courses[0].course_name);
  console.log(details)

    
  return (
    <div style={{ display: "none" }}>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />

      <div>
        <table id="table-to-xls">
          <thead>
            <tr>
              <th>CourseName</th>
              <th>MeasuredAt</th>
              <th>Complated Date</th>
              <th>Name</th>
              <th>Job</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i) => (
              <tr key={i.id}>
                {courses
                  .filter((cour) => cour.user_id === +i.id)
                  .map((cour) => (
                    < React.Fragment key={i.id}>
                      <td>{cour.courses[0].course_name}</td>
                      <td>
                        
                        <Converter mili={cour.courses[0].measured_at} />
                      </td>
                      <td>{cour.courses[0].completed_at}</td>
                    </React.Fragment>
                  ))}

                {users
                  .filter((user) => user.id === +i.id)
                  .map((user) => (
                    < React.Fragment key={i.id}>
                      <td>{user.name}</td>
                    </React.Fragment>
                  ))}

                {details
                  .filter((det) => det.user_id === +i.id)
                  .map((det) => (
                    <React.Fragment key={i.id}>
                      <td> {det.job}</td>
                      <td> {det.age}</td>
                    </React.Fragment>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table

 