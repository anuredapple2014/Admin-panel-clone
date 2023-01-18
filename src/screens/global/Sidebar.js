import React,{useState} from "react";
import Menu from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import{FaTh,FaUserAlt,FaRegChartBar,FaCommentAlt} from 'react-icons/fa'
import { NavLink } from "react-router-dom";


const SidebarPage = ({children,onPress}) => {
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
    
      <div className="sidebar">
        <div className="top_section">
          <h4 className="logo">Admin Panel</h4>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Menu />}
            onClick={onPress}
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
       
        <main>{children}</main>
    
    </>
  );
};

export default SidebarPage;


