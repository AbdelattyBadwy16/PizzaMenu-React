import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App()
{
    return (
        <div className="conatiner">
        <Header ></Header>
        <Menu></Menu>
        <Footer></Footer>
        </div>
    )
}

function Header()
{
  return (
    <div className="header">
    <h1>FAST REACT PIZZA CO</h1>
    </div>
  )
}

function Footer()
{
  const date=new Date().toLocaleTimeString();
  const hour=new Date().getHours();
  return (
    <footer className="footer">
    {
    (hour>=0 && hour<=12)?(
      <div className="order">
        <p>
        {date},We Are Currently Open.
        </p>
        <button className="btn">Order</button>
      </div>
    ):(<p style={{textAlign:'center'}}>We Are Currently Close , Please Come back between 00:00 and 12:00</p>)
    }
    </footer>
  )
}

function Menu()
{
  return (
    <main className="menu" >
    <h2>OUR MENU</h2>
    <ul className="pizzas">
    {
      pizzaData.map((item=>{
        return(
          <Pizza obj={item} key={item.name}></Pizza>
        )
      }))
    }
    </ul>
    </main>
  )
}


function Pizza(props)
{
    return (
        <li style={{display:'flex'}} className={`pizza ${props.obj.soldOut?'sold-out':""}`}>
            <img src={props.obj.photoName} alt="pizza"/>
            <div>
            <h3>{props.obj.name}</h3>
            <p>{props.obj.ingredients}</p>
            {
            (!props.obj.soldOut)?(
            <span>{props.obj.price}</span>
            ):(<p>SOLD OUT</p>)
            } 
            </div>
        </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);

