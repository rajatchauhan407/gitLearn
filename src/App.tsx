import React,{useCallback, useEffect, useMemo, useState} from 'react';
import { setConstantValue } from 'typescript';
import './App.css';
import Greeter from './components/greeter';
import ListOfTenThings from './components/listOfThings';
import ShoppingList from './components/shoppingList';
import TextInputFocus from './components/textInputFocus';
import useName from './hooks/useName';
export interface item{
  id:number,
  product:string,
  quantity:number
}

function App() {

function printNumber(){
  const num =5;
  const interval =  setInterval(()=>{
        console.log(num);
    },1000);
  setTimeout(()=>{
    clearInterval(interval);
  },10000)
}


const [firstName, setFirstName] = useState("Rajat");
const [num, setNum] = useState([1,2,3]);
const [items, setItems] = useState<item[]>([
  {id:1, product:"bag", quantity:3},
  {id:2, product:"pencil", quantity:4}
]);

const {greeting, getGreeting} = useName();

const data = useMemo(()=>[3,5,6],[]);
const handleName = (event:any)=>{
  setFirstName(event.target.value);
  console.log(event.target.value);
}
// const addFunc = ()=>{
//   console.log("Hello");
// }
let addfunc = ()=>{
  console.log("Hello World !");
};
const handleGreeting = ()=>{
  // setFirstName("Robin");
  greeting("Rajat");
}
const handleGetGreeting = ()=>{
  getGreeting();
}
useEffect(()=>{
  setNum(data);
  addfunc();
},[setNum, addfunc]);

const onHandleExpense = (name:string) => {
  console.log(name)
  console.log("Hello I'm in the Parent !!!!");
}
// useEffect(()=>{
//   console.log("Hey");
//   setNum(data);
//   addFunc();
// },[setNum,addFunc]);
//  return React.createElement('div',{className:'App'},
//  React.createElement('h1',{},"Hello World"), React.createElement(Greeter,{person:"Rajat"})
//  );

//  return React.createElement('div',{className:"App"},
//  React.createElement(Greeter,{person:"Rajat"}),React.createElement(ShoppingList,{items:items}));
  return (
    <div className="App">
      <Greeter person="Rajat" handleExpense={onHandleExpense}/>
      <ShoppingList
      items={items}
      />
      <input 
        placeholder='Enter Your First Name'
        value={firstName}
        onChange={handleName}
      />
      <div>
  Hellooo        World
</div>
      <TextInputFocus/>
      <ListOfTenThings/>
      <button onClick={printNumber}>click Me</button>
      <button onClick={handleGetGreeting}>get Greeting</button>
    </div>
  );
}

export default App;
