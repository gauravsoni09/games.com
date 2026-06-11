

import { useState, useRef } from "react";
import { Search, TrendingUp, SunMoon, User } from "lucide-react";
import GameCard from "./GameCard";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef();

  const [search, setSearch] = useState("");

  function theme() {
    setDarkMode(!darkMode);
  }

  function focusOnInput() {
    inputRef.current.focus();
  }

  function download() {
    alert("Your game is downloading...");
  }

  function Trending() {
    return <div>
      <div className="flex justify-center mt-8">
        <Link to="/">
          <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
            ← Back to Home
          </button>
        </Link>
      </div>
    <div className="flex flex-wrap justify-center gap-8 px-6 mt-14">
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="gta5.jpg"
            name="GTA 5"
            genre="Action"
            rating="4.5"
            description="18+"
          />
        </div>

        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="rdr2.jpg"
            name="RDR 2"
            genre="Action"
            rating="4.6"
            description="18+"
          />
        </div>

        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="lous.png"
            name="Last of Us 2"
            genre="Action"
            rating="4.3"
            description="18+"
          />
        </div>

        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="wukong.jpg"
            name="Black Myth Wukong"
            genre="Adventure"
            rating="5"
            description="15+"
          />
        </div>

        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="gow.jpg"
            name="God of War"
            genre="Adventure"
            rating="4.9"
            description="17+"
          />
        </div>
    </div>
    </div>
  }

  function Author() {
    return <div className="flex flex-col items-center justify-center mt-32">
      <div className="border border-purple-500 rounded-2xl p-10 bg-black text-center shadow-xl">
        <h2 className="text-blue-300 font-serif text-4xl font-bold mb-2">Made by</h2>
        <h1 className="text-purple-400 font-serif text-5xl font-extrabold tracking-wide">Gaurav Soni</h1>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  }

  return (
    <div
      className={
        darkMode
          ? "bg-gray-100 min-h-screen flex flex-col transition-all duration-500"
          : "bg-black min-h-screen flex flex-col transition-all duration-500"
      }
    >
      {/* Header */}
      <div className="flex justify-center items-center pt-5 flex-wrap gap-4 px-4">
        <h1 className="text-blue-300 font-serif text-3xl">
          games
          <span className="text-purple-500">.com</span>
        </h1>

       <input
  className="bg-blue-100 text-black border border-purple-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
  type="text"
  placeholder="Search games..."
  ref={inputRef}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

        {/* Search Button */}
        <button
          className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2"
          onClick={focusOnInput}
        >
          <Search size={18} />
          Search
        </button>

        {/* Trending Button */}
        <Link to="/trending">
          <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
            <TrendingUp size={18} />
            Trending
          </button>
        </Link>

        {/* Dark Mode Button */}
        <button
          className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2"
          onClick={theme}
        >
          <SunMoon size={18} />
          Dark Mode
        </button>

        {/* Author Button */}
        <Link to="/author">
          <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
            <User size={18} />
            Author
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/trending" element={<Trending />} />
        <Route path="/author" element={<Author />} />
       <Route
  path="/"
  element={
    <div className="flex flex-wrap justify-center gap-8 px-6 mt-14">

      {(search === "" ||
        "gta 5".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="gta5.jpg"
            name="GTA 5"
            genre="Action"
            rating="4.5"
            description="18+"
          />
        </div>
      )}

      {(search === "" ||
        "rdr 2 red dead redemption".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="rdr2.jpg"
            name="RDR 2"
            genre="Action"
            rating="4.6"
            description="18+"
          />
        </div>
      )}

      {(search === "" ||
        "last of us 2 lous".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="lous.png"
            name="Last of Us 2"
            genre="Action"
            rating="4.3"
            description="18+"
          />
        </div>
      )}

      {(search === "" ||
        "black myth wukong wukong".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="wukong.jpg"
            name="Black Myth Wukong"
            genre="Adventure"
            rating="5"
            description="15+"
          />
        </div>
      )}

      {(search === "" ||
        "god of war gow war".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="gow.jpg"
            name="God of War"
            genre="Adventure"
            rating="4.9"
            description="17+"
          />
        </div>
      )}

      {(search === "" ||
        "resident evil 4 resident evil".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="resident.jpg"
            name="Resident Evil 4"
            genre="Horror + Action"
            rating="4.9"
            description="17+"
          />
        </div>
      )}

      {(search === "" ||
        "valorant".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="valorant.jpg"
            name="Valorant"
            genre="RPG"
            rating="4.1"
            description="13+"
          />
        </div>
      )}

      {(search === "" ||
        "need for speed nfs most wanted".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="nfs.jpg"
            name="Need for Speed Most Wanted"
            genre="Racing"
            rating="4.9"
            description="10+"
          />
        </div>
      )}

      {(search === "" ||
        "cyberpunk cyber punk".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="cyber.jpg"
            name="Cyberpunk"
            genre="Adventure"
            rating="4.9"
            description="17+"
          />
        </div>
      )}

      {(search === "" ||
        "minecraft mine".includes(search.toLowerCase())) && (
        <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
          <GameCard
            download={download}
            image="mine.jpg"
            name="Minecraft"
            genre="Adventure"
            rating="4.9"
            description="12+"
          />
        </div>
      )}

    </div>
  }
/>
      </Routes>
    </div>
  );
}

// import { useState, useRef } from "react";
// import { Search, TrendingUp, SunMoon, User } from "lucide-react";
// import GameCard from "./GameCard";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const inputRef = useRef();

