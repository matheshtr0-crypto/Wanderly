// import BurgerLogo from "../assets/BurgerLogo.jpg"
// import Burger from "../assets/Burger.jpg"

// function NewProject() {
//   return (
//     <>
//       <div className="border-4 border-black">

//         {/* Navbar */}

//         <div className="border-[5px] border-red-500 h-[100px] bg-orange-500 flex gap-3 font-bold text-2xl fixed top-0 left-0 w-full">

//           <img
//             className="w-[90px] h-[90px] rounded-full"
//             src={BurgerLogo}
//             alt="BurgerLogo"
//           />

//           <h1 className="mt-8">
//             Burger-House
//           </h1>

//           <div className="flex gap-10 ml-auto mt-8 mr-7 mb-3 text-white">

//             <button className="bg-black rounded-full px-4 py-1">
//               HOME
//             </button>

//             <button className="bg-black rounded-full px-4 py-1">
//               MENU
//             </button>

//             <button className="bg-black rounded-full px-4 py-1">
//               ABOUT
//             </button>

//             <button className="bg-black rounded-full px-4 py-1">
//               CONTACT
//             </button>

//           </div>

//         </div>


//         {/* Hero Section */}

//         <div className="h-[700px] pt-[100px]">

//           <div>

//             <h1 className="pl-[100px] mt-[100px] text-6xl font-bold">
//               THE BEST BURGER
//             </h1>

//           </div>

//           <h1 className="pl-[110px] mt-[20px] text-6xl font-bold">
//             IN YOUR CITY
//           </h1>

//           <div>
//             <hr className="mt-[20px]" />
//           </div>

//           <div className="pl-[100px]">

//             <ul className="flex gap-1 mt-[30px] pl-[50px] font-bold text-xl">

//               <li>---Fresh</li>
//               <li>*Hot</li>
//               <li>*Delicious---</li>

//             </ul>

//           </div>


//           <div>

//             <button className="ml-[200px] mt-[50px] bg-orange-600 text-white rounded-full px-4 py-2 font-bold text-2xl">
//               ORDER NOW
//             </button>

//           </div>


//           <div className="flex ml-[900px] mt-[-350px]">

//             <img
//               className="w-[500px] h-[400px]"
//               src={Burger}
//               alt="Burger"
//             />

//           </div>

//         </div>


//         {/* Our Specials */}

//         <div className="border-4 border-black h-[650px] ">

//           <h1 className="text-center mt-[40px] text-4xl font-bold">
//             OUR SPECIALS
//           </h1>

//           <div className="flex gap-10 justify-center mt-[70px]">

//             <div className="border-4 border-black w-[250px] h-[350px] text-center">

//               <img
//                 className="w-[200px] h-[180px] ml-[20px] mt-[20px]"
//                 src={Burger}
//                 alt="Classic Burger"
//               />

//               <h1 className="text-2xl font-bold mt-[20px]">
//                 Classic
//               </h1>

//               <h2 className="text-xl mt-[15px]">
//                 ₹199
//               </h2>

//             </div>


//             <div className="border-4 border-black w-[250px] h-[350px] text-center">

//               <img
//                 className="w-[200px] h-[180px] ml-[20px] mt-[20px]"
//                 src={Burger}
//                 alt="Cheese Burger"
//               />

//               <h1 className="text-2xl font-bold mt-[20px]">
//                 Cheese
//               </h1>

//               <h2 className="text-xl mt-[15px]">
//                 ₹249
//               </h2>

//             </div>


//             <div className="border-4 border-black w-[250px] h-[350px] text-center">

//               <img
//                 className="w-[200px] h-[180px] ml-[20px] mt-[20px]"
//                 src={Burger}
//                 alt="Spicy Burger"
//               />

//               <h1 className="text-2xl font-bold mt-[20px]">
//                 Spicy
//               </h1>

//               <h2 className="text-xl mt-[15px]">
//                 ₹229
//               </h2>

//             </div>

//           </div>

//         </div>


//         {/* Why Choose Us */}

//         <div className="border-4 border-black h-[400px]">

//           <h1 className="text-center mt-[50px] text-4xl font-bold">
//             WHY CHOOSE US
//           </h1>

//           <div className="flex gap-20 justify-center mt-[100px]">

//             <div className="text-center">

//               <h1 className="text-4xl">
//                 🥩
//               </h1>

//               <h2 className="text-2xl font-bold mt-[15px]">
//                 Fresh
//               </h2>

//             </div>


//             <div className="text-center">

//               <h1 className="text-4xl">
//                 ⚡
//               </h1>

//               <h2 className="text-2xl font-bold mt-[15px]">
//                 Fast
//               </h2>

//             </div>


//             <div className="text-center">

//               <h1 className="text-4xl">
//                 ❤️
//               </h1>

//               <h2 className="text-2xl font-bold mt-[15px]">
//                 Quality
//               </h2>

//             </div>

//           </div>

//         </div>


//         {/* About Restaurant */}

//         <div className="border-4 border-black h-[500px]">

//           <h1 className="text-center mt-[50px] text-4xl font-bold">
//             ABOUT OUR RESTAURANT
//           </h1>

//           <div className="flex mt-[70px]">

//             <div className="w-[50%] pl-[100px]">

//               <p className="text-xl font-bold mt-[50px]">
//                 We make fresh, hot and delicious burgers
//                 for everyone. Our burgers are made with
//                 quality ingredients and served with love.
//               </p>

//             </div>


//             <div className="w-[50%]">

//               <img
//                 className="w-[400px] h-[300px]"
//                 src={Burger}
//                 alt="Burger"
//               />

//             </div>

//           </div>

//         </div>


//         {/* Contact */}

//         <div className="border-4 border-black h-[350px]">

//           <h1 className="text-center mt-[50px] text-4xl font-bold">
//             CONTACT US
//           </h1>

//           <div className="text-center mt-[60px] text-xl font-bold">

//             <p>
//               📍 Tanjore
//             </p>

//             <p className="mt-[20px]">
//               📞 7695873136
//             </p>

//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default NewProject