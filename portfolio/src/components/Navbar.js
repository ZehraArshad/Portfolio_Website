import { use, useEffect, useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import mail from "../assets/img/mail.svg";
import github from "../assets/img/github.svg";


export const NavBar = ()=>{
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScroll] = useState(false);


    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScroll(true);
            }
            else{
                setScroll(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
    <Container>
      <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
      <img className="logo" src={logo} alt="Logo"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActiveLink('home')}}>
            Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
    
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/zehraarshad/" target="_blank"><img src={navIcon1} alt="linkedin"/></a>
                <a href="https://github.com/ZehraArshad" ><img src={github} alt=""/></a>
                <a href="mailto:zehraarshadmulla@gmail.com" ><img src={mail} alt="email"/></a>
                

            </div>
            <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
            </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}