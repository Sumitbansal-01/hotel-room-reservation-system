import { useState } from "react"

export default function Header(props) {
    const [rooms, setRooms] = useState('');
  return (
    <div className="header">
      <input type="number" placeholder="No of Rooms" onChange={e=>{
        e.preventDefault();
        setRooms(e.target.value);
      }}/>
      <button onClick={e => {
        e.preventDefault();
        props.bookRoom(rooms)
      }}>Book</button>
      <button onClick={e => {
        e.preventDefault();
        props.reset(rooms)
      }}>Reset</button>
      <button onClick={e => {
        e.preventDefault();
        props.bookRandom(rooms)
      }}>Random</button>
    </div>
  )
}
