// import WebsiteLogo from "../assets/Logo.world.png"

// function Travelprjct() {
    
    
    
    
    
    
    
//     return(
//         <>
         
         
//          {/* Homepage */}

//          {/* Navbar */}

//          <div className="border-[2px] border-black h-[90px] flex bg-sky-200">
//          <div className="w-[85px] rounded-full"><img src={WebsiteLogo} alt="" /></div>
//          <div><h1 className="mt-[15px] font-bold text-2xl pl-[10px] text-indigo-900">WANDERLY</h1><h3 className="">Explore Beyond Limits</h3></div>
//          <h1 className="flex pl-[300px] gap-20 mt-[30px] font-bold text-xl">
//             <h1>Home</h1>
//             <h1>Destinations</h1>
//             <h1>Trips</h1>
//             <h1>About</h1>
//         </h1>
//         <div className="justify-content-end pl-[400px] mt-[15px]"><button className="border border-black rounded-full mt-[10px] font-bold text-xl bg-green-500 px-2 py-1 text-white">👤Login</button></div>
//         </div>


//         </>
//     )

























// }
// export default Travelprjct;




























// import { useEffect, useState } from "react";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import Bahubali2 from "../assets/baahubali-2-poster.jpg"
// import Movie96 from "../assets/Movie96.jpg"
// import vikram from "../assets/vikram.jpg"
// import jailer from "../assets/jailer.jpg"
// import master from "../assets/master.jpg"
// import doctor from "../assets/doctor.jpg"

// const API = "http://localhost:3000";

// const popular = [
    
//     ["Baahubali 2", Bahubali2, "Action/Fantacy"], 
//     ["96", Movie96, "Love"],
//     ["Vikram", vikram, "Action"],
//     ["Jailer", jailer, "Action/Thriller"],
//     ["Master", master, "Action"],
//     ["Doctor", doctor, "Action/Love"]

// ];

// function ratingText(rating) {
//     switch (true) {
//         case rating >= 8: return "Excellent";
//         case rating >= 7: return "Good";
//         default: return "Average";
//     }
// }

// function getCategoryId(name, categories) {
//     for (let i = 0; i < categories.length; i++) {
//         if (categories[i].name === name) {
//             return categories[i].id;
//         }
//     }
//     return 1;
// }

// function MovieCard({ movie, editMovie, deleteMovie, buttons }) {
//     return (
//         <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
//             <img
//                 src={movie.poster}
//                 onError={(e) =>
//                     e.currentTarget.src =
//                     "https://placehold.co/500x700?text=Movie"
//                 }
//                 className="w-full h-72 object-cover"
//             />

//             <div className="p-4">
//                 <h3 className="text-xl font-bold">
//                     {movie.title}
//                 </h3>

//                 <p className="text-slate-500">
//                     {movie.category} • {movie.year}
//                 </p>

//                 <p className="text-amber-500 font-bold mt-2">
//                     ★ {movie.rating}
//                     <span className="text-slate-400 ml-2">
//                         {ratingText(movie.rating)}
//                     </span>
//                 </p>

//                 {buttons && (
//                     <div className="flex gap-2 mt-4">
//                         <button
//                             onClick={() => editMovie(movie)}
//                             className="flex-1 bg-blue-600 text-white p-2 rounded-lg"
//                         >
//                             Edit
//                         </button>

//                         <button
//                             onClick={() => deleteMovie(movie.id)}
//                             className="flex-1 bg-red-500 text-white p-2 rounded-lg"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// function Navbar({ signedIn, setSignedIn }) {
//     const navigate = useNavigate();

//     function logout() {
//         setSignedIn(false);
//         navigate("/");
//     }

//     return (
//         <nav className="bg-slate-950 text-white p-4 flex justify-between">
//             <Link to="/" className="text-2xl font-black text-pink-400">
//                 🎬 CinemaHub
//             </Link>

//             <div className="flex gap-5 items-center">
//                 <Link to="/" className="hover:text-pink-400">Home</Link>
//                 <Link to="/movies" className="hover:text-cyan-400">Movies</Link>
//                 <Link to="/about" className="hover:text-yellow-400">About</Link>

//                 {!signedIn && (
//                     <Link to="/signin" className="hover:text-green-400">
//                         Sign In
//                     </Link>
//                 )}

//                 {signedIn && (
//                     <button onClick={logout} className="text-red-300">
//                         Logout
//                     </button>
//                 )}
//             </div>
//         </nav>
//     );
// }

// function Home({ movies }) {
//     return (
//         <>
//             <section className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-cyan-600 text-white p-16">
//                 <div className="max-w-6xl mx-auto">
//                     <p className="text-yellow-300 font-bold">
//                         MOVIE MANAGEMENT
//                     </p>

//                     <h1 className="text-5xl font-black mt-3">
//                         Your Movies. Your Hub.
//                     </h1>

//                     <p className="mt-4 max-w-xl">
//                         Manage your favourite movies easily.
//                     </p>

//                     <Link
//                         to="/movies"
//                         className="inline-block mt-7 bg-white text-purple-700 px-6 py-3 rounded-full font-bold"
//                     >
//                         Explore Movies
//                     </Link>
//                 </div>
//             </section>

//             <section className="bg-slate-100 p-8">
//                 <h2 className="text-3xl font-black text-center mb-6">
//                     Popular Tamil Movies
//                 </h2>

//                 <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                     {popular.map((p, index) => (
//                         <MovieCard
//                             key={index}
//                             movie={{
//                                 title: p[0],
//                                 poster: p[1],
//                                 category: p[2],
//                                 year: "Tamil",
//                                 rating: "8.0"
//                             }}
//                         />
//                     ))}
//                 </div>
//             </section>

//             <section className="p-8 text-center bg-white">
//                 <h2 className="text-2xl font-bold">
//                     Database Movies
//                 </h2>
//                 <p className="text-slate-500">
//                     {movies.length} movies loaded from MySQL
//                 </p>
//             </section>
//         </>
//     );
// }

// function Movies({ movies, categories, addMovie, updateMovie, deleteMovie }) {
//     const [search, setSearch] = useState("");
//     const [cat, setCat] = useState("All");

//     const [edit, setEdit] = useState(false);
//     const [id, setId] = useState("");
//     const [title, setTitle] = useState("");
//     const [year, setYear] = useState("");
//     const [rating, setRating] = useState("");
//     const [poster, setPoster] = useState("");
//     const [category, setCategory] = useState("");

//     let list = [];
//     let i = 0;

//     while (i < movies.length) {
//         const movie = movies[i];

//         const text =
//             movie.title.toLowerCase() +
//             movie.category.toLowerCase();

//         if (
//             (text.includes(search.toLowerCase())) &&
//             (cat === "All" || movie.category === cat)
//         ) {
//             list.push(movie);
//         }

//         i++;
//     }

//     function editMovie(movie) {
//         setEdit(true);
//         setId(movie.id);
//         setTitle(movie.title);
//         setYear(movie.year);
//         setRating(movie.rating);
//         setPoster(movie.poster);
//         setCategory(movie.category);

//         const box = document.getElementById("preview");
//         box.innerHTML = "";

//         const image = document.createElement("img");
//         image.src = movie.poster;
//         image.className = "w-20 h-28 object-cover rounded-lg";
//         box.append(image);
//     }

//     function preview(e) {
//         setPoster(e.target.value);

//         const box = document.getElementById("preview");
//         box.innerHTML = "";

//         const image = document.createElement("img");
//         image.src = e.target.value;
//         image.className = "w-20 h-28 object-cover rounded-lg";
//         box.append(image);
//     }

//     function clear() {
//         setEdit(false);
//         setId("");
//         setTitle("");
//         setYear("");
//         setRating("");
//         setPoster("");
//         setCategory("");

//         document.getElementById("preview").innerHTML = "";
//     }

//     function saveMovie() {
//         if (!title || !year || !rating || !category || !poster) {
//             return alert("Fill all fields");
//         }

//         const data = {
//             title,
//             year: Number(year),
//             rating: Number(rating),
//             poster,
//             category_id: getCategoryId(category, categories)
//         };

//         edit ? updateMovie(id, data) : addMovie(data);
//         clear();
//     }

//     return (
//         <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-pink-50 p-5">
//             <div className="max-w-6xl mx-auto">

//                 <div className="bg-white shadow rounded-2xl p-5 mb-6 flex gap-3">
//                     <input
//                         value={search}
//                         onChange={e => setSearch(e.target.value)}
//                         placeholder="Search movie..."
//                         className="flex-1 border-2 border-cyan-200 p-3 rounded-xl"
//                     />

//                     <select
//                         value={cat}
//                         onChange={e => setCat(e.target.value)}
//                         className="border-2 border-pink-200 p-3 rounded-xl"
//                     >
//                         <option>All</option>
//                         {categories.map(c =>
//                             <option key={c.id}>{c.name}</option>
//                         )}
//                     </select>
//                 </div>

//                 <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-2xl p-6 mb-7">
//                     <h2 className="text-2xl font-black">
//                         {edit ? "Edit Movie" : "Add Movie"}
//                     </h2>

//                     <div className="grid md:grid-cols-2 gap-3 mt-4">
//                         <input
//                             value={title}
//                             onChange={e => setTitle(e.target.value)}
//                             placeholder="Movie Name"
//                             className="p-3 rounded-lg text-black"
//                         />

//                         <input
//                             value={year}
//                             onChange={e => setYear(e.target.value)}
//                             placeholder="Year"
//                             className="p-3 rounded-lg text-black"
//                         />

//                         <input
//                             value={rating}
//                             onChange={e => setRating(e.target.value)}
//                             placeholder="Rating"
//                             className="p-3 rounded-lg text-black"
//                         />

//                         <select
//                             value={category}
//                             onChange={e => setCategory(e.target.value)}
//                             className="p-3 rounded-lg text-black"
//                         >
//                             <option value="">Category</option>
//                             {categories.map(c =>
//                                 <option key={c.id}>{c.name}</option>
//                             )}
//                         </select>

//                         <input
//                             value={poster}
//                             onChange={preview}
//                             placeholder="Poster URL"
//                             className="p-3 rounded-lg text-black md:col-span-2"
//                         />
//                     </div>

//                     <div id="preview" className="mt-3"></div>

//                     <div className="flex gap-3 mt-4">
//                         <button
//                             onClick={saveMovie}
//                             className="bg-slate-950 px-6 py-3 rounded-lg font-bold"
//                         >
//                             {edit ? "Update Movie" : "Add Movie"}
//                         </button>

//                         {edit && (
//                             <button
//                                 onClick={clear}
//                                 className="bg-white text-black px-6 py-3 rounded-lg"
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 <h2 className="text-3xl font-black mb-5">
//                     Movie Collection
//                 </h2>

//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//                     {list.map(movie =>
//                         <MovieCard
//                             key={movie.id}
//                             movie={movie}
//                             editMovie={editMovie}
//                             deleteMovie={deleteMovie}
//                             buttons={true}
//                         />
//                     )}
//                 </div>

//                 {list.length === 0 &&
//                     <p className="text-center p-10 text-slate-500">
//                         No movies found.
//                     </p>
//                 }
//             </div>
//         </main>
//     );
// }

// function About() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-cyan-50 p-10">
//             <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">
//                 <h1 className="text-4xl font-black text-purple-700">
//                     About CinemaHub
//                 </h1>

//                 <p className="mt-4 text-slate-600">
//                     A simple full-stack Movie Management System
//                     using React, Tailwind CSS, Express and MySQL.
//                 </p>

//                 <div className="grid sm:grid-cols-3 gap-4 mt-7">
//                     <div className="bg-pink-100 p-5 rounded-xl">
//                         React Frontend
//                     </div>

//                     <div className="bg-cyan-100 p-5 rounded-xl">
//                         Express Backend
//                     </div>

