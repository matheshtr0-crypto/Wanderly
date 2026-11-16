// import Navbar from "./components/Navbar"
// import HeroSection from "./components/HeroSection"
// import About from "./components/About"
// import { Route, Routes } from "react-router-dom"
// import { useState } from "react"




// ------------------BASIC 1ST---------------------------------------------------

// function App() {

//   return (
//     <div className="">
//        <h1>HI I'M MATHESH</h1>
//        {/* <Navbar/>  */}
//        {/* <HeroSection/>  */}
//        <About/>

         
//    </div>  
    
//    )
//  }

//  export default App

// ----------Routing Learn------14.08.26--------

// function App() {
 
//     return (
//     <div className="">
     
//        <Routes> 
//             <Route path="/about" element={<About/>}/> 
//       </Routes>

// <About/>

//    </div>  
    
//   )
// }

// export default App


// -------------------------12.08.2026------------------------------------------------------
// import { useState } from "react" 


// function App(){
//   const [data, setData] = useState("");
//   const [list, setList] = useState([]);
//    console.log(data) 
//     const arr = [1,2,3,4,5,6,7,8 ]
//     const [value,setvalue] = useState([]);
//     console.log(value)

//    function handleToSet(){
//     console.log(data)
//     setList([...list,data])
//       const hello = arr.filter((num)=> num%2==0);
//       console.log(hello)
     
//       console.log(value)

//        setvalue(hello)
//    }
//     return(
//      <>
//     { { {
//       value?.map((a,i) =>{
//         return(
//           <>
//           <li key={i}>{a}</li>
//           </> 
//         )
//       })
// } } }
//     { <div className="">{value}</div> }
//      <input
//      onChange={(e)=>setData(e.target.value)}
//      type="text" className="border"/>
//      <button onClick={handleToSet}>Click</button>


//      <div className="">
//       {list.map((items)=>(
//         <>
//         <li>{`${items}`}<button className="border" onClick={handleToSet}>Edit</button></li>
//         </>
//       ))}
//      </div>
//     </>  
//   )
// }
// export default App  

// -----------------------------------14.08.2026---PREVIOUS PROGRAM THA BUT INTHA VIDIO KAGA PATHI DELETE PANIRKOM SO ITHU AVAR VIDEO START PANDRAPA LENTHU OUTPUT CORRECT A VARUM SO ITHU PASTE PANITU START PANNU NEW A PANNA ITHU PREVIOUS PRGRM LENTHU PATHI DELETE PANATHU ITHULA THANIYA VECHURKA NEXT UM SAME THA ITHU ATHULA WORKOUT PANIRKA---------------------------------------------
// import { useState } from "react"

// function App(){
//   const [data, setData] = useState("");
//   const [list, setList] = useState([]);


//    function handleToSet(){
//     console.log(data)
//     setList([...list,data])
//     }
//     return(
//         <>
//      <input
//      onChange={(e)=>setData(e.target.value)}
//      type="text" className="border"/>
//     <button onClick={handleToSet}>Click</button>


//      <div className="">
//        {list.map((items)=>(
//          <>
//         <li>{`${items}`}<button className="border" onClick={handleToSet}>Edit</button></li>
//          </>
//        ))}
//       </div>
//      </>  
//     )
//   }
//  export default App  

// ---------------------------14.08.2026---------------------------------------START-------------

// import { useState } from "react"

// function App(){
//   const [data, setData] = useState("");
//   const [list, setList] = useState([]);


//    function handleToSet(){
//     console.log(data)
//     setList([...list,data])
//     }
     
//     function edit(index){
//       console.log(list[index])

//       const value = prompt("Edit",list[index])
//       console.log(value)
//       list[index] = value;
//       setList([list])
//       // console.log(list)

//       function handleDelete(index){
//       console.log(list[index])

//       const filteredData = list.filter((items,i)=> index)!=i)
//      console.log(filtereData)
//      setList([filteredData])


//     }
//     return(
//         <>
//      <input
//      onChange={(e)=>setData(e.target.value)}
//      type="text" className="border"/>
//     <button onClick={handleToSet}>Click</button>


//      <div className="">
//        {list.map((items,i)=>(
//          <>
//         <li key={i}>{`${items}`}<button className="border" onClick={()=>handleDelete(i)}>Delete</button></li>
//          </>
//        ))}
//       </div>
//      </>  
//     )
    
//  export default App  

// ----------------previous enoda code wrong  now chatgpt corrected code----14.08.26 -----------------

// import { useState } from "react";

// function App() {
//   const [data, setData] = useState("");
//   const [list, setList] = useState([]);

//   function handleToSet() {
//     console.log(data);
//     setList([...list, data]);
//   }

//   function edit(index) {
//     console.log(list[index]);

//     const value = prompt("Edit", list[index]);

//     if (value !== null) {
//       const updatedList = [...list];
//       updatedList[index] = value;
//       setList(updatedList);
//     }
//   }

//   function handleDelete(index) {
//     console.log(list[index]);

//     const filteredData = list.filter((items, i) => index !== i);

//     console.log(filteredData);
//     setList(filteredData);
//   }

//   return (
//     <>
//       <input
//         onChange={(e) => setData(e.target.value)}
//         type="text"
//         className="border"
//       />

//       <button onClick={handleToSet}>Click</button>

//       <div>
//         {list.map((items, i) => (
//           <li key={i}>
//             {items}

//             <button
//               className="border"
//               onClick={() => edit(i)}
//             >
//               Edit
//             </button>

