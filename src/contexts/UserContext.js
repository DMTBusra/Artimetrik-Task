import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [details, setDetails] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const getUserDetail = async () => {
      const res = await axios.get(
        "https://run.mocky.io/v3/0faaa10a-c0ca-4d79-944b-02bc6e00a02d"
      );

      setDetails(JSON.parse(res.data.replaceAll('"job"', ',"job"')));

    };

    const getUserCourses = async () => {
      const res = await axios.get(
        "https://run.mocky.io/v3/041cfdde-2ef3-4a8e-b622-763613da672d"
      );
      const { data } = res;
      const modifiedData = data.map(({ user_id, courses }) => ({
        user_id,
        courses: [courses],
      }));
      setCourses(modifiedData);
    };

    const getUsers = async () => {
      const res = await axios.get(
        "https://run.mocky.io/v3/9ea07671-86ea-4b0a-9b3b-0f195ccab3a3"
      );

      setUsers(res.data);
    };

    getUsers();
    getUserDetail();
    getUserCourses();
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        details,
        setCurrentUser,
        setDetails,
        courses,
        setCourses,
        users,
        setUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