//                     <div className="bg-yellow-100 p-5 rounded-xl">
//                         MySQL Database
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function SignIn({ setSignedIn }) {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     function login() {
//         if (email && password) {
//             setSignedIn(true);
//             alert("Sign In Successful");
//             navigate("/");
//         } else {
//             alert("Enter email and password");
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-700 to-cyan-500 flex items-center justify-center p-5">
//             <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl">
//                 <h1 className="text-3xl font-black text-purple-700">
//                     Sign In
//                 </h1>

//                 <input
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     placeholder="Email"
//                     className="w-full border p-3 rounded-lg mt-5"
//                 />

//                 <input
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     placeholder="Password"
//                     type="password"
//                     className="w-full border p-3 rounded-lg mt-3"
//                 />

//                 <button
//                     onClick={login}
//                     className="w-full bg-slate-950 text-white p-3 rounded-lg mt-5"
//                 >
//                     Sign In
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default function App() {
//     const [movies, setMovies] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [signedIn, setSignedIn] = useState(false);

//     function getMovies() {
//         fetch(`${API}/movies`)
//             .then(res => res.json())
//             .then(data => setMovies(data));
//     }

//     useEffect(() => {
//         getMovies();

//         fetch(`${API}/categories`)
//             .then(res => res.json())
//             .then(data => setCategories(data));
//     }, []);

//     function addMovie(data) {
//         fetch(`${API}/movies`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 getMovies();
//             });
//     }

//     function updateMovie(id, data) {
//         fetch(`${API}/movies/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 getMovies();
//             });
//     }

//     function deleteMovie(id) {
//         fetch(`${API}/movies/${id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 getMovies();
//             });
//     }

//     return (
//         <>
//             <Navbar
//                 signedIn={signedIn}
//                 setSignedIn={setSignedIn}
//             />

//             <Routes>
//                 <Route
//                     path="/"
//                     element={<Home movies={movies} />}
//                 />

//                 <Route
//                     path="/movies"
//                     element={
//                         <Movies
//                             movies={movies}
//                             categories={categories}
//                             addMovie={addMovie}
//                             updateMovie={updateMovie}
//                             deleteMovie={deleteMovie}
//                         />
//                     }
//                 />

//                 <Route
//                     path="/about"
//                     element={<About />}
//                 />

//                 <Route
//                     path="/signin"
//                     element={
//                         <SignIn
//                             setSignedIn={setSignedIn}
//                         />
//                     }
//                 />
//             </Routes>

//             <footer className="bg-slate-950 text-white text-center p-5">
//                 CinemaHub • Full Stack Movie Management
//             </footer>
//         </>
//     );
// }


 


































































// crud prjct final  

// import { useState,useEffect } from "react";
// import{Routes,Route,Link} from "react-router-dom"

// function Students() {
//      const [students, setstudents] = useState([])
//      const [id, setId] = useState("")
//      const [name, setName] = useState("")
//      const [age, setAge] = useState("")
//      const [course, setCourse] = useState("")
//      const [edit, setEdit] = useState(false)  


// const getstudents = ()=>{
//     fetch("http://localhost:3000/students")
//     .then(res=>res.json())
//     .then(data=>setstudents(data))
// }; 

// useEffect(()=>{
//     getstudents()
// },[])

// const addstudent = ()=>{
//     fetch("http://localhost:3000/students",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({id,name,age,course})
//     })
//     .then(res=>res.json())
//     .then(()=>{getstudents(),setId(""),setName(""),setAge(""),setCourse("")})
// };

// const editStudent = (student)=>{
//     setId(student.id)
//     setName(student.name)
//     setAge(student.age)
//     setCourse(student.course) 
//     setEdit(true)   
// }

// const updateStudent = ()=>{
//     fetch(`http://localhost:3000/students/${id}`,{
//         method:"PUT",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({name,age,course})
//     })
//     .then(res=>res.json())
//     .then(()=>{getstudents(),setId(""),setName(""),setAge(""),setCourse("")})
//     setEdit(false)
// };

// const deleteStudent = (id) => {
//     fetch(`http://localhost:3000/students/${id}`,{
//         method:"DELETE"
//     })
//         .then(res=>res.json())
//         .then(()=>{getstudents()})
// }

// return(
//     <>
//     <h1>STUDENT MANAGER</h1>
//     <input placeholder="student id" value={id} onChange={(e)=>setId(e.target.value)} />
//     <input placeholder="student name" value={name} onChange={(e)=>setName(e.target.value)} />
//     <input placeholder="student age" value={age} onChange={(e)=>setAge(e.target.value)} />
//     <input placeholder="student course" value={course} onChange={(e)=>setCourse(e.target.value)} />
//     {edit ? (
//         <button onClick={updateStudent}>update Student</button>
//     ):( 
//         <button onClick={addstudent}>Add student</button>
//     )}
//     <section>
//         {students.map((student)=>(
//             <article key={student.id}>
//                 <h2>{student.name}</h2>
//                 <p>Age: {student.age}</p>
//                 <p>Course: {student.course}</p>
//                 <button onClick={()=>editStudent(student)}>Edit</button>
//                 <button onClick={()=>deleteStudent(student.id)}>Delete</button>
//             </article>
//          ))}
//     </section>
//     </>
// ) 

// }

// function Home() {

//     return (
        
//         <div>
//              <h1 className="mt-[20px]">🎓 STUDENT MANAGER</h1>
//              <p className="mt-[20px]">Manage Your Students</p>
//              <Link to="/students">View Students</Link>
//         </div>
//       );
// }

// function App() {

//     return (

//         <>
//          <nav className="flex gap-5">
//               <Link to="/">Home</Link>
//               <Link to="/students">Students</Link>
//         </nav>
//         <Routes>
//           <Route path="/"element={<Home />}/>
//           <Route path="/students"element={<Students />}/>
//         </Routes>
//       </>
//     );
// }

// export default App
    
    



 
  













































































































// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

// /* ---------- DATA / ARRAYS ---------- */

// const products = [
//   { id: 1, name: "Nebula Hoodie", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3", tag: "NEW" },
//   { id: 2, name: "Lunar Sneakers", price: 3299, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", tag: "HOT" },
//   { id: 3, name: "Orbit Watch", price: 4999, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", tag: "PREMIUM" },
//   { id: 4, name: "Galaxy Backpack", price: 1899, category: "Travel", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", tag: "NEW" },
//   { id: 5, name: "Cosmic Headphones", price: 2799, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", tag: "HOT" },
//   { id: 6, name: "Mars Sunglasses", price: 1499, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083", tag: "TRENDING" }
// ];

// /* ---------- SMALL JS CONCEPTS ---------- */

// const storeName = "VOYAGER";

// function getDiscount(price) {
//   if (price >= 4000) return 20;
//   if (price >= 2500) return 10;
//   return 5;
// }

// const formatPrice = (price) => `₹${price.toLocaleString()}`;

// function categoryMessage(category) {
//   switch (category) {
//     case "Fashion": return "Street style from another planet.";
//     case "Electronics": return "Future technology.";
//     case "Travel": return "Explore beyond limits.";
//     default: return "Premium Voyager collection.";
//   }
// }

// /* ---------- NAVBAR ---------- */

// function Navbar({ cartCount }) {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-xl">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
//         <Link to="/" className="text-2xl font-black tracking-widest">VOYAGER</Link>

//         <div className="hidden gap-8 md:flex">
//           <Link to="/" className="hover:text-cyan-300">Home</Link>
//           <Link to="/shop" className="hover:text-cyan-300">Shop</Link>
//           <Link to="/orders" className="hover:text-cyan-300">Orders</Link>
//         </div>

//         <Link to="/cart" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">
//           🛒 Cart <span className="ml-1 text-cyan-300">{cartCount}</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// /* ---------- HOME ---------- */

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <main className="min-h-screen bg-black text-white">
//       <section className="relative overflow-hidden px-6 py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
//           <div>
//             <p className="mb-4 text-sm font-bold tracking-[0.4em] text-cyan-300">
//               THE FUTURE OF SHOPPING
//             </p>

//             <h1 className="text-6xl font-black leading-none md:text-8xl">
//               SHOP
//               <span className="block text-cyan-300">BEYOND</span>
//               LIMITS.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-gray-400">
//               Discover products designed for people who don't follow ordinary.
//             </p>

//             <button
//               onClick={() => navigate("/shop")}
//               className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
//             >
//               Explore Collection →
//             </button>
//           </div>

//           <img
//             className="h-[500px] w-full rounded-[3rem] object-cover shadow-2xl"
//             src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
//             alt="Voyager Store"
//           />
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 pb-24">
//         <div className="grid gap-6 md:grid-cols-3">
//           {[
//             ["01", "FUTURE DESIGN", "Products made to stand out."],
//             ["02", "PREMIUM QUALITY", "Built for everyday explorers."],
//             ["03", "LIMITED DROPS", "Discover something different."]
//           ].map((item) => (
//             <div key={item[0]} className="rounded-3xl border border-white/10 bg-white/5 p-8">
//               <p className="text-cyan-300">{item[0]}</p>
//               <h2 className="mt-5 text-2xl font-bold">{item[1]}</h2>
//               <p className="mt-2 text-gray-400">{item[2]}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// /* ---------- SHOP ---------- */

// function Shop({ addToCart }) {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const categories = ["All", "Fashion", "Footwear", "Accessories", "Travel", "Electronics"];

//   const filteredProducts = products.filter((product) => {
//     const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
//     const matchCategory = category === "All" || product.category === category;

//     return matchSearch && matchCategory;
//   });

//   return (
//     <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <p className="text-cyan-300">VOYAGER / COLLECTION</p>
//             <h1 className="mt-2 text-5xl font-black">Explore Products</h1>
//           </div>

//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search products..."
//             className="rounded-full border border-white/10 bg-white/5 px-6 py-4 outline-none focus:border-cyan-300"
//           />
//         </div>

//         <div className="mb-10 flex flex-wrap gap-3">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat)}
//               className={`rounded-full px-5 py-2 ${
//                 category === cat
//                   ? "bg-cyan-300 text-black"
//                   : "border border-white/10 bg-white/5"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// /* ---------- PRODUCT CARD ---------- */

// function ProductCard({ product, addToCart }) {
//   const navigate = useNavigate();
//   const discount = getDiscount(product.price);

//   return (
//     <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
//       <div className="relative overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
//         />

//         <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs">
//           {product.tag}
//         </span>

//         <span className="absolute right-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-black">
//           -{discount}%
//         </span>
//       </div>

//       <div className="p-6">
//         <p className="text-sm text-cyan-300">{product.category}</p>
//         <h2 className="mt-2 text-2xl font-bold">{product.name}</h2>

//         <p className="mt-2 text-sm text-gray-400">
//           {categoryMessage(product.category)}
//         </p>

//         <div className="mt-6 flex items-center justify-between">
//           <p className="text-xl font-bold">{formatPrice(product.price)}</p>

//           <button
//             onClick={() => addToCart(product)}
//             className="rounded-full bg-white px-5 py-3 font-bold text-black hover:bg-cyan-300"
//           >
//             Add +
//           </button>
//         </div>

//         <button
//           onClick={() => navigate(`/product/${product.id}`)}
//           className="mt-3 w-full rounded-full border border-white/10 py-3 text-sm hover:bg-white/10"
//         >
//           View Details →
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------- PRODUCT DETAILS ---------- */

// function ProductDetails({ addToCart }) {
//   const { id } = useParams();
//   const product = products.find((item) => item.id === Number(id));

//   if (!product) {
//     return <div className="min-h-screen bg-black p-20 text-white">Product not found.</div>;
//   }

//   return (
//     <main className="min-h-screen bg-black px-6 py-16 text-white">
//       <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-[600px] w-full rounded-[3rem] object-cover"
//         />

//         <div className="flex flex-col justify-center">
//           <p className="text-cyan-300">{product.category}</p>
//           <h1 className="mt-3 text-6xl font-black">{product.name}</h1>
//           <p className="mt-6 text-3xl">{formatPrice(product.price)}</p>

//           <p className="mt-8 leading-8 text-gray-400">
//             {categoryMessage(product.category)} This exclusive Voyager product
//             is designed for modern explorers who want something different.
//           </p>

//           <div className="mt-8 grid grid-cols-2 gap-4">
//             <div className="rounded-2xl bg-white/5 p-5">✓ Premium Quality</div>
//             <div className="rounded-2xl bg-white/5 p-5">✓ Limited Drop</div>
//             <div className="rounded-2xl bg-white/5 p-5">✓ Fast Delivery</div>
//             <div className="rounded-2xl bg-white/5 p-5">✓ Easy Returns</div>
//           </div>

//           <button
//             onClick={() => addToCart(product)}
//             className="mt-10 rounded-full bg-cyan-300 px-8 py-5 font-black text-black hover:scale-105"
//           >
//             Add To Cart →
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// /* ---------- CART ---------- */

// function Cart({ cart, updateQuantity, removeFromCart }) {
//   const navigate = useNavigate();

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
//       <div className="mx-auto max-w-6xl">
//         <h1 className="text-5xl font-black">Your Cart</h1>

//         {cart.length === 0 ? (
//           <div className="mt-12 rounded-3xl border border-white/10 p-12 text-center">
//             <p className="text-2xl">Your cart is empty 🚀</p>
//             <Link
//               to="/shop"
//               className="mt-6 inline-block rounded-full bg-cyan-300 px-6 py-3 font-bold text-black"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-10 grid gap-8 md:grid-cols-3">
//             <div className="space-y-4 md:col-span-2">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-5"
//                 >
//                   <img
//                     src={item.image}
//                     className="h-28 w-28 rounded-2xl object-cover"
//                     alt={item.name}
//                   />

//                   <div className="flex-1">
//                     <h2 className="text-xl font-bold">{item.name}</h2>
//                     <p className="text-cyan-300">{formatPrice(item.price)}</p>

//                     <div className="mt-4 flex gap-3">
//                       <button
//                         onClick={() => updateQuantity(item.id, -1)}
//                         className="rounded-full bg-white/10 px-4"
//                       >
//                         -
//                       </button>

//                       <span>{item.quantity}</span>

//                       <button
//                         onClick={() => updateQuantity(item.id, 1)}
//                         className="rounded-full bg-white/10 px-4"
//                       >
//                         +
//                       </button>

//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="ml-auto text-red-400"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="h-fit rounded-3xl border border-white/10 bg-white/5 p-7">
//               <p className="text-gray-400">Total Amount</p>
//               <h2 className="mt-2 text-4xl font-black">{formatPrice(total)}</h2>

//               <button
//                 onClick={() => navigate("/checkout")}
//                 className="mt-8 w-full rounded-full bg-cyan-300 py-4 font-black text-black"
//               >
//                 Checkout →
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// /* ---------- CHECKOUT ---------- */

// function Checkout({ cart, clearCart, addOrder }) {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [payment, setPayment] = useState("COD");

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const placeOrder = () => {
//     if (!name || !phone || !address) {
//       alert("Please fill all details");
//       return;
//     }

//     addOrder({
//       id: Date.now(),
//       name,
//       phone,
//       address,
//       payment,
//       total,
//       status: "Processing"
//     });

//     clearCart();
//     navigate("/success");
//   };

//   return (
//     <main className="min-h-screen bg-black px-6 py-16 text-white">
//       <div className="mx-auto max-w-6xl">
//         <h1 className="text-5xl font-black">Checkout</h1>

//         <div className="mt-10 grid gap-8 md:grid-cols-2">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
//             <h2 className="text-2xl font-bold">Shipping Details</h2>

//             <input
//               className="mt-6 w-full rounded-2xl bg-black p-4 outline-none"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <input
//               className="mt-4 w-full rounded-2xl bg-black p-4 outline-none"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />

//             <textarea
//               className="mt-4 h-32 w-full rounded-2xl bg-black p-4 outline-none"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />

//             <select
//               value={payment}
//               onChange={(e) => setPayment(e.target.value)}
//               className="mt-4 w-full rounded-2xl bg-black p-4"
//             >
//               <option>COD</option>
//               <option>UPI</option>
//               <option>Card</option>
//             </select>
//           </div>

//           <div className="h-fit rounded-3xl border border-white/10 bg-white/5 p-8">
//             <p className="text-gray-400">Order Total</p>
//             <h2 className="mt-3 text-5xl font-black">{formatPrice(total)}</h2>

//             <button
//               onClick={placeOrder}
//               className="mt-8 w-full rounded-full bg-cyan-300 py-4 font-black text-black"
//             >
//               Place Order 🚀
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// /* ---------- SUCCESS ---------- */

// function Success() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
//       <div>
//         <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-300 text-5xl text-black">
//           ✓
//         </div>

//         <h1 className="mt-8 text-5xl font-black">
//           Mission Successful!
//         </h1>

//         <p className="mt-4 text-gray-400">
//           Your Voyager order has been placed.
//         </p>

//         <div className="mt-8 flex justify-center gap-4">
//           <Link
//             to="/orders"
//             className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-black"
//           >
//             My Orders
//           </Link>

//           <Link
//             to="/shop"
//             className="rounded-full border border-white/20 px-6 py-3"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

// /* ---------- ORDERS / CRUD ---------- */

// function Orders({ orders, editOrder, deleteOrder }) {
//   return (
//     <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
//       <div className="mx-auto max-w-6xl">
//         <div className="flex items-end justify-between">
//           <div>
//             <p className="text-cyan-300">VOYAGER / ACCOUNT</p>
//             <h1 className="mt-2 text-5xl font-black">My Orders</h1>
//           </div>

//           <span className="rounded-full bg-white/10 px-5 py-2">
//             {orders.length} Orders
//           </span>
//         </div>

//         <div className="mt-10 space-y-4">
//           {orders.length === 0 && (
//             <div className="rounded-3xl border border-white/10 p-10 text-center text-gray-400">
//               No orders yet.
//             </div>
//           )}

//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="rounded-3xl border border-white/10 bg-white/5 p-6"
//             >
//               <div className="grid gap-4 md:grid-cols-5 md:items-center">
//                 <div>
//                   <p className="text-xs text-gray-500">ORDER</p>
//                   <p>#{order.id}</p>
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500">CUSTOMER</p>
//                   <p>{order.name}</p>
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500">AMOUNT</p>
//                   <p>{formatPrice(order.total)}</p>
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500">STATUS</p>
//                   <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-yellow-300">
//                     {order.status}
//                   </span>
//                 </div>

//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => editOrder(order)}
//                     className="rounded-full bg-white px-4 py-2 text-black"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => deleteOrder(order.id)}
//                     className="rounded-full bg-red-500/20 px-4 py-2 text-red-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// /* ---------- APP ---------- */

// function App() {
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("voyagerCart")) || [];
//     const savedOrders = JSON.parse(localStorage.getItem("voyagerOrders")) || [];

//     setCart(savedCart);
//     setOrders(savedOrders);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("voyagerCart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("voyagerOrders", JSON.stringify(orders));
//   }, [orders]);

//   const addToCart = (product) => {
//     const exists = cart.find((item) => item.id === product.id);

//     if (exists) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const updateQuantity = (id, amount) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + amount }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const addOrder = (order) => {
//     setOrders([...orders, order]);
//   };

//   const deleteOrder = (id) => {
//     if (confirm("Delete this order?")) {
//       setOrders(orders.filter((order) => order.id !== id));
//     }
//   };

//   const editOrder = (order) => {
//     const newName = prompt("Enter new name", order.name);

//     if (newName) {
//       setOrders(
//         orders.map((item) =>
//           item.id === order.id
//             ? { ...item, name: newName }
//             : item
//         )
//       );
//     }
//   };

//   return (
//     <BrowserRouter>
//       <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/shop"
//           element={<Shop addToCart={addToCart} />}
//         />

//         <Route
//           path="/product/:id"
//           element={<ProductDetails addToCart={addToCart} />}
//         />

//         <Route
//           path="/cart"
//           element={
//             <Cart
//               cart={cart}
//               updateQuantity={updateQuantity}
//               removeFromCart={removeFromCart}
//             />
//           }
//         />

//         <Route
//           path="/checkout"
//           element={
//             <Checkout
//               cart={cart}
//               clearCart={clearCart}
//               addOrder={addOrder}
//             />
//           }
//         />

//         <Route path="/success" element={<Success />} />

//         <Route
//           path="/orders"
//           element={
//             <Orders
//               orders={orders}
//               editOrder={editOrder}
//               deleteOrder={deleteOrder}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App; 

// ---------------------------------------------------------------------------------------------

//  import { useEffect, useState } from "react";

// import {
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";


// // ===============================
// // HOME
// // ===============================

// function Home() {

//     return (

//         <div className="min-h-screen bg-black text-white">

//             <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">

//                 <p className="text-cyan-400 tracking-[0.4em] text-sm mb-4">
//                     VOYAGER SPACE PROGRAM
//                 </p>

//                 <h1 className="text-6xl md:text-8xl font-black">
//                     EXPLORE
//                     <span className="text-cyan-400">
//                         {" "}BEYOND
//                     </span>
//                 </h1>

//                 <p className="max-w-xl text-gray-400 mt-6">
//                     Discover missions, planets and deep-space
//                     expeditions through the Voyager Mission Control.
//                 </p>

//                 <Link
//                     to="/collections"
//                     className="mt-8 px-8 py-4 bg-cyan-400 text-black
//                     font-bold rounded-full hover:bg-white transition"
//                 >
//                     ENTER MISSION CONTROL
//                 </Link>

//             </section>

//         </div>

//     );

// }


// // ===============================
// // COLLECTIONS
// // ===============================

// function Collections() {


//     // ===============================
//     // STATE
//     // ===============================

//     const [collections, setCollections] = useState([]);

//     const [id, setId] = useState("");

//     const [name, setName] = useState("");

//     const [price, setPrice] = useState("");

//     const [category, setCategory] = useState("");

//     const [image, setImage] = useState("");

//     const [edit, setEdit] = useState(false);


//     // ===============================
//     // GET DATA
//     // ===============================

//     const getCollections = () => {

//         fetch(
//             "http://localhost:3000/collections"
//         )

//             .then(
//                 res => res.json()
//             )

//             .then(
//                 data => setCollections(data)
//             );

//     };


//     // ===============================
//     // PAGE LOAD
//     // ===============================

//     useEffect(() => {

//         getCollections();

//     }, []);


//     // ===============================
//     // ADD
//     // ===============================

//     const addCollection = () => {


//         if (
//             name === "" ||
//             price === "" ||
//             category === "" ||
//             image === ""
//         ) {

//             alert("Complete all mission details");

//             return;

//         }


//         fetch(
//             "http://localhost:3000/collections",
//             {

//                 method: "POST",

//                 headers: {

//                     "Content-Type":
//                         "application/json"

//                 },

//                 body: JSON.stringify({

//                     name: name,

//                     price: price,

//                     category: category,

//                     image: image

//                 })

//             }

//         )

//             .then(
//                 res => res.json()
//             )

//             .then(() => {

//                 getCollections();

//                 clearForm();

//             });

//     };


//     // ===============================
//     // DELETE
//     // ===============================

//     const deleteCollection = (id) => {


//         if (
//             window.confirm(
//                 "Delete this mission?"
//             )
//         ) {

//             fetch(
//                 `http://localhost:3000/collections/${id}`,
//                 {

//                     method: "DELETE"

//                 }

//             )

//                 .then(
//                     res => res.json()
//                 )

//                 .then(() => {

//                     getCollections();

//                 });

//         }

//     };


//     // ===============================
//     // EDIT
//     // ===============================

//     const editCollection = (collection) => {

//         setId(collection.id);

//         setName(collection.name);

//         setPrice(collection.price);

//         setCategory(collection.category);

//         setImage(collection.image);

//         setEdit(true);

//     };


//     // ===============================
//     // UPDATE
//     // ===============================

//     const updateCollection = () => {


//         fetch(
//             `http://localhost:3000/collections/${id}`,
//             {

//                 method: "PUT",

//                 headers: {

//                     "Content-Type":
//                         "application/json"

//                 },

//                 body: JSON.stringify({

//                     name: name,

//                     price: price,

//                     category: category,

//                     image: image

//                 })

//             }

//         )

//             .then(
//                 res => res.json()
//             )

//             .then(() => {

//                 getCollections();

//                 clearForm();

//                 setEdit(false);

//             });

//     };


//     // ===============================
//     // CLEAR FORM
//     // ===============================

//     const clearForm = () => {

//         setId("");

//         setName("");

//         setPrice("");

//         setCategory("");

//         setImage("");

//     };


//     // ===============================
//     // LEVEL
//     // ===============================

//     const getMissionLevel = (price) => {

//         if (price >= 2000) {

//             return "EXTREME";

//         }

//         else if (price >= 1000) {

//             return "ADVANCED";

//         }

//         else {

//             return "STANDARD";

//         }

//     };


//     // ===============================
//     // SWITCH
//     // ===============================

//     const getCategoryIcon = (category) => {

//         switch (category) {

//             case "Mars":
//                 return "🔴";

//             case "Moon":
//                 return "🌙";

//             case "Galaxy":
//                 return "🌌";

//             case "Deep Space":
//                 return "🚀";

//             default:
//                 return "🛰️";

//         }

//     };


//     // ===============================
//     // RETURN
//     // ===============================

//     return (

//         <div className="min-h-screen bg-[#020617] text-white">


//             {/* NAVBAR */}

//             <nav className="sticky top-0 z-50
//                 bg-black/80 backdrop-blur
//                 border-b border-cyan-400/20">

//                 <div className="
//                     max-w-7xl mx-auto
//                     px-6 py-5
//                     flex justify-between items-center
//                 ">

//                     <Link
//                         to="/"
//                         className="text-2xl font-black"
//                     >

//                         VOYAGER
//                         <span className="text-cyan-400">
//                             .
//                         </span>

//                     </Link>


//                     <div className="flex gap-6">

//                         <Link
//                             to="/"
//                             className="text-gray-400 hover:text-white"
//                         >
//                             HOME
//                         </Link>

//                         <Link
//                             to="/collections"
//                             className="text-cyan-400"
//                         >
//                             MISSIONS
//                         </Link>

//                     </div>

//                 </div>

//             </nav>


//             {/* HERO */}

//             <section className="
//                 max-w-7xl mx-auto
//                 px-6 pt-16 pb-10
//             ">

//                 <p className="
//                     text-cyan-400
//                     text-sm
//                     tracking-[0.4em]
//                 ">
//                     MISSION CONTROL
//                 </p>

//                 <h1 className="
//                     text-5xl md:text-7xl
//                     font-black mt-3
//                 ">

//                     SPACE
//                     <span className="text-cyan-400">
//                         {" "}MISSIONS
//                     </span>

//                 </h1>

//                 <p className="text-gray-400 mt-4 max-w-2xl">

//                     Manage humanity's next journey
//                     beyond Earth.

//                 </p>

//             </section>


//             {/* FORM */}

//             <section className="
//                 max-w-7xl mx-auto
//                 px-6 mb-16
//             ">

//                 <div className="
//                     bg-white/5
//                     border border-white/10
//                     rounded-3xl
//                     p-6 md:p-8
//                     backdrop-blur
//                 ">

//                     <div className="flex items-center justify-between mb-6">

//                         <h2 className="text-2xl font-bold">

//                             {edit
//                                 ? "EDIT MISSION"
//                                 : "LAUNCH NEW MISSION"
//                             }

//                         </h2>

//                         <span className="
//                             text-xs
//                             text-cyan-400
//                             border border-cyan-400/30
//                             rounded-full
//                             px-3 py-1
//                         ">

//                             {edit
//                                 ? "UPDATE MODE"
//                                 : "CREATE MODE"
//                             }

//                         </span>

//                     </div>


//                     <div className="
//                         grid
//                         grid-cols-1
//                         md:grid-cols-2
//                         lg:grid-cols-4
//                         gap-4
//                     ">


//                         <input
//                             className="
//                                 bg-black/50
//                                 border border-white/10
//                                 rounded-xl
//                                 px-4 py-3
//                                 outline-none
//                                 focus:border-cyan-400
//                             "
//                             placeholder="Mission name"
//                             value={name}
//                             onChange={
//                                 e => setName(e.target.value)
//                             }
//                         />


//                         <input
//                             className="
//                                 bg-black/50
//                                 border border-white/10
//                                 rounded-xl
//                                 px-4 py-3
//                                 outline-none
//                                 focus:border-cyan-400
//                             "
//                             placeholder="Price"
//                             type="number"
//                             value={price}
//                             onChange={
//                                 e => setPrice(e.target.value)
//                             }
//                         />


//                         <input
//                             className="
//                                 bg-black/50
//                                 border border-white/10
//                                 rounded-xl
//                                 px-4 py-3
//                                 outline-none
//                                 focus:border-cyan-400
//                             "
//                             placeholder="Category"
//                             value={category}
//                             onChange={
//                                 e => setCategory(e.target.value)
//                             }
//                         />


//                         <input
//                             className="
//                                 bg-black/50
//                                 border border-white/10
//                                 rounded-xl
//                                 px-4 py-3
//                                 outline-none
//                                 focus:border-cyan-400
//                             "
//                             placeholder="Image URL"
//                             value={image}
//                             onChange={
//                                 e => setImage(e.target.value)
//                             }
//                         />

//                     </div>


//                     <div className="flex gap-3 mt-5">

//                         {edit ? (

//                             <button
//                                 onClick={
//                                     updateCollection
//                                 }
//                                 className="
//                                     px-6 py-3
//                                     rounded-xl
//                                     bg-cyan-400
//                                     text-black
//                                     font-bold
//                                     hover:bg-white
//                                     transition
//                                 "
//                             >
//                                 UPDATE MISSION
//                             </button>

//                         ) : (

//                             <button
//                                 onClick={
//                                     addCollection
//                                 }
//                                 className="
//                                     px-6 py-3
//                                     rounded-xl
//                                     bg-cyan-400
//                                     text-black
//                                     font-bold
//                                     hover:bg-white
//                                     transition
//                                 "
//                             >
//                                 LAUNCH MISSION
//                             </button>

//                         )}


//                         {edit && (

//                             <button
//                                 onClick={() => {

//                                     clearForm();

//                                     setEdit(false);

//                                 }}
//                                 className="
//                                     px-6 py-3
//                                     rounded-xl
//                                     border border-white/20
//                                     hover:bg-white/10
//                                 "
//                             >
//                                 CANCEL
//                             </button>

//                         )}

//                     </div>

//                 </div>

//             </section>


//             {/* MISSION CARDS */}

//             <main className="
//                 max-w-7xl mx-auto
//                 px-6 pb-20
//             ">

//                 <div className="
//                     grid
//                     grid-cols-1
//                     md:grid-cols-2
//                     lg:grid-cols-3
//                     gap-6
//                 ">


//                     {collections.length === 0 ? (

//                         <p className="
//                             text-gray-400
//                             col-span-full
//                             text-center
//                             py-20
//                         ">
//                             No missions available.
//                         </p>

//                     ) : (

//                         collections.map(
//                             (collection) => (

//                                 <div
//                                     key={collection.id}
//                                     className="
//                                         group
//                                         overflow-hidden
//                                         rounded-3xl
//                                         bg-white/5
//                                         border border-white/10
//                                         hover:border-cyan-400/50
//                                         transition
//                                     "
//                                 >


//                                     <div className="
//                                         relative
//                                         h-56
//                                         overflow-hidden
//                                     ">

//                                         <img
//                                             src={
//                                                 collection.image
//                                             }
//                                             alt={
//                                                 collection.name
//                                             }
//                                             className="
//                                                 w-full h-full
//                                                 object-cover
//                                                 group-hover:scale-110
//                                                 transition
//                                                 duration-700
//                                             "
//                                         />

//                                         <div className="
//                                             absolute inset-0
//                                             bg-gradient-to-t
//                                             from-black
//                                             to-transparent
//                                         " />

//                                         <span className="
//                                             absolute
//                                             top-4 left-4
//                                             bg-black/70
//                                             px-3 py-1
//                                             rounded-full
//                                             text-xs
//                                             text-cyan-300
//                                         ">

//                                             {getCategoryIcon(
//                                                 collection.category
//                                             )}

//                                             {" "}

//                                             {collection.category}

//                                         </span>

//                                     </div>


//                                     <div className="p-6">


//                                         <p className="
//                                             text-xs
//                                             text-cyan-400
//                                             tracking-widest
//                                         ">

//                                             MISSION #{collection.id}

//                                         </p>


//                                         <h2 className="
//                                             text-2xl
//                                             font-bold
//                                             mt-2
//                                         ">

//                                             {collection.name}

//                                         </h2>


//                                         <div className="
//                                             flex
//                                             justify-between
//                                             items-center
//                                             mt-5
//                                         ">

//                                             <div>

//                                                 <p className="
//                                                     text-gray-500
//                                                     text-xs
//                                                 ">
//                                                     MISSION COST
//                                                 </p>

//                                                 <p className="
//                                                     text-xl
//                                                     font-bold
//                                                 ">
//                                                     ₹{collection.price}
//                                                 </p>

//                                             </div>


//                                             <span className="
//                                                 text-xs
//                                                 px-3 py-1
//                                                 rounded-full
//                                                 bg-cyan-400/10
//                                                 text-cyan-300
//                                             ">

//                                                 {getMissionLevel(
//                                                     collection.price
//                                                 )}

//                                             </span>

//                                         </div>


//                                         <div className="
//                                             flex
//                                             gap-3
//                                             mt-6
//                                         ">


//                                             <button
//                                                 onClick={() =>
//                                                     editCollection(
//                                                         collection
//                                                     )
//                                                 }
//                                                 className="
//                                                     flex-1
//                                                     py-3
//                                                     rounded-xl
//                                                     bg-white/10
//                                                     hover:bg-cyan-400
//                                                     hover:text-black
//                                                     transition
//                                                 "
//                                             >
//                                                 EDIT
//                                             </button>


//                                             <button
//                                                 onClick={() =>
//                                                     deleteCollection(
//                                                         collection.id
//                                                     )
//                                                 }
//                                                 className="
//                                                     flex-1
//                                                     py-3
//                                                     rounded-xl
//                                                     bg-red-500/10
//                                                     text-red-400
//                                                     hover:bg-red-500
//                                                     hover:text-white
//                                                     transition
//                                                 "
//                                             >
//                                                 DELETE
//                                             </button>

//                                         </div>

//                                     </div>

//                                 </div>

//                             )
//                         )

//                     )}

//                 </div>

//             </main>


//             {/* FOOTER */}

//             <footer className="
//                 border-t border-white/10
//                 text-center
//                 py-8
//                 text-gray-500
//             ">

//                 VOYAGER © 2026
//                 <span className="text-cyan-400">
//                     {" "}•{" "}
//                 </span>
//                 MISSION CONTROL

//             </footer>

//         </div>

//     );

// }


// // ===============================
// // APP / ROUTING
// // ===============================

// function App() {

//     return (

//         <Routes>

//             <Route
//                 path="/"
//                 element={<Home />}
//             />

//             <Route
//                 path="/collections"
//                 element={<Collections />}
//             />

//         </Routes>

//     );

// }


// export default App;














































// // ------------------basic all concept prjct----------------------------

// import { useEffect, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";

// const productsData = [
//   {
//     id: 1,
//     name: "Classic Black T-Shirt",
//     price: 799,
//     category: "Fashion",
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
//   },
//   {
//     id: 2,
//     name: "White Sneakers",
//     price: 1499,
//     category: "Footwear",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
//   },
//   {
//     id: 3,
//     name: "Luxury Watch",
//     price: 2499,
//     category: "Accessories",
//     image:
//       "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
//   },
//   {
//     id: 4,
//     name: "Travel Backpack",
//     price: 1199,
//     category: "Travel",
//     image:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
//   },
//   {
//     id: 5,
//     name: "Wireless Headphones",
//     price: 1999,
//     category: "Electronics",
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
//   },
// ];

// function Home() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">

//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-5 bg-slate-900">
//         <h1 className="text-2xl font-bold">
//           NOVA<span className="text-blue-400">CART</span>
//         </h1>

//         <div className="flex gap-6">
//           <Link to="/" className="hover:text-blue-400">
//             Home
//           </Link>

//           <Link to="/products" className="hover:text-blue-400">
//             Products
//           </Link>

//           <Link to="/about" className="hover:text-blue-400">
//             About
//           </Link>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="px-8 py-20 grid md:grid-cols-2 gap-10 items-center">

//         <div>
//           <p className="text-blue-400 font-semibold mb-4">
//             NEW COLLECTION 2026
//           </p>

//           <h2 className="text-5xl font-bold leading-tight">
//             Shop less.
//             <br />
//             Choose better.
//           </h2>

//           <p className="mt-5 text-slate-300">
//             Discover premium fashion, electronics,
//             accessories and travel essentials.
//           </p>

//           <Link to="/products">
//             <button className="mt-7 bg-white text-black px-6 py-3 rounded-lg">
//               Explore Products
//             </button>
//           </Link>
//         </div>

//         <div>
//           <img
//             src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
//             alt="Product"
//             className="w-full h-80 object-cover rounded-3xl"
//           />
//         </div>

//       </section>

//     </div>
//   );
// }


// function Products() {

//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   const getProducts = () => {

//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => {

//         if (data.length > 0) {
//           setProducts(data);
//         } else {
//           setProducts(productsData);
//         }

//       });

//   };


//   useEffect(() => {
//     getProducts();
//   }, []);


//   const addToCart = (product) => {

//     setCart([...cart, product]);

//     console.log("Added to cart:", product.name);

//   };


//   const removeFromCart = (id) => {

//     const newCart = cart.filter((item) => item.id !== id);

//     setCart(newCart);

//   };


//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );


//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* NAVBAR */}

//       <nav className="flex justify-between items-center px-8 py-5 bg-slate-950 text-white">

//         <Link to="/" className="text-2xl font-bold">
//           NOVA<span className="text-blue-400">CART</span>
//         </Link>

//         <div className="flex gap-6">

//           <Link to="/">Home</Link>

//           <Link to="/products">Products</Link>

//           <Link to="/about">About</Link>

//         </div>

//       </nav>


//       {/* PRODUCTS */}

//       <section className="px-8 py-12">

//         <h2 className="text-3xl font-bold">
//           Products
//         </h2>

//         <p className="text-gray-600 mt-2">
//           Simple products. Simple shopping.
//         </p>


//         {/* SEARCH */}

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="mt-6 w-full md:w-80 px-4 py-3 border rounded-lg"
//         />


//         {/* PRODUCT CARDS */}

//         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

//           {filteredProducts.map((product) => (

//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow p-4"
//             >

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded-lg"
//               />

//               <h3 className="font-bold mt-4">
//                 {product.name}
//               </h3>

//               <p className="text-gray-500">
//                 {product.category}
//               </p>

//               <p className="font-bold mt-2">
//                 ₹{product.price}
//               </p>


//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 w-full bg-black text-white py-2 rounded-lg"
//               >
//                 Add to Cart
//               </button>

//             </div>

//           ))}

//         </div>


//         {/* CART */}

//         <div className="mt-12 bg-white p-6 rounded-xl">

//           <h2 className="text-2xl font-bold">
//             Cart
//           </h2>

//           {cart.length === 0 ? (

//             <p className="text-gray-500 mt-3">
//               Cart is empty
//             </p>

//           ) : (

//             <div className="mt-4">

//               {cart.map((item, index) => (

//                 <div
//                   key={index}
//                   className="flex justify-between items-center border-b py-3"
//                 >

//                   <span>{item.name}</span>

//                   <span>₹{item.price}</span>

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500"
//                   >
//                     Remove
//                   </button>

//                 </div>

//               ))}

//             </div>

//           )}

//         </div>

//       </section>

//     </div>
//   );
// }


// function About() {

//   return (

//     <div className="min-h-screen bg-slate-100">

//       <nav className="px-8 py-5 bg-slate-950 text-white">

//         <Link to="/" className="text-2xl font-bold">
//           NOVA<span className="text-blue-400">CART</span>
//         </Link>

//       </nav>


//       <div className="max-w-3xl mx-auto px-6 py-20">

//         <h1 className="text-4xl font-bold">
//           About Nova Cart
//         </h1>

//         <p className="mt-5 text-gray-600">
//           Nova Cart is a simple e-commerce website
//           built using React, Express and MySQL.
//         </p>

//         <p className="mt-4 text-gray-600">
//           This project demonstrates basic frontend,
//           backend, API and database concepts.
//         </p>

//       </div>

//     </div>

//   );

// }


// function App() {

//   return (

//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/products" element={<Products />} />

//       <Route path="/about" element={<About />} />

//     </Routes>

//   );

// }

// export default App;
 





































// // -----------------------professional prjct-------------------------------------

// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   useParams
// } from "react-router-dom";

// /* =========================================================
//    NOVA CART
//    E-COMMERCE PROJECT
//    ========================================================= */

// /* ---------------------------------------------------------
//    JAVASCRIPT CONCEPTS
//    variables
//    arrays
//    indexing
//    functions
//    function declaration
//    anonymous function
//    conditions
//    && || operators
//    loops
//    switch
//    map
//    --------------------------------------------------------- */

// const storeName = "NOVA CART";

// const categories = [
//   "All",
//   "Fashion", 
//   "Electronics",
//   "Accessories",
//   "Travel"
// ];

// const fallbackProducts = [
//   {
//     id: 1,
//     name: "Urban Black T-Shirt",
//     category: "Fashion",
//     price: 799,
//     oldPrice: 1199,
//     rating: 4.7,
//     stock: 20,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 2,
//     name: "Cloud White Sneakers",
//     category: "Fashion",
//     price: 2499,
//     oldPrice: 3499,
//     rating: 4.8,
//     stock: 15,
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 3,
//     name: "Aero Wireless Headphones",
//     category: "Electronics",
//     price: 3299,
//     oldPrice: 4499,
//     rating: 4.6,
//     stock: 12,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 4,
//     name: "Midnight Luxury Watch",
//     category: "Accessories",
//     price: 4999,
//     oldPrice: 6999,
//     rating: 4.9,
//     stock: 8,
//     image:
//       "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 5,
//     name: "Explorer Travel Backpack",
//     category: "Travel",
//     price: 1899,
//     oldPrice: 2599,
//     rating: 4.5,
//     stock: 25,
//     image:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 6,
//     name: "Minimal Beige Hoodie",
//     category: "Fashion",
//     price: 1499,
//     oldPrice: 2199,
//     rating: 4.7,
//     stock: 18,
//     image:
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
//   }
// ];

// /* ---------------------------------------------------------
//    FUNCTION DECLARATION
//    --------------------------------------------------------- */

// function formatPrice(price) {
//   return `₹${Number(price).toLocaleString("en-IN")}`;
// }

// /* ---------------------------------------------------------
//    NORMAL FUNCTION
//    --------------------------------------------------------- */

// function getDiscount(price, oldPrice) {
//   if (oldPrice > price) {
//     return Math.round(((oldPrice - price) / oldPrice) * 100);
//   }

//   return 0;
// }

// /* ---------------------------------------------------------
//    SWITCH CASE
//    --------------------------------------------------------- */

// function getCategoryEmoji(category) {
//   switch (category) {
//     case "Fashion":
//       return "👕";

//     case "Electronics":
//       return "🎧";

//     case "Accessories":
//       return "⌚";

//     case "Travel":
//       return "🎒";

//     default:
//       return "🛍️";
//   }
// }

// /* ---------------------------------------------------------
//    HIGHER ORDER FUNCTION / FUNCTION ASSIGNMENT
//    --------------------------------------------------------- */

// const priceChecker = (price) => {
//   if (price >= 3000) {
//     return "Premium";
//   }

//   return "Popular";
// };

// /* ---------------------------------------------------------
//    NAVBAR
//    --------------------------------------------------------- */

// function Navbar({ cartCount }) {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

//         <Link to="/" className="text-2xl font-black tracking-tight">
//           NOVA<span className="text-indigo-600">CART</span>
//         </Link>

//         <div className="hidden gap-7 text-sm font-semibold md:flex">
//           <Link
//             to="/"
//             className="transition hover:text-indigo-600"
//           >
//             Home
//           </Link>

//           <Link
//             to="/products"
//             className="transition hover:text-indigo-600"
//           >
//             Products
//           </Link>

//           <Link
//             to="/about"
//             className="transition hover:text-indigo-600"
//           >
//             About
//           </Link>
//         </div>

//         <Link
//           to="/cart"
//           className="relative rounded-full bg-gray-100 px-4 py-2 text-sm font-bold transition hover:bg-gray-200"
//         >
//           🛒 Cart

//           {cartCount > 0 && (
//             <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// /* ---------------------------------------------------------
//    PRODUCT CARD
//    --------------------------------------------------------- */

// function ProductCard({ product, addToCart }) {
//   const discount = getDiscount(product.price, product.oldPrice);

//   return (
//     <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//       <Link to={`/products/${product.id}`}>
//         <div className="relative h-72 overflow-hidden bg-gray-100">

//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//           />

//           {discount > 0 && (
//             <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
//               {discount}% OFF
//             </span>
//           )}
//         </div>
//       </Link>

//       <div className="p-5">

//         <div className="mb-2 flex items-center justify-between">
//           <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
//             {getCategoryEmoji(product.category)} {product.category}
//           </span>

//           <span className="text-xs text-gray-500">
//             ⭐ {product.rating}
//           </span>
//         </div>

//         <Link to={`/products/${product.id}`}>
//           <h3 className="text-lg font-bold transition hover:text-indigo-600">
//             {product.name}
//           </h3>
//         </Link>

//         <div className="mt-3 flex items-center gap-3">
//           <span className="text-xl font-black">
//             {formatPrice(product.price)}
//           </span>

//           <span className="text-sm text-gray-400 line-through">
//             {formatPrice(product.oldPrice)}
//           </span>
//         </div>

//         <p className="mt-2 text-xs font-semibold text-gray-500">
//           {priceChecker(product.price)}
//         </p>

//         <button
//           onClick={() => addToCart(product)}
//           className="mt-5 w-full rounded-2xl bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    HOME
//    --------------------------------------------------------- */

// function Home({ products, addToCart }) {
//   const navigate = useNavigate();

//   return (
//     <div>

//       {/* HERO */}

//       <section className="bg-gray-950 text-white">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">

//           <div>
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">
//               New Collection 2026
//             </p>

//             <h1 className="text-5xl font-black leading-tight md:text-7xl">
//               Shop less.
//               <br />
//               <span className="text-indigo-400">Choose better.</span>
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
//               Discover premium fashion, electronics, accessories and
//               travel essentials — all in one place.
//             </p>

//             <div className="mt-8 flex gap-4">

//               <button
//                 onClick={() => navigate("/products")}
//                 className="rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:bg-indigo-500 hover:text-white"
//               >
//                 Explore Products
//               </button>

//               <button
//                 onClick={() => navigate("/about")}
//                 className="rounded-2xl border border-gray-700 px-6 py-3 font-bold transition hover:border-white"
//               >
//                 Our Story
//               </button>

//             </div>
//           </div>

//           <div className="relative">
//             <img
//               src={products[1]?.image}
//               alt="Featured product"
//               className="h-[500px] w-full rounded-[2rem] object-cover"
//             />

//             <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-5 text-black backdrop-blur">
//               <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
//                 Featured
//               </p>

//               <p className="mt-1 font-black">
//                 {products[1]?.name || "Premium Collection"}
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* CATEGORY */}

//       <section className="mx-auto max-w-7xl px-5 py-16">

//         <div className="mb-8">
//           <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//             Browse
//           </p>

//           <h2 className="mt-2 text-3xl font-black">
//             Shop by category
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

//           {categories.slice(1).map((category) => (
//             <Link
//               key={category}
//               to={`/products?category=${category}`}
//               className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-1 hover:bg-black hover:text-white"
//             >
//               <div className="text-4xl">
//                 {getCategoryEmoji(category)}
//               </div>

//               <p className="mt-3 font-bold">
//                 {category}
//               </p>
//             </Link>
//           ))}

//         </div>
//       </section>

//       {/* FEATURED */}

//       <section className="mx-auto max-w-7xl px-5 pb-20">

//         <div className="mb-8 flex items-end justify-between">

//           <div>
//             <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//               Trending
//             </p>

//             <h2 className="mt-2 text-3xl font-black">
//               Popular products
//             </h2>
//           </div>

//           <Link
//             to="/products"
//             className="hidden font-bold underline md:block"
//           >
//             View all
//           </Link>

//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {products.slice(0, 6).map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>

//       </section>

//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    PRODUCTS PAGE
//    --------------------------------------------------------- */

// function Products({ products, addToCart }) {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProducts = products.filter((product) => {

//     const searchMatch =
//       product.name.toLowerCase().includes(search.toLowerCase());

//     const categoryMatch =
//       selectedCategory === "All" ||
//       product.category === selectedCategory;

//     return searchMatch && categoryMatch;
//   });

//   return (
//     <section className="mx-auto max-w-7xl px-5 py-14">

//       <div className="mb-10">
//         <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//           Collection
//         </p>

//         <h1 className="mt-2 text-4xl font-black">
//           All Products
//         </h1>

//         <p className="mt-2 text-gray-500">
//           Find something that fits your style.
//         </p>
//       </div>

//       {/* SEARCH */}

//       <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">

//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search products..."
//           className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-indigo-600"
//         />

//         <div className="flex flex-wrap gap-2">

//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
//                 selectedCategory === category
//                   ? "bg-black text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}

//         </div>

//       </div>

//       {/* PRODUCT LIST */}

//       {filteredProducts.length === 0 ? (
//         <div className="rounded-3xl bg-gray-50 py-20 text-center">
//           <div className="text-5xl">🔎</div>
//           <h2 className="mt-4 text-2xl font-black">
//             No products found
//           </h2>
//           <p className="mt-2 text-gray-500">
//             Try another search.
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       )}