//   const [search, setSearch] = useState("");

//   function theme() {
//     setDarkMode(!darkMode);
//   }

//   function focusOnInput() {
//     inputRef.current.focus();
//   }

//   function download() {
//     alert("Your game is downloading...");
//   }

//   function Trending() {
//     return <div>
//       <div className="flex justify-center mt-8">
//         <Link to="/">
//           <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
//             ← Back to Home
//           </button>
//         </Link>
//       </div>
//     <div className="flex flex-wrap justify-center gap-8 px-6 mt-14">
//         <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//           <GameCard
//             download={download}
//             image="gta5.jpg"
//             name="GTA 5"
//             genre="Action"
//             rating="4.5"
//             description="18+"
//           />
//         </div>

//         <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//           <GameCard
//             download={download}
//             image="rdr2.jpg"
//             name="RDR 2"
//             genre="Action"
//             rating="4.6"
//             description="18+"
//           />
//         </div>

//         <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//           <GameCard
//             download={download}
//             image="lous.png"
//             name="Last of Us 2"
//             genre="Action"
//             rating="4.3"
//             description="18+"
//           />
//         </div>

//         <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//           <GameCard
//             download={download}
//             image="wukong.jpg"
//             name="Black Myth Wukong"
//             genre="Adventure"
//             rating="5"
//             description="15+"
//           />
//         </div>

//         <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//           <GameCard
//             download={download}
//             image="gow.jpg"
//             name="God of War"
//             genre="Adventure"
//             rating="4.9"
//             description="17+"
//           />
//         </div>
//     </div>
//     </div>
//   }

//   function Author() {
//     return <div className="flex flex-col items-center justify-center mt-32">
//       <div className="border border-purple-500 rounded-2xl p-10 bg-black text-center shadow-xl">
//         <h2 className="text-blue-300 font-serif text-4xl font-bold mb-2">Made by</h2>
//         <h1 className="text-purple-400 font-serif text-5xl font-extrabold tracking-wide">Gaurav Soni</h1>
//         <div className="flex justify-center mt-6">
//           <Link to="/">
//             <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
//               ← Back to Home
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   }

//   return (
//     <div
//       className={
//         darkMode
//           ? "bg-gray-100 min-h-screen flex flex-col transition-all duration-500"
//           : "bg-black min-h-screen flex flex-col transition-all duration-500"
//       }
//     >
//       {/* Header */}
//       <div className="flex justify-center items-center pt-5 flex-wrap gap-4 px-4">
//         <h1 className="text-blue-300 font-serif text-3xl">
//           games
//           <span className="text-purple-500">.com</span>
//         </h1>

//       <input
//   className="bg-blue-100 text-black border border-purple-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
//   type="text"
//   placeholder="Search games..."
//   ref={inputRef}
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
// />

//         {/* Search Button */}
//         <button
//           className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2"
//           onClick={focusOnInput}
//         >
//           <Search size={18} />
//           Search
//         </button>

//         {/* Trending Button */}
//         <Link to="/trending">
//           <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
//             <TrendingUp size={18} />
//             Trending
//           </button>
//         </Link>

//         {/* Dark Mode Button */}
//         <button
//           className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2"
//           onClick={theme}
//         >
//           <SunMoon size={18} />
//           Dark Mode
//         </button>

//         {/* Author Button */}
//         <Link to="/author">
//           <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold rounded-xl px-5 py-3 shadow-lg hover:scale-105 flex items-center gap-2">
//             <User size={18} />
//             Author
//           </button>
//         </Link>
//       </div>

//       <Routes>
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/author" element={<Author />} />
//         <Route path="/" element={
//           /* Cards */
//           <div className="flex flex-wrap justify-center gap-8 px-6 mt-14">
//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="gta5.jpg"
//                 name="GTA 5"
//                 genre="Action"
//                 rating="4.5"
//                 description="18+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="rdr2.jpg"
//                 name="RDR 2"
//                 genre="Action"
//                 rating="4.6"
//                 description="18+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="lous.png"
//                 name="Last of Us 2"
//                 genre="Action"
//                 rating="4.3"
//                 description="18+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="wukong.jpg"
//                 name="Black Myth Wukong"
//                 genre="Adventure"
//                 rating="5"
//                 description="15+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="gow.jpg"
//                 name="God of War"
//                 genre="Adventure"
//                 rating="4.9"
//                 description="17+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="resident.jpg"
//                 name="Resident Evil 4"
//                 genre="Horror + Action"
//                 rating="4.9"
//                 description="17+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="valorant.jpg"
//                 name="Valorant"
//                 genre="RPG"
//                 rating="4.1"
//                 description="13+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="nfs.jpg"
//                 name="NFS Most Wanted"
//                 genre="Racing"
//                 rating="4.9"
//                 description="10+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="cyber.jpg"
//                 name="Cyberpunk"
//                 genre="Adventure"
//                 rating="4.9"
//                 description="17+"
//               />
//             </div>

//             <div className="border border-purple-500 rounded-2xl p-2 bg-black w-56 text-blue-400 font-bold shadow-lg hover:scale-105 transition-all duration-300">
//               <GameCard
//                 download={download}
//                 image="mine.jpg"
//                 name="Minecraft"
//                 genre="Adventure"
//                 rating="4.9"
//                 description="12+"
//               />
//             </div>
//           </div>
//         } />
//       </Routes>
//     </div>
//   );
// }






