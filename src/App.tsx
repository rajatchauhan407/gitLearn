import React,{useEffect, useMemo, useState} from 'react';
import { setConstantValue } from 'typescript';
import './App.css';
import Greeter from './components/greeter';
import ListOfTenThings from './components/listOfThings';
import ShoppingList from './components/shoppingList';
import TextInputFocus from './components/textInputFocus';

export interface item{
  id:number,
  product:string,
  quantity:number
}

function App() {
const [firstName, setFirstName] = useState("");
const [num, setNum] = useState([1,2]);
const [items, setItems] = useState<item[]>([
  {id:1, product:"bag", quantity:3},
  {id:2, product:"pencil", quantity:4}
]);
const data = useMemo(()=>[3,5,6],[]);
const handleName = (event:any)=>{
  setFirstName(event.target.value);
  console.log(event.target.value);
}
const addFunc = ()=>{
  console.log("Hello");
}

useEffect(()=>{
  console.log("Hey");
  setNum(data);
  addFunc();
},[setNum,addFunc]);
 
//  return React.createElement('div',{className:"App"},
//  React.createElement(Greeter,{person:"Rajat"}),React.createElement(ShoppingList,{items:items}));
  return (
    <div className="App">
      <Greeter person="Rajat"/>
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
    </div>
  );
}

export default App;