//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    PRODUCT DETAILS
//    --------------------------------------------------------- */

// function ProductDetails({ products, addToCart }) {

//   const { id } = useParams();

//   const product = products.find(
//     (item) => String(item.id) === String(id)
//   );

//   if (!product) {
//     return (
//       <div className="mx-auto max-w-3xl px-5 py-32 text-center">
//         <h1 className="text-4xl font-black">
//           Product not found
//         </h1>

//         <Link
//           to="/products"
//           className="mt-6 inline-block rounded-2xl bg-black px-6 py-3 font-bold text-white"
//         >
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   const discount = getDiscount(product.price, product.oldPrice);

//   return (
//     <section className="mx-auto max-w-6xl px-5 py-14">

//       <div className="grid gap-12 md:grid-cols-2">

//         <div className="overflow-hidden rounded-[2rem] bg-gray-100">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-[550px] w-full object-cover"
//           />
//         </div>

//         <div className="flex flex-col justify-center">

//           <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//             {getCategoryEmoji(product.category)} {product.category}
//           </p>

//           <h1 className="mt-4 text-4xl font-black md:text-5xl">
//             {product.name}
//           </h1>

//           <div className="mt-5 flex items-center gap-3">
//             <span className="text-xl">
//               ⭐ {product.rating}
//             </span>

