import React from "react";
import { useEffect, useState, useContext } from "react";
import Converter from "./Converter";
import { UserContext } from "../contexts/UserContext";

const Courses = ({ id }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [currentCourses, setCurrentCourses] = useState(
    currentUser.courses ?? []
  );

  useEffect(() => {
    setCurrentUser({ ...currentUser, courses: [...currentCourses] });
  }, [currentCourses]);
// console.log(currentCourses)
  const addCourses = (e) => {
    setCurrentCourses([
      ...currentCourses,
     { 
        course_name: e.target.value,
        measured_at: Math.floor(Math.random()*10000),
        completed_at: new Date().toLocaleTimeString(),
     }
    ]);
    
  };

  return (
    <div className="courses">
      <p className="title_detail">Course Info</p>
      
      <table id="table-to-xls">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Measured At</th>
            <th>Completed At</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses?.map((course,ix) => (
            <tr key={ix}>
              <td>{course.course_name}</td>
              <td>
                <Converter mili={course.measured_at} />
              </td>
              <td>{course.completed_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add_course">
        <br />
        <label >Kurs Ekle:</label>
        <select name="course" onChange={addCourses}>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="C++">C++</option>
          <option value="React">React</option>
        </select>
      </div>
    </div>
  );
};

export default Courses;
