BASIC CODE (COMMON)
* MAKE SURE while you are exporting components use default; while importing {} is not needed
*import React from "react";
*import ReactDOM from "react-dom/client";
*import './index.css';
*In index.js u are importing ur component file 
*In Component file u r importing ur data file .while importing {}is needed.

*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React, { useState,useEffect} from "react";
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState,useEffect} from "react";
function App(){
  function handle(e){
    e.preventDefault();//When you click Submit, the browser will refresh the page — that’s the default behavior of submitting a form.Now, when you submit the form:
The page won’t refresh "hello" is logged to the console


    console.log("hello");
  }
  return(
  <>

  <form onSubmit={handle}>
    <label>NAME</label>
    <input type="text"/>
    <button type="submit">submit</button>

  </form>


  </>
  );
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------



                                                          //Ternary operator
// function App(){
//   const [text,setText]=useState("")
//   function handle(){
//     setText("hi");
//   }
//   return(
//     <>
//        {text ?<h1>welcome</h1> : <h1>verybad</h1>} */
//      {text && <h1>hello</h1>}
//     <button onClick={handle}>clich here</button>
//     </>
//   );
// }

                                  //short circuit evaluvation
// function App(){
//   const [text,setText]=useState("");
//   const firstvalue=text || "hello";//or first value will get print
//   const secondvalue=text && "hello";// and second value will get print
//   return(
//     <><h1>{firstvalue}</h1>
//     <h1>{secondvalue}</h1>
//     </>
//   );
// }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                   //multiple return statements
// import { data } from "./data";
// console.log(data);
// function App(){
//   const [loading,setLoading]=useState(false);
//   if(loading){// we can't write if statements inside return thats 
//   // why we write it outside
//     return <h1>manikanata</h1>
//   }
//   return(
//     <><h1>microdegree</h1></>
//   );
// }
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                         // 
// const url='https://api.github.com/users'
// function App(){
//    const [gusers,setGuser]=useState([]);
 
//   async function getdata(){
//     const response=await fetch(url);// to fetch data
//     const users=await response.json();// to store data
//     setGuser(users);
//   }

//   useEffect(()=>{
//     getdata();

//   },[]);

//   return(
//   <>
//   {gusers.map((guser)=>{
//     return <li>{guser.login}</li>
//   })}

//   </>
//   );
// }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------


                                                                         // useEffect
// function App() {
//   const [teams, setTeam] = useState(data);
//     useEffect(()=>{
//     console.log("hi");

//   },[]);

//   function handle(){
//     setTeam([]);

//   }

//   return (
//     <>
//       {teams.map((team) => (
//         <div key={team.id}>{team.name}</div>
//       ))}
//       <button onClick={handle}>CLICK HERE</button>
//     </>
//   );
// }
------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default App;
















