import React ,{useState} from "react";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Adventure from "../components/Adventure";
import '../App.css';
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";
import "bootstrap/dist/js/bootstrap.min";

const Content = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-repeat:no-repeat;
`;

const Teks = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-style: 'Poppins';
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    p{
        font-style: 'Poppins';
        justify-content:center;
        font-size: 25px;
        font-weight: 20;
        letter-spacing: 0.03em;
    }
    
`;

const Shape = styled.div`
    // background-color:green;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Button = styled.button`
    background-color:#277BC0;
    width:fit-content;
    height: 40px;
    padding-bottom:5px;
    border-color:transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-style: Poppins;
    font-weight: 600;
    font-size:17px;
    color:white;
    &:hover{
        background-color:#4FB0FF;
    }
    p{
        padding-left:10px;
        padding-right:10px;
        padding-top:5px;
    }
`;

function Profil() {
  return (
   
    <div>
        
        <Navbar/>
        
        <Content style={{ backgroundImage:"url('./foto/hero1.png')",marginTop:'90px'}}>
            <div style={{display:'flex', flexDirection:'column',height:'700px', width:'100%', paddingTop:'400px', justifyContent:'left'}}>       
                <div className="col-md-8 offset-1" style={{flexWrap:'wrap'}}>
                    <Teks style={{display:'flex', justifyContent:'left'}}>THIS IS PROFILE PAGE</Teks>
                </div>
            </div>
        </Content>
        
        <Footer />
    </div>
  )
}

export default Profil