import React,{useState} from "react";
import Menu from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const SidebarPage = ({children}) => {
    const[isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(true)
    }

    
  const MenuItem = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
        path: "/languagemanagement",
        name: "LanguageManagement",
      },
      {
        path: "/eventManagement",
        name: "EventManagement",
      },
      {
        path: "/questionManagement",
        name: "QuestionManagement",
      },
      {
        path: "/adminManagement",
        name: "AdminManagement",
      },
   
  ];
  return (
    <>
    
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Admin Panel</h1>
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


