import React, { useState } from "react";
import { BiFilter,BiPlusMedical } from "react-icons/bi";
const LanguageManagement = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }
  return (
    <div
      style={{
        display: "flex",
        width: 1500,
        backgroundColor: "yellow",
        height: 300,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 1000,
          height: 300,
          backgroundColor: "red",
          marginTop: -30,
          marginLeft: 40,
          
        }}
      >
        <div style={{ width: 1000, height: 40, backgroundColor: "pink",display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',marginLeft:10}}>
          <h5>Language</h5>
          <input
            style={{marginLeft: 10,width:500,height: 30,borderRadius: 12,border:0}}
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <h3><BiFilter/></h3>
          <div style={{width:25,height:25,borderRadius:12,background:'#8F00FF',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h3><BiPlusMedical/></h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageManagement;
