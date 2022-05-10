import React from "react";

import { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Pagination from "../components/Pagination";
import "../App.css" 
import Table from "../components/Table";
const Main = () => {
  const { users } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const perpage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const startIndex = (page - 1) * perpage;
  const selectedUsers = users.slice(startIndex, startIndex + perpage);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [statuslist, setStatuslist] = useState([]);
  const navigate = useNavigate();
 useEffect(() => {
    search
            ? setTotalPages(Math.ceil(users.filter((val) =>
                val.name.toLowerCase().includes(search.toLowerCase())
              ).length / perpage)) :
    status
            ? setTotalPages(Math.ceil(statuslist.length/ perpage)) :

    setTotalPages(Math.floor(users.length / perpage));
 }, [users,search,status])
 
  const handleClick = (num) => {
    setPage(num);
  };
  const handleDetail = (id) => {
    navigate(`/details/${id}`);
  };
  const handleStatus = (e) => {
    if (e.target.value === "passive" || e.target.value === "active") {
      setStatus(e.target.value);

      setStatuslist(users.filter((val) => e.target.value === val.status));
      console.log(statuslist);
    } else if (e.target.value === "all") {
      setStatuslist(users);
    }
    setPage(1);
  };

  const fonk = () => {
    document.getElementById("test-table-xls-button").click();
  };
  const handleSearch =(e) => {
    setSearch(e.target.value);
    setPage(1);
  }
 
  return (
    <div className="container">
      <h1 id="title">Artımetrik Task</h1>
      <div className="searchandselect">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={search}
          className="searchbar"
        />
        <div>
          <label>Select status</label>
          <select
            className="selectbox"
            id="status"
            defaultValue={"all"}
            onChange={handleStatus}
          >
            <option value="passive">passive</option>
            <option value="active">active</option>
            <option value="all">all</option>
          </select>
        </div>
      </div>
      {
        <div className="usertable">
          {search
            ? users
                .filter((val) =>
                  val.name.toLowerCase().includes(search.toLowerCase())
                )
                .slice(startIndex, startIndex + perpage)
                .map((user) => (
                  <li
                    className="user"
                    key={user.id}
                    onClick={() => handleDetail(user.id)}
                  >
                    {user.id} {user.name}
                  </li>
                ))
            : status
            ? statuslist.slice(startIndex, startIndex + perpage).map((user) => (
                <li
                  className="user"
                  key={user.id}
                  onClick={() => handleDetail(user.id)}
                >
                  {user.id} {user.name}
                </li>
              ))
            : selectedUsers.map((user) => (
                <li
                  className="user"
                  key={user.id}
                  onClick={() => handleDetail(user.id)}
                >
                  {user.id} {user.name}
                </li>
              ))}
        </div>
      }
      <Table />
      <div className="info">
        <br />
        <p>Toplam </p>
        <p style={{ color: "rgb(141, 109, 49)" }}>
          { search
            ? users.filter((val) =>
                val.name.toLowerCase().includes(search.toLowerCase())
              ).length :
              status
            ? statuslist.length
            
            : users.length}
        </p>
        <p> kullanıcı mevcuttur</p>
        <br />
        <Pagination totalPages={totalPages} handleClick={handleClick} />
        <button className="btn_download" onClick={fonk}>
          Download
        </button>
        
      </div>
    </div>
  );
};

export default Main;
