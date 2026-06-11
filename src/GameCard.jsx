import { Download } from "lucide-react";

export default function GameCard(props) {
    return (
        <div>
           <img
  className="w-full h-52 object-cover rounded-xl"
  src={props.image}
  alt={props.name}
/>

            <h2 className="ml-3 ">{props.name}</h2>
            <p className="ml-3">{props.genre}</p>
            <p className="ml-3">{props.rating}</p>
            <p className="ml-3">{props.description}</p>
            <button onClick={props.download} className="bg-violet-600 text-black px-2 py-1 rounded-2xl ml-1 ">Download</button>
        </div>
    )
}