//             <span className="text-gray-400">
//               •
//             </span>

//             <span className="text-gray-500">
//               {product.stock} available
//             </span>
//           </div>

//           <div className="mt-8 flex items-center gap-4">
//             <span className="text-4xl font-black">
//               {formatPrice(product.price)}
//             </span>

//             <span className="text-lg text-gray-400 line-through">
//               {formatPrice(product.oldPrice)}
//             </span>

//             {discount > 0 && (
//               <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
//                 {discount}% OFF
//               </span>
//             )}
//           </div>

//           <p className="mt-8 leading-8 text-gray-600">
//             A premium everyday product designed for comfort,
//             quality and modern lifestyle. Carefully selected for
//             the NOVA CART collection.
//           </p>

//           <div className="mt-8 flex gap-4">

//             <button
//               onClick={() => addToCart(product)}
//               className="flex-1 rounded-2xl bg-black px-6 py-4 font-bold text-white transition hover:bg-indigo-600"
//             >
//               Add to Cart
//             </button>

//             <Link
//               to="/cart"
//               className="rounded-2xl border border-gray-300 px-6 py-4 font-bold transition hover:bg-gray-100"
//             >
//               View Cart
//             </Link>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    CART
//    --------------------------------------------------------- */

// function Cart({ cart, setCart }) {

