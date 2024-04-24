import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Cards from './Components/Cards';
import Filter from './Components/Filter';
import { apiUrl,filterData } from './data';
import { useEffect, useState } from 'react';

import Snipper from './Components/Snipper';
import {toast} from "react-toastify";
function App() {
const [Course,setCourse]=useState(null);
const [loading,setLoading]=useState(true);
async function fetchdata(){
setLoading(true);
try{
let response =await fetch(apiUrl);
let output=await response.json();
setCourse(output.data);

//output
}
catch(error){
toast.error("please god help me");
}
setLoading(false);

}
useEffect(()=>{

  fetchdata();
},[])
return (
    <div >
      <div>
    <Navbar></Navbar>
    </div>
    <div>
      <Filter filterData={filterData}></Filter>
    </div>
    <div>
      {
        loading?(<Snipper></Snipper>):(<Cards Course={Course}></Cards>)
      }
    </div>
    </div>
  );
}

export default App;