//             <button
//               className="border"
//               onClick={() => handleDelete(i)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

// ---------------------------ROUTING 14.08.26--------------------------------------------------
// import { Routes, Route } from "react-router-dom"
// function App(){
//   return(
//       <>
//        <Routes>
//         <Route path="/about" element={<About/>}/>
//       </Routes> 

     
//         <div className="">HELLO</div> 
        
//         {/* <About /> */}
        
//       </>
//    )
   
//  }
//  export default App

// -----------------------BASIC FUNCTION TO CHECK-----------------------------------------------
// function App(){
//   return(
//     <>
//     <div className="">
//       MATHESH
//     </div>
//     </>
//   )
// }
// export default App

// ---------------OWN CRUD PRJCT----------------------------------------------------
// import About from "./components/About"
// // import { Route, Routes } from "react-router-dom"
// import { Link, Route, Routes } from "react-router-dom";

// function App() {
 
//     return (
//     <div className="">
     
//      <Link to="/">Home</Link>
//      {""}
//      <Link to="/about">About</Link>

//        <Routes> 
//             <Route path="/" element={<h1>Home</h1>}/>
//             <Route path="/about" element={<About/>}/>
//       </Routes>

// {/* <About/> */}

//    </div>  
    
//   )
// }

// export default App

// ------------------------------CRUD PRJCT 2 REAL----------------------------------------------

// import { useEffect, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";


// function App() {

//   const [childrens, setChildrens] = useState([]);

//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");

//   const [edit, setEdit] = useState(false);


//   // GET
//   const getChildrens = () => {

//     fetch("http://localhost:3000/childrens")

//       .then(res => res.json())

//       .then(data => {

//         setChildrens(data);

//       });

//   };


//   // Page open aagumbothu GET
//   useEffect(() => {

//     getChildrens();

//   }, []);


//   // POST
//   const addChildren = () => {

//     fetch("http://localhost:3000/childrens", {

//       method: "POST",

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         id: id,
//         name: name,
//         course: course
//       })

//     })

//       .then(res => res.json())

//       .then(data => {

//         console.log(data);

//         getChildrens();

//         setId("");
//         setName("");
//         setCourse("");

//       });

//   };


//   // EDIT
//   const editChildren = (children) => {

//     setId(children.id);
//     setName(children.name);
//     setCourse(children.course);

//     setEdit(true);

//   };


//   // PUT
//   const updateChildren = () => {

//     fetch(`http://localhost:3000/childrens/${id}`, {

//       method: "PUT",

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         name: name,
//         course: course
//       })

//     })

//       .then(res => res.json())

//       .then(data => {

//         console.log(data);

//         getChildrens();

//         setId("");
//         setName("");
//         setCourse("");

//         setEdit(false);

//       });

//   };


//   // DELETE
//   const deleteChildren = (id) => {

//     fetch(`http://localhost:3000/childrens/${id}`, {

//       method: "DELETE"

//     })

//       .then(res => res.json())

//       .then(data => {

//         console.log(data);

//         getChildrens();

//       });

//   };


//   return (

//     <>

//       {/* NAVBAR */}

//       <nav className="p-4 bg-black text-white">

//         <Link
//           to="/"
//           className="mr-5"
//         >
//           Home
//         </Link>


//         <Link to="/childrens">
//           Childrens
//         </Link>

//       </nav>


//       {/* ROUTING */}

//       <Routes>

//         <Route
//           path="/"
//           element={
//             <h1 className="text-3xl text-center mt-10">
//               Children CRUD
//             </h1>
//           }
//         />


//         <Route
//           path="/childrens"
//           element={

//             <div className="max-w-xl mx-auto mt-10">

//               <h1 className="text-3xl font-bold text-center mb-6">
//                 Children CRUD
//               </h1>


//               {/* FORM */}

//               <div className="space-y-3">

//                 <input
//                   className="w-full border p-2"
//                   placeholder="ID"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   disabled={edit}
//                 />


//                 <input
//                   className="w-full border p-2"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />


//                 <input
//                   className="w-full border p-2"
//                   placeholder="Course"
//                   value={course}
//                   onChange={(e) => setCourse(e.target.value)}
//                 />


//                 {edit ? (

//                   <button
//                     onClick={updateChildren}
//                     className="w-full bg-blue-600 text-white p-2"
//                   >
//                     Update
//                   </button>

//                 ) : (

//                   <button
//                     onClick={addChildren}
//                     className="w-full bg-black text-white p-2"
//                   >
//                     Add
//                   </button>

//                 )}

//               </div>


//               {/* DATA */}

//               <div className="mt-8">

//                 {childrens.map((children) => (

//                   <div
//                     key={children.id}
//                     className="border p-4 mb-3"
//                   >

//                     <p>
//                       ID: {children.id}
//                     </p>

//                     <p>
//                       Name: {children.name}
//                     </p>

//                     <p>
//                       Course: {children.course}
//                     </p>


//                     <div className="mt-3">

//                       <button
//                         onClick={() =>
//                           editChildren(children)
//                         }
//                         className="bg-gray-300 px-3 py-1 mr-2"
//                       >
//                         Edit
//                       </button>


//                       <button
//                         onClick={() =>
//                           deleteChildren(children.id)
//                         }
//                         className="bg-red-500 text-white px-3 py-1"
//                       >
//                         Delete
//                       </button>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           }
//         />

//       </Routes>

//     </>

//   );

// }


// export default App; 