//   const navigate = useNavigate();

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   function increaseQuantity(id) {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   }

//   function decreaseQuantity(id) {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }

//   function removeItem(id) {
//     setCart(cart.filter((item) => item.id !== id));
//   }

//   if (cart.length === 0) {
//     return (
//       <section className="mx-auto max-w-4xl px-5 py-32 text-center">

//         <div className="text-7xl">🛒</div>

//         <h1 className="mt-6 text-4xl font-black">
//           Your cart is empty
//         </h1>

//         <p className="mt-3 text-gray-500">
//           Add something you love.
//         </p>

//         <Link
//           to="/products"
//           className="mt-7 inline-block rounded-2xl bg-black px-7 py-4 font-bold text-white"
//         >
//           Start Shopping
//         </Link>

//       </section>
//     );
//   }

//   return (
//     <section className="mx-auto max-w-6xl px-5 py-14">

//       <div className="mb-10">
//         <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//           Your Bag
//         </p>

//         <h1 className="mt-2 text-4xl font-black">
//           Shopping Cart
//         </h1>
//       </div>

//       <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

//         <div className="space-y-4">

//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-4"
//             >

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-28 w-28 rounded-2xl object-cover"
//               />

//               <div className="flex flex-1 flex-col justify-between">

//                 <div className="flex justify-between gap-4">

