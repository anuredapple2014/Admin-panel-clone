import React,{useState} from "react";
import Menu from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import{FaUserAlt} from 'react-icons/fa'
import { NavLink } from "react-router-dom";


const SidebarPage = (props) => {
    const[isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(true)
    }

    
  const MenuItem = [
    
      { 
        icon:<FaUserAlt/>,
        path: "/",
        name: "LanguageManagement",
      },
      { 
        icon:<FaUserAlt/>,
        path: "/eventManagement",
        name: "EventManagement",
      },
      {
        icon:<FaUserAlt/>,
        path: "/questionManagement",
        name: "QuestionManagement",
      },
      {
        icon:<FaUserAlt/>,
        path: "/adminManagement",
        name: "AdminManagement",
      },
   
  ];
  return (
    <>
    {/* <div style={{ width: isOpen ? "500px" : "50px" }} className="container"> */}
      <div className="sidebar" style={{ width: isOpen ? "500px" : "40px" }}>
        <div className="top_section">
          <h1><FaUserAlt/></h1>
          <h4 className="logo" style={{marginLeft:12}}>Admin Panel</h4>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Menu />}
            onClick={toggle}
          ></Button>
        </div>
        {
           MenuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="link_text">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
           ))
        }
           
           
        </div>
       
        <main>{props.children}</main>
        {/* </div>  */}
    </>
  );
};

export default SidebarPage;


