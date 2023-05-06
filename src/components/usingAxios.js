import axios from "axios";
import React, { useEffect, useState } from "react";
import './usingAxios.css'

const UsingAxios = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    axios
      .get(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=CAD"
      )
      .then((response) => {
        setUsers(response.data.coins);
      });
      
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div classNAme="mainDiv">
    
    <h1>All Cryptocurrencies</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table className="tableStyle">
        {console.log(users[0])}
        <thead>
          <tr>
            <td>Rank</td>
            <td>logo</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
           {/* Filtering to check for the searched crypto */}
           {users
            .filter((user) => {
              return user.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((user,id) => {
              return (
                <>
                  <tr id={id} >
                    <td className="rank">{user.rank}</td>
                    <td className="logo">
                        <img src={user.icon} alt="logo" width="30px" />
                    </td>
                    <td className="name" onClick={(e)=>{console.log(e.target)}}>{user.name}</td>
                    <td>${user.price.toFixed(2)}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsingAxios;