//                   <div>
//                     <h3 className="font-black">
//                       {item.name}
//                     </h3>

//                     <p className="mt-1 text-sm text-gray-500">
//                       {formatPrice(item.price)}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-sm font-bold text-red-500"
//                   >
//                     Remove
//                   </button>

//                 </div>

//                 <div className="mt-4 flex items-center justify-between">

//                   <div className="flex items-center rounded-xl bg-gray-100">

//                     <button
//                       onClick={() => decreaseQuantity(item.id)}
//                       className="px-4 py-2 font-bold"
//                     >
//                       −
//                     </button>

//                     <span className="px-2 font-bold">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => increaseQuantity(item.id)}
//                       className="px-4 py-2 font-bold"
//                     >
//                       +
//                     </button>

//                   </div>

//                   <p className="font-black">
//                     {formatPrice(item.price * item.quantity)}
//                   </p>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//         <div className="h-fit rounded-3xl bg-gray-950 p-7 text-white">

//           <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
//             Summary
//           </p>

//           <h2 className="mt-3 text-2xl font-black">
//             Order Total
//           </h2>

//           <div className="my-6 border-t border-gray-800" />

//           <div className="flex justify-between text-gray-400">
//             <span>Subtotal</span>
//             <span>{formatPrice(total)}</span>
//           </div>

//           <div className="mt-3 flex justify-between text-gray-400">
//             <span>Delivery</span>
//             <span>FREE</span>
//           </div>

//           <div className="my-6 border-t border-gray-800" />

//           <div className="flex justify-between text-xl font-black">
//             <span>Total</span>
//             <span>{formatPrice(total)}</span>
//           </div>

//           <button
//             onClick={() => navigate("/checkout")}
//             className="mt-7 w-full rounded-2xl bg-white px-5 py-4 font-black text-black transition hover:bg-indigo-500 hover:text-white"
//           >
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    CHECKOUT
//    --------------------------------------------------------- */

// function Checkout({ cart, setCart }) {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [payment, setPayment] = useState("COD");

//   const [message, setMessage] = useState("");

//   function placeOrder() {

//     if (
//       name === "" ||
//       email === "" ||
//       address === ""
//     ) {
//       setMessage("Please fill all fields.");
//       return;
//     }

//     if (
//       email.includes("@") &&
//       address.length > 10
//     ) {
//       setMessage(
//         "Order placed successfully! 🎉"
//       );

//       setCart([]);
//     } else {
//       setMessage(
//         "Please enter valid customer details."
//       );
//     }
//   }

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <section className="mx-auto max-w-5xl px-5 py-14">

//       <div className="mb-10">
//         <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
//           Checkout
//         </p>

//         <h1 className="mt-2 text-4xl font-black">
//           Complete your order
//         </h1>
//       </div>

//       <div className="grid gap-8 md:grid-cols-2">

//         <div className="rounded-3xl border border-gray-200 p-7">

//           <h2 className="text-xl font-black">
//             Customer Details
//           </h2>

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-6 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-indigo-600"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-4 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-indigo-600"
//           />

//           <textarea
//             placeholder="Delivery Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="mt-4 h-32 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-indigo-600"
//           />

//           <select
//             value={payment}
//             onChange={(e) => setPayment(e.target.value)}
//             className="mt-4 w-full rounded-2xl border border-gray-300 p-4 outline-none"
//           >
//             <option value="COD">
//               Cash on Delivery
//             </option>

//             <option value="UPI">
//               UPI
//             </option>

//             <option value="CARD">
//               Card
//             </option>
//           </select>

//           <button
//             onClick={placeOrder}
//             className="mt-6 w-full rounded-2xl bg-black px-5 py-4 font-bold text-white transition hover:bg-indigo-600"
//           >
//             Place Order
//           </button>

//           {message && (
//             <p className="mt-4 rounded-2xl bg-gray-100 p-4 text-center font-bold">
//               {message}
//             </p>
//           )}

//         </div>

//         <div className="h-fit rounded-3xl bg-gray-950 p-7 text-white">

//           <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
//             Order Summary
//           </p>

//           <div className="mt-6 space-y-4">

//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between gap-4"
//               >
//                 <span className="text-gray-400">
//                   {item.name} × {item.quantity}
//                 </span>

//                 <span className="font-bold">
//                   {formatPrice(item.price * item.quantity)}
//                 </span>
//               </div>
//             ))}

//           </div>

//           <div className="my-6 border-t border-gray-800" />

//           <div className="flex justify-between text-xl font-black">
//             <span>Total</span>
//             <span>{formatPrice(total)}</span>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    ABOUT
//    --------------------------------------------------------- */

// function About() {
//   return (
//     <section className="mx-auto max-w-5xl px-5 py-20">

//       <div className="rounded-[2rem] bg-gray-950 p-10 text-white md:p-16">

//         <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
//           About NOVA CART
//         </p>

//         <h1 className="mt-5 text-5xl font-black">
//           Simple shopping.
//           <br />
//           Better choices.
//         </h1>

//         <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
//           NOVA CART is a full-stack e-commerce project built using
//           React, Tailwind CSS, Express and MySQL.
//         </p>

//         <div className="mt-10 grid gap-4 sm:grid-cols-3">

//           <div className="rounded-2xl bg-white/10 p-5">
//             <p className="text-2xl font-black">React</p>
//             <p className="mt-1 text-sm text-gray-400">
//               Frontend
//             </p>
//           </div>

//           <div className="rounded-2xl bg-white/10 p-5">
//             <p className="text-2xl font-black">Express</p>
//             <p className="mt-1 text-sm text-gray-400">
//               Backend
//             </p>
//           </div>

//           <div className="rounded-2xl bg-white/10 p-5">
//             <p className="text-2xl font-black">MySQL</p>
//             <p className="mt-1 text-sm text-gray-400">
//               Database
//             </p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    FOOTER
//    --------------------------------------------------------- */

// function Footer() {
//   return (
//     <footer className="mt-20 border-t border-gray-200">

//       <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 md:flex-row">

//         <div>
//           <p className="font-black">
//             NOVA CART
//           </p>

//           <p className="mt-1 text-sm text-gray-500">
//             Modern shopping, made simple.
//           </p>
//         </div>

//         <div className="flex gap-5 text-sm font-semibold text-gray-500">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/about">About</Link>
//         </div>

//       </div>

//     </footer>
//   );
// }

// /* ---------------------------------------------------------
//    MAIN APP
//    --------------------------------------------------------- */

// function App() {

//   const [products, setProducts] =
//     useState(fallbackProducts);

//   const [cart, setCart] = useState([]);

//   /* -------------------------------------------------------
//      GET DATA
//      useEffect + fetch
//      ------------------------------------------------------- */

//   useEffect(() => {

//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => {

//         if (Array.isArray(data) && data.length > 0) {
//           setProducts(data);
//         }

//       })
//       .catch(() => {
//         console.log(
//           "Backend not connected. Showing demo products."
//         );
//       });

//   }, []);

//   /* -------------------------------------------------------
//      ADD TO CART
//      ------------------------------------------------------- */

//   const addToCart = (product) => {

//     const existingProduct = cart.find(
//       (item) => item.id === product.id
//     );

//     if (existingProduct) {

//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1
//               }
//             : item
//         )
//       );

//     } else {

//       setCart([
//         ...cart,
//         {
//           ...product,
//           quantity: 1
//         }
//       ]);

//     }
//   };

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <BrowserRouter>

//       <div className="min-h-screen bg-white text-gray-950">

//         <Navbar cartCount={cartCount} />

//         <main>

//           <Routes>

//             <Route
//               path="/"
//               element={
//                 <Home
//                   products={products}
//                   addToCart={addToCart}
//                 />
//               }
//             />

//             <Route
//               path="/products"
//               element={
//                 <Products
//                   products={products}
//                   addToCart={addToCart}
//                 />
//               }
//             />

//             <Route
//               path="/products/:id"
//               element={
//                 <ProductDetails
//                   products={products}
//                   addToCart={addToCart}
//                 />
//               }
//             />

//             <Route
//               path="/cart"
//               element={
//                 <Cart
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />

//             <Route
//               path="/checkout"
//               element={
//                 <Checkout
//                   cart={cart}
//                   setCart={setCart}
//                 />
//               }
//             />

//             <Route
//               path="/about"
//               element={<About />}
//             />

//             <Route
//               path="*"
//               element={
//                 <div className="px-5 py-32 text-center">
//                   <h1 className="text-5xl font-black">
//                     404
//                   </h1>

//                   <p className="mt-3 text-gray-500">
//                     Page not found.
//                   </p>

//                   <Link
//                     to="/"
//                     className="mt-6 inline-block rounded-2xl bg-black px-6 py-3 font-bold text-white"
//                   >
//                     Go Home
//                   </Link>
//                 </div>
//               }
//             />

//           </Routes>

//         </main>

//         <Footer />

//       </div>

//     </BrowserRouter>
//   );
// }

// export default App;












































































































// // // -------------own prjct chatgpt version-----------------------------------------

// // import Blacktshirt from "../assets/Blacktshirt.jpg"
// // import Whitesneakers from "../assets/Whitesneakers.jpg"
// // import Luxurywatch from "../assets/Luxurywatch.jpg"
// // import Travelbackpack from "../assets/Travelbackpack.jpg"
// // import Wirelessheadphones from "../assets/Wirelessheadphones.jpg"

// // import { useState } from "react"


// // function Ecommerce() {


// //     // ============================================================
// //     // PRODUCTS
// //     // ============================================================

// //     const Products = [

// //         {
// //             id: 1,
// //             title: "Men Black T-Shirt",
// //             price: 499,
// //             image: Blacktshirt,
// //             imageclass: "",
// //         },

// //         {
// //             id: 2,
// //             title: "White Sneakers",
// //             price: 999,
// //             image: Whitesneakers,
// //             imageclass: "w-[150px] ml-[30px]",
// //         },

// //         {
// //             id: 3,
// //             title: "Luxury Watch",
// //             price: 799,
// //             image: Luxurywatch,
// //             imageclass: "w-[170px] ml-[10px]",
// //         },

// //         {
// //             id: 4,
// //             title: "Travel Backpack",
// //             price: 1299,
// //             image: Travelbackpack,
// //             imageclass: "w-[180px] ml-[10px]",
// //         },

// //         {
// //             id: 5,
// //             title: "Wireless Headphones",
// //             price: 1499,
// //             image: Wirelessheadphones,
// //             imageclass: "",
// //         }

// //     ]


