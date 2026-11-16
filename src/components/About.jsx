// --------------------OUTLINE CSS IMPORT---------and ROUTING---------------------
// import "../components/About.css"




  
// function About() {


//     return(
//         <>
//         <h1  className="container">Hello Mathesh</h1>
//         </>
//     )
    
// }
// export default About;

// -------------------------------------------21.08.26-------------------for backend fetch---------


// import { useState } from "react";
// import { useEffect } from "react";



// function About() {


//   const [data,  setData] = useState([])
    
//   useEffect(()=>{
//         console.log("Hello")
//     fetch("http://localhost:3000/userData")
//     .then(res=>res.json())
//     .then(data=>setData(data)) //console.log replace set data
//     .catch((err)=>console.log(err))
//     },[])
    
//     console.log(data)
    
//     return(
//         <>
//         <h1  className="container">Hello Mathesh</h1>

//         {data.map((items)=> {
//             return(
//             <div className="">
//                 <li>{items.id}</li>
//                 <li>{items.name}</li>

//             </div>
//             )
//         })}
//         </>
//     )
    
// }
// export default About; 

// -----------------------24.08.26------------------------------------------

// import { useState } from "react";
// import { useEffect } from "react";



// function About() {


//   const [data,  setData] = useState([])

//  const [id, setId] = useState("");                 
//  const [name, setName] = useState("");              





    
//   useEffect(()=>{
//         console.log("Hello")
//     fetch("http://localhost:3000/getuserData")
//     .then(res=>res.json())
//     .then(data=>setData(data)) //console.log replace set data
//     .catch((err)=>console.log(err))
//     },[])
    
//     // console.log(data)

//    async function sendData(){                                       
//       const res = await fetch("http://localhost:3000/userData",{                 
//         method:"POST",                                        
//         headers: {                                             
//             "content-Type": "application/json",                         
//         },                                                      
//         body: JSON.stringify({id:id,name:name})                
//       })    
      
//        console.log(res)
       
//     }
    
//     return(
//         <>
//         <h1  className="container">Hello Mathesh</h1>


//     <input                                                                   
//     onChange={(e)=>setId(e.target.value)}                                     
//     value={id}                                                                
//     type="text"  className="border-black border" />              
//     <br />                                                                   

//     <input                                                        
//     onChange={(e)=>setName(e.target.value)}                       
//     value={name}                                                  
//     type="text" className="border-black border" />                
//     <br />                                                        
//     <button onClick={sendData}>onClick</button>                   





//         {data.map((items)=> {
//             return(
//             <div className="">
//                 <li>{items.id}</li>
//                 <li>{items.name}</li>

//             </div>
//             )
//         })}
//         </>
//     )
    
// }
// export default About; 

// ----------------------------------same //12345678 steps mark-------Refer previous------------------

// import { useState } from "react";
// import { useEffect } from "react";



// function About() {


//   const [data,  setData] = useState([])

//  const [id, setId] = useState("");                 /*//3*/
//  const [set, setName] = useState("");              /*//3*/





    
// //   useEffect(()=>{
//         // console.log("Hello")
//     // fetch("http://localhost:3000/userData")
//     // .then(res=>res.json())
//     // .then(data=>setData(data)) //console.log replace set data
//     // .catch((err)=>console.log(err))
//     // },[])
    
//     // console.log(data)

//     function sendData(){                                       /*//4*/
//       fetch("http://localhost:3000/userData",{                 /*//5*/
//         method:"POST",                                        /*//8*/
//         headers: {                                             /*//6*/
//             "content-Type": "application/json",                /*//6*/           
//         },                                                     /*//6*/ 
//         body: JSON.stringify({id:id,name:name})                /*//6*/
//       })                                                       /*//6*/
       
//     }
    
//     return(
//         <>
//         <h1  className="container">Hello Mathesh</h1>


//     <input                                                                   /*//1*/
//     onChange={(e)=>setId(e.target.value)}                                     /*//2*/
//     value={id}                                                                /*//2*/
//     type="text" name="" id="" className="border-black border" />              /*//1*/
//     <br />                                                                   /*//1*/

//     <input                                                        /*//1*/
//     onChange={(e)=>setName(e.target.value)}                       /*//2*/
//     value={name}                                                  /*//2*/
//     type="text" className="border-black border" />                /*//1*/
//     <br />                                                        /*//1*/
//     <button onClick={sendData}>onClick</button>                   /*//1 //7*/





//         {data.map((items)=> {
//             return(
//             <div className="">
//                 <li>{items.id}</li>
//                 <li>{items.name}</li>

//             </div>
//             )
//         })}
//         </>
//     )
    
// }
// export default About; 

// --------------------OWN CRUD PROJECT-------------------------------------
// import { useState, useEffect } from "react";

// function About() {

//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [data, setData] = useState([]);
//   const [editId, setEditId] = useState(null);


//   // READ
//   useEffect(() => {

//     fetch("http://localhost:3000/students")
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//       });

//   }, []);


//   // DELETE
//   const deleteStudent = (id) => {

//     fetch(`http://localhost:3000/students/${id}`, {
//       method: "DELETE"
//     })
//       .then(res => res.text())
//       .then(data => {

//         console.log(data);

//         setData(data => data.filter(item => item.id !== id));

//       });

//   };


//   // EDIT
//   const editStudent = (id) => {

//     setEditId(id);

//     const student = data.find(item => item.id === id);

//     setName(student.name);
//     setCourse(student.course);

//   };


//   // UPDATE
//   const updateStudent = () => {

//     fetch(`http://localhost:3000/students/${editId}`, {
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
//       .then(updatedStudent => {

//         console.log(updatedStudent);

//         setData(data =>
//           data.map(item =>
//             item.id === editId ? updatedStudent : item
//           )
//         );

//         setName("");
//         setCourse("");
//         setEditId(null);

//       });

//   };


//   // ADD
//   const addStudent = () => {

//   fetch("http://localhost:3000/students", {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//       name: name,
//       course: course
//     })
//   })
//     .then(res => res.text())
//     .then(data => {

//       console.log(data);

//       fetch("http://localhost:3000/students")
//         .then(res => res.json())
//         .then(data => {
//           setData(data);
//         });

//       setName("");
//       setCourse("");

//     });

// };

//   return (
//     <>
//       <div>

//         <h1>Student Management</h1>


//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />


//         <input
//           type="text"
//           placeholder="Enter course"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         />


//         {editId === null ? (

//           <button onClick={addStudent}>
//             Add Student
//           </button>

//         ) : (

//           <button onClick={updateStudent}>
//             Update Student
//           </button>

//         )}


//         <hr />


//         <h2>Students List</h2>


//         {data.map((item) => {

//           return (
//             <div key={item.id}>

//               <p>{item.id}</p>

//               <p>{item.name}</p>

//               <p>{item.course}</p>


//               <button onClick={() => deleteStudent(item.id)}>
//                 Delete
//               </button>

// <br></br>

//               <button onClick={() => editStudent(item.id)}>
//                 Edit
//               </button>

//             </div>
//           );

//         })}


//       </div>
//     </>
//   );
// }


// export default About;


















