// //     // ============================================================
// //     // CART STATE
// //     // ============================================================

// //     const [cart, setCart] = useState([])


// //     // ============================================================
// //     // ADD TO CART
// //     // ============================================================

// //     function addToCart(product) {

// //         const alreadyCart = cart.find((item) => item.id === product.id)


// //         if (alreadyCart) {

// //             setCart(
// //                 cart.map((item) => {

// //                     if (item.id === product.id) {

// //                         return {
// //                             ...item,
// //                             quantity: item.quantity + 1
// //                         }

// //                     }

// //                     return item

// //                 })
// //             )

// //         }

// //         else {

// //             setCart([
// //                 ...cart,
// //                 {
// //                     ...product,
// //                     quantity: 1
// //                 }
// //             ])

// //         }

// //     }


// //     // ============================================================
// //     // INCREASE QUANTITY
// //     // ============================================================

// //     function increaseQuantity(id) {

// //         setCart(
// //             cart.map((item) => {

// //                 if (item.id === id) {

// //                     return {
// //                         ...item,
// //                         quantity: item.quantity + 1
// //                     }

// //                 }

// //                 return item

// //             })
// //         )

// //     }


// //     // ============================================================
// //     // DECREASE QUANTITY
// //     // ============================================================

// //     function decreaseQuantity(id) {

// //         setCart(
// //             cart.map((item) => {

// //                 if (item.id === id) {

// //                     if (item.quantity > 1) {

// //                         return {
// //                             ...item,
// //                             quantity: item.quantity - 1
// //                         }

// //                     }

// //                 }

// //                 return item

// //             })
// //         )

// //     }


// //     // ============================================================
// //     // REMOVE PRODUCT
// //     // ============================================================

// //     function removeProduct(id) {

// //         setCart(
// //             cart.filter((item) => item.id !== id)
// //         )

// //     }


// //     // ============================================================
// //     // TOTAL
// //     // ============================================================

// //     let total = 0

// //     cart.map((item) => {

// //         total = total + (item.price * item.quantity)

// //     })


// //     // ============================================================
// //     // CHECKOUT
// //     // ============================================================

// //     function checkout() {

// //         if (cart.length === 0) {

// //             alert("Your cart is empty")

// //         }

// //         else {

// //             alert("Order placed successfully!")

// //         }

// //     }


// //     // ============================================================
// //     // NAVIGATION
// //     // ============================================================

// //     function goHome() {

// //         window.scrollTo({
// //             top: 0,
// //             behavior: "smooth"
// //         })

// //     }


// //     function goProducts() {

// //         document.getElementById("products").scrollIntoView({
// //             behavior: "smooth"
// //         })

// //     }


// //     function goCart() {

// //         document.getElementById("cart").scrollIntoView({
// //             behavior: "smooth"
// //         })

// //     }


// //     function goAbout() {

// //         document.getElementById("about").scrollIntoView({
// //             behavior: "smooth"
// //         })

// //     }


// //     // ============================================================
// //     // RETURN
// //     // ============================================================

// //     return (

// //         <>


// //             {/* ============================================================
// //                                 NAVBAR
// //             ============================================================ */}

// //             <div className="border-4 border-black h-[70px] w-[1600px] bg-black fixed top-0 left-0 z-50">


// //                 <h1
// //                     onClick={goHome}
// //                     className="text-white mt-[15px] font-bold text-2xl cursor-pointer"
// //                 >
// //                     🛒 Shop
// //                 </h1>


// //                 <h1
// //                     onClick={goHome}
// //                     className="text-yellow-500 mt-[-32px] font-bold text-2xl pl-[100px] cursor-pointer"
// //                 >
// //                     Easy
// //                 </h1>


// //                 <div className="flex text-white pl-[1150px] gap-14 font-bold text-xl mt-[-25px]">


// //                     <button
// //                         onClick={goHome}
// //                         className="hover:border-yellow-300 hover:border-b-2"
// //                     >
// //                         Home
// //                     </button>


// //                     <button
// //                         onClick={goAbout}
// //                         className="hover:border-yellow-300 hover:border-b-2"
// //                     >
// //                         About
// //                     </button>


// //                     <button
// //                         onClick={goCart}
// //                         className="hover:border-yellow-300 hover:border-b-2"
// //                     >
// //                         Cart ({cart.length})
// //                     </button>


// //                     <button
// //                         onClick={() => alert("Login page coming soon")}
// //                         className="hover:border-yellow-300 hover:border-b-2"
// //                     >
// //                         Login
// //                     </button>


// //                 </div>

// //             </div>



// //             {/* ============================================================
// //                                 PAGE 1
// //             ============================================================ */}

// //             <div className="border-[1px] border-black w-[1600px] h-[765px]">


// //                 <div>


// //                     {/* WELCOME */}

// //                     <div>

// //                         <h1 className="pt-[300px] text-center font-bold text-[30px]">

// //                             <span className="hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">

// //                                 Welcome to

// //                             </span>

// //                         </h1>

// //                     </div>



// //                     {/* SHOP */}

// //                     <div>

// //                         <h1 className="text-center font-bold text-black text-[80px] pr-[140px]">

// //                             Shop

// //                         </h1>

// //                     </div>



// //                     {/* EASY */}

// //                     <div>

// //                         <h1 className="text-center pl-[360px] font-bold text-yellow-400 text-[80px] mt-[-120px] pr-[140px]">

// //                             Easy

// //                         </h1>

// //                     </div>



// //                     {/* DESCRIPTION */}

// //                     <div>

// //                         <h1 className="text-center mt-[20px] font-bold text-xl pl-[30px]">

// //                             Best Products at the best prices

// //                         </h1>

// //                     </div>



// //                     {/* SHOP NOW */}

// //                     <div className="text-center mt-[80px]">

// //                         <button
// //                             onClick={goProducts}
// //                             className="py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition"
// //                         >

// //                             Shop Now

// //                         </button>

// //                     </div>


// //                 </div>

// //             </div>



// //             {/* ============================================================
// //                                 PAGE 2
// //             ============================================================ */}

// //             <div
// //                 id="products"
// //                 className="border-x-[1px] border-b-[1px] border-black w-[1600px] h-[765px]"
// //             >


// //                 {/* TITLE */}

// //                 <div>

// //                     <h1 className="text-center pt-[150px] font-bold text-5xl">

// //                         <span className="hover:border-yellow-300 hover:border-b-[5px]">

// //                             Our Products

// //                         </span>

// //                     </h1>

// //                 </div>



// //                 {/* PRODUCTS */}

// //                 <div className="flex justify-center gap-[30px] mt-[100px]">


// //                     {Products.map((item) => {


// //                         return (

// //                             <div
// //                                 key={item.id}
// //                                 className="border-2 border-black w-[230px] h-[350px] p-[15px] hover:scale-105 hover:shadow-lg transition"
// //                             >


// //                                 {/* IMAGE */}

// //                                 <div className="h-[180px] flex justify-center items-center">

// //                                     <img
// //                                         className={item.imageclass}
// //                                         src={item.image}
// //                                         alt={item.title}
// //                                     />

// //                                 </div>



// //                                 {/* TITLE */}

// //                                 <p className="text-center font-bold mt-[10px]">

// //                                     {item.title}

// //                                 </p>



// //                                 {/* PRICE */}

// //                                 <p className="text-center font-bold mt-[10px]">

// //                                     ${item.price}

// //                                 </p>



// //                                 {/* ADD TO CART */}

// //                                 <div className="text-center">

// //                                     <button
// //                                         onClick={() => addToCart(item)}
// //                                         className="mt-[20px] py-2 px-5 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition"
// //                                     >

// //                                         🛒 Add to Cart

// //                                     </button>

// //                                 </div>


// //                             </div>

// //                         )

// //                     })}


// //                 </div>


// //             </div>



// //             {/* ============================================================
// //                                 PAGE 3 - CART
// //             ============================================================ */}

// //             <div
// //                 id="cart"
// //                 className="border-x-[1px] border-b-[1px] border-black w-[1600px] min-h-[765px] pb-[80px]"
// //             >


// //                 {/* CART TITLE */}

// //                 <div className="pt-[120px] pb-[60px]">

// //                     <h1 className="text-center font-bold text-5xl">

// //                         <span className="hover:border-b-[5px] hover:border-yellow-300">

// //                             Your Cart

// //                         </span>

// //                     </h1>

// //                 </div>



// //                 {/* CART HEADER */}

// //                 <div className="w-[1500px] mx-auto">


// //                     <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr_1.2fr] bg-slate-700 text-white font-bold h-[60px] items-center">


// //                         <div className="pl-[40px]">
// //                             Product
// //                         </div>


// //                         <div className="text-center">
// //                             Price
// //                         </div>


// //                         <div className="text-center">
// //                             Quantity
// //                         </div>


// //                         <div className="text-center">
// //                             Total
// //                         </div>


// //                         <div className="text-center">
// //                             Action
// //                         </div>


// //                     </div>



// //                     {/* ====================================================
// //                                 CART PRODUCTS
// //                     ==================================================== */}


// //                     {cart.length === 0 ? (


// //                         <div className="text-center font-bold text-2xl mt-[80px]">

// //                             Your Cart is Empty 🛒

// //                         </div>


// //                     ) : (


// //                         cart.map((item) => {


// //                             return (

// //                                 <div
// //                                     key={item.id}
// //                                     className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr_1.2fr] h-[100px] border-b-[1px] border-black items-center"
// //                                 >


// //                                     {/* PRODUCT */}

// //                                     <div className="flex items-center pl-[40px] gap-[25px]">


// //                                         <img
// //                                             className="w-[60px] h-[60px] object-contain"
// //                                             src={item.image}
// //                                             alt={item.title}
// //                                         />


// //                                         <span className="font-bold">

// //                                             {item.title}

// //                                         </span>


// //                                     </div>



// //                                     {/* PRICE */}

// //                                     <div className="text-center font-bold">

// //                                         ${item.price}

// //                                     </div>



// //                                     {/* QUANTITY */}

// //                                     <div className="flex justify-center">


// //                                         <div className="flex border-[1px] border-black">


// //                                             {/* MINUS */}

// //                                             <button
// //                                                 onClick={() => decreaseQuantity(item.id)}
// //                                                 className="w-[35px] h-[35px] hover:bg-gray-200"
// //                                             >

// //                                                 -

// //                                             </button>



// //                                             {/* COUNT */}

// //                                             <span className="w-[35px] h-[35px] border-x-[1px] border-black flex items-center justify-center">

// //                                                 {item.quantity}

// //                                             </span>



// //                                             {/* PLUS */}

// //                                             <button
// //                                                 onClick={() => increaseQuantity(item.id)}
// //                                                 className="w-[35px] h-[35px] hover:bg-gray-200"
// //                                             >

// //                                                 +

// //                                             </button>


// //                                         </div>

// //                                     </div>



// //                                     {/* TOTAL */}

// //                                     <div className="text-center font-bold">

// //                                         ${item.price * item.quantity}

// //                                     </div>



// //                                     {/* REMOVE */}

// //                                     <div className="text-center">

// //                                         <button
// //                                             onClick={() => removeProduct(item.id)}
// //                                             className="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 hover:scale-105 transition"
// //                                         >

// //                                             🗑 Remove

// //                                         </button>

// //                                     </div>


// //                                 </div>

// //                             )

// //                         })


// //                     )}



// //                     {/* ====================================================
// //                                 CART FOOTER
// //                     ==================================================== */}


// //                     <div className="flex justify-end items-center mt-[50px] gap-[40px]">


// //                         <h1 className="font-bold text-2xl">

// //                             Total: ${total}

// //                         </h1>



// //                         <button
// //                             onClick={checkout}
// //                             className="py-3 px-7 rounded-lg border-2 border-black bg-yellow-400 text-black font-bold hover:bg-yellow-300 hover:scale-105 hover:shadow-lg transition"
// //                         >

// //                             🛒 Proceed to Checkout

// //                         </button>


// //                     </div>


// //                 </div>


// //             </div>



// //             {/* ============================================================
// //                                 PAGE 4 - ABOUT
// //             ============================================================ */}

// //             <div
// //                 id="about"
// //                 className="border-x-[1px] border-b-[1px] border-black w-[1600px] h-[500px]"
// //             >


// //                 <h1 className="text-center pt-[100px] font-bold text-5xl">

// //                     About ShopEasy

// //                 </h1>


// //                 <p className="text-center mt-[40px] text-xl font-bold">

// //                     Welcome to ShopEasy

// //                 </p>


// //                 <p className="text-center mt-[20px] text-lg">

// //                     Best Products at the best prices

// //                 </p>


// //                 <div className="text-center mt-[40px]">

// //                     <button
// //                         onClick={goProducts}
// //                         className="py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 hover:bg-yellow-300 hover:scale-110 transition"
// //                     >

// //                         View Products

// //                     </button>

// //                 </div>


// //             </div>


// //         </>

// //     )

// // }


// // export default Ecommerce






































































































































































































// // // --------------own prjct my version---------------------------------------------------------

// // // import Blacktshirt from "../assets/Blacktshirt.jpg"
// // // import Whitesneakers from "../assets/Whitesneakers.jpg"
// // // import Luxurywatch from "../assets/Luxurywatch.jpg"
// // // import Travelbackpack from "../assets/Travelbackpack.jpg"
// // // import Wirelessheadphones from "../assets/Wirelessheadphones.jpg"
// // // import { useState } from "react"

// // // function Ecommerce() {

// // // const Products = [
        
// // // {
// // //  id: 1,
// // //  title: "Men Black T-Shirt",
// // //  price: "$499",
// // //  image: Blacktshirt,
// // //  titleclass: "mt-[25px]",
// // //  priceclass: "",
// // //  imageclass: "",
// // // },

// // // {
// // //  id: 2,
// // //  title: "White Sneakers",
// // //  price: "$999",
// // //  image: Whitesneakers,
// // //  titleclass: "mt-[20px]",
// // //  priceclass: "",
// // //  imageclass: "w-[150px] ml-[30px]",
// // // },

// // // {
// // //  id: 3,
// // //  title: "Luxury Watch",
// // //  price: "$799",
// // //  image: Luxurywatch,
// // //  titleclass: "",
// // //  priceclass: "",
// // //  imageclass: "w-[170px] ml-[10px]",
// // // },

// // // {
// // //  id: 4,
// // //  title: "Travel Backpack",
// // //  price: "$1299",
// // //  image: Travelbackpack,
// // //  titleclass: "mt-[30px]",
// // //  priceclass: "",
// // //  imageclass: "w-[280px] mt-[10px]",
// // // },

// // // {
// // //  id: 5,
// // //  title: "Wireless Headphones",
// // //  price: "$1499",
// // //  image: Wirelessheadphones,
// // //  titleclass: "mt-[20px]",
// // //  priceclass: "",
// // //  imageclass: "",
// // // }

// // // ]

// // // const [count, setcount] = useState(1);


// // // return (
// // // <>
               
// // // {/* ============================== NAVBAR ============================== */}

// // // <div className="border-4 border-black h-[70px] w-[1600px] bg-black fixed top-0 left-0 z-50">

// // //     <h1 className="text-white mt-[15px] font-bold text-2xl">
// // //         🛒 Shop
// // //     </h1>

// // //     <h1 className="text-yellow-500 mt-[-32px] font-bold text-2xl pl-[100px]">
// // //         Easy
// // //     </h1>

// // //     <h1 className="flex text-white pl-[1150px] gap-14 font-bold text-xl mt-[-25px]">
// // //         <li className="hover:border-yellow-300 hover:border-b-2">
// // //             Home
// // //         </li>

// // //         <li className="hover:border-yellow-300 hover:border-b-2">
// // //             About
// // //         </li>

// // //         <li className="hover:border-yellow-300 hover:border-b-2">
// // //             Cart
// // //         </li>

// // //         <li className="hover:border-yellow-300 hover:border-b-2">
// // //             Login
// // //         </li>
// // //     </h1>

// // // </div>


// // // {/* ===================================================================== */}
// // // {/* ============================== PAGE-1 =============================== */}
// // // {/* ===================================================================== */}

// // // <div className="border-[1px] border-black w-[1600px] h-[765px]">

// // //     {/* HERO SECTION */}

// // //     <div>

// // //         <div>
// // //             <h1 className="pt-[300px] text-center font-bold text-2xl text-[30px]">
// // //                 <span className="hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">
// // //                     Welcome to
// // //                 </span>
// // //             </h1>
// // //         </div>


// // //         <div>
// // //             <h1 className="text-center font-bold text-black text-[80px] pr-[140px] hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">
// // //                 Shop
// // //             </h1>
// // //         </div>


// // //         <div>
// // //             <h1 className="text-center pl-[360px] font-bold text-yellow-400 text-[80px] mt-[-120px] pr-[140px] hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">
// // //                 Easy
// // //             </h1>
// // //         </div>


// // //         <div>
// // //             <h1 className="text-center mt-[20px] font-bold text-xl pl-[30px]">
// // //                 <span className="hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">
// // //                     Best Products at the best prices
// // //                 </span>
// // //             </h1>
// // //         </div>


// // //         {/* SHOP NOW BUTTON */}

// // //         <div className="text-center mt-[80px]">

// // //             <button className="py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">
// // //                 Shop Now
// // //             </button>

// // //         </div>

// // //     </div>

// // // </div>


// // // {/* ===================================================================== */}
// // // {/* ============================== PAGE-2 =============================== */}
// // // {/* ===================================================================== */}

// // // <div className="border-x-[1px] border-b-[1px] border-black w-[1600px] h-[765px]">

// // //     <div>

// // //         <h1 className="text-center pt-[150px] font-bold text-5xl">

// // //             <span className="hover:border-yellow-300 hover:border-b-[5px] hover:scale-110 hover:shadow-lg transition">
// // //                 Our Products
// // //             </span>

// // //         </h1>

// // //     </div>


// // //     {/* PRODUCTS */}

// // //     <div className="flex justify-center gap-[-5px] mr-[60px]">

// // //         {Products.map((item) => {

// // //             return (

// // //                 <div
// // //                     key={item.id}
// // //                     className="border-2 border-black w-[200px] h-[300px] mt-[100px] ml-[100px]"
// // //                 >

// // //                     <div className="text-center font-bold">

// // //                         <img
// // //                             className={item.imageclass}
// // //                             src={item.image}
// // //                             alt="All"
// // //                         />


// // //                         <p className={item.titleclass}>
// // //                             {item.title}
// // //                         </p>


// // //                         <p className={item.priceclass}>
// // //                             {item.price}
// // //                         </p>


// // //                         <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">

// // //                             🛒Add to Cart

// // //                         </button>

// // //                     </div>

// // //                 </div>

// // //             )

// // //         })}

// // //     </div>

// // // </div>


// // // {/* ===================================================================== */}
// // // {/* ============================== PAGE-3 =============================== */}
// // // {/* ===================================================================== */}

// // // <div className="border-x-[1px] border-b-[1px] border-black w-[1600px] min-h-[765px] pb-[80px]">

// // //     {/* YOUR CART TITLE */}

// // //     <div className="pt-[120px] pb-[60px]">

// // //         <h1 className="text-center font-bold text-5xl">

// // //             <span className="hover:border-b-[5px] hover:border-yellow-300 hover:scale-110 hover:shadow-lg transition">

// // //                 Your Cart

// // //             </span>

// // //         </h1>

// // //     </div>


// // //     {/* CART TABLE */}

// // //     <div className="w-[1500px] mx-auto">

// // //         {/* TABLE HEADER */}

// // //         <div className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr_1.2fr] bg-slate-700 text-white font-bold h-[60px] items-center">

// // //             <div className="pl-[40px]">
// // //                 Product
// // //             </div>

// // //             <div className="text-center">
// // //                 Price
// // //             </div>

// // //             <div className="text-center">
// // //                 Quantity
// // //             </div>

// // //             <div className="text-center">
// // //                 Total
// // //             </div>

// // //             <div className="text-center">
// // //                 Action
// // //             </div>

// // //         </div>


// // //         {/* CART PRODUCTS */}

// // //         {Products.map((item) => {

// // //             return (

// // //                 <div
// // //                     key={item.id}
// // //                     className="grid grid-cols-[2.5fr_1fr_1.5fr_1fr_1.2fr] h-[90px] border-b-[1px] border-black items-center"
// // //                 >

// // //                     {/* PRODUCT */}

// // //                     <div className="flex items-center pl-[40px] gap-[25px]">

// // //                         <img
// // //                             className="w-[55px] h-[55px] object-contain"
// // //                             src={item.image}
// // //                             alt={item.title}
// // //                         />

// // //                         <span className="font-bold">
// // //                             {item.title}
// // //                         </span>

// // //                     </div>


// // //                     {/* PRICE */}

// // //                     <div className="text-center font-bold">
// // //                         {item.price}
// // //                     </div>


// // //                     {/* QUANTITY */}

// // //                     <div className="flex justify-center">

// // //                         <div className="flex border-[1px] border-black">

// // //                             <button onClick={()=>setcount(count+1)}
// // //                             className="w-[35px] h-[35px] hover:bg-gray-200">
// // //                                 -
// // //                             </button>

// // //                             <span className="w-[35px] h-[35px] border-x-[1px] border-black flex items-center justify-center">
// // //                                 {count}
// // //                             </span>

// // //                             <button onClick={()=>setcount(count-1)} 
// // //                             className="w-[35px] h-[35px] hover:bg-gray-200">
// // //                                 +
// // //                             </button>

// // //                         </div>

// // //                     </div>


// // //                     {/* TOTAL */}

// // //                     <div className="text-center font-bold">
// // //                         {item.price}
// // //                     </div>


// // //                     {/* REMOVE */}

// // //                     <div className="text-center">

// // //                         <button className="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 hover:scale-105 transition">

// // //                             🗑 Remove

// // //                         </button>

// // //                     </div>

// // //                 </div>

// // //             )

// // //         })}


// // //         {/* CART FOOTER */}

// // //         <div className="flex justify-end items-center mt-[50px] gap-[40px]">

// // //             <h1 className="font-bold text-2xl">
// // //                 Total: $5095
// // //             </h1>


// // //             <button className="py-3 px-7 rounded-lg border-2 border-black bg-yellow-400 text-black font-bold hover:bg-yellow-300 hover:scale-105 hover:shadow-lg transition">

// // //                 🛒 Proceed to Checkout

// // //             </button>

// // //         </div>

// // //     </div>

// // // </div>


// // // </>
// // // )

// // // }

// // // export default Ecommerce

  

















































































































































































// // // // -------------div flex map function previous line connected to last line div---------------------------------------------------------------------------------------------------

// // // {/* <div className="border-2 border-black w-[200px] h-[300px] mt-[100px] ml-[100px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[1200px]" src={Blacktshirt} alt="Blacktshirt" />
// // //                             <h1 className="mt-[25px]">{Products[0].title}</h1>
// // //                             <h1>{Products[0].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>
// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[400px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[150px] ml-[30px]" src={Whitesneakers} alt="shoe" />
// // //                             <h1 className="mt-[20px]">{Products[1].title}</h1>
// // //                             <h1>{Products[1].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[700px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[170px] ml-[10px]" src={Luxurywatch} alt="watch" />
// // //                             <h1>{Products[2].title}</h1>
// // //                             <h1>{Products[2].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[1000px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[1200px] mt-[10px]" src={Travelbackpack} alt="bag" />
// // //                             <h1 className="mt-[30px]">{Products[3].title}</h1>
// // //                             <h1>{Products[3].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[1300px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img src={Wirelessheadphones} alt="earbuds" />
// // //                             <h1 className="mt-[20px]">{Products[4].title}</h1>
// // //                             <h1>{Products[4].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>




// // //  */}





















            


















































































































































// // // // -------------div flex map function previous line connected to last line div---------------------------------------------------------------------------------------------------

// // // {/* <div className="border-2 border-black w-[200px] h-[300px] mt-[100px] ml-[100px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[1200px]" src={Blacktshirt} alt="Blacktshirt" />
// // //                             <h1 className="mt-[25px]">{Products[0].title}</h1>
// // //                             <h1>{Products[0].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>
// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[400px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[150px] ml-[30px]" src={Whitesneakers} alt="shoe" />
// // //                             <h1 className="mt-[20px]">{Products[1].title}</h1>
// // //                             <h1>{Products[1].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[700px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[170px] ml-[10px]" src={Luxurywatch} alt="watch" />
// // //                             <h1>{Products[2].title}</h1>
// // //                             <h1>{Products[2].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[1000px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img className="w-[1200px] mt-[10px]" src={Travelbackpack} alt="bag" />
// // //                             <h1 className="mt-[30px]">{Products[3].title}</h1>
// // //                             <h1>{Products[3].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>
                
                
// // //                     <div className="border-2 border-black w-[200px] h-[300px] mt-[-300px] ml-[1300px]">
// // //                         <h1 className="text-center font-bold">
// // //                             <img src={Wirelessheadphones} alt="earbuds" />
// // //                             <h1 className="mt-[20px]">{Products[4].title}</h1>
// // //                             <h1>{Products[4].price}</h1>
// // //                             <button className="mt-[20px] py-2 px-6 rounded-lg border-2 border-black bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-110 hover:shadow-lg transition">🛒Add to Cart</button>

// // //                         </h1>
// // //                     </div>




// // //  */}
















































































































            