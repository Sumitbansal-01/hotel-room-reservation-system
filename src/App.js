import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Hotel from "./components/Hotel";
import config from './config';

export default function HotelBooking() {

  const [hotelArray, setHotelArray] = useState([]);
  const [maxRoomInAFloor, setMaxRoomInAFloor] = useState(config.Max_Rooms_Per_Floor);

  useEffect(() => reset(), [])

  const reset = () => {
    const newHotelArray = [];
    for (let i = 1; i <= config.Total_Rooms; i += config.Max_Rooms_Per_Floor) {
      const floor = [];
      for (let j = i; j < i + config.Max_Rooms_Per_Floor && j <= config.Total_Rooms; j++) {
        const roomNumber = (parseInt(i / config.Max_Rooms_Per_Floor) + 1) * 100 + j - i + 1
        const room = {
          roomNumber: roomNumber,
          occupancyStatus: 0,
          time: parseInt(roomNumber / 100) * 2 + (roomNumber % 100)
        }
        floor.push(room);
      }
      newHotelArray.push(floor)
    }
    setHotelArray(newHotelArray);
    setMaxRoomInAFloor(config.Max_Rooms_Per_Floor)
  }

  const bookRoom = (numberOfRooms) => {
    if (numberOfRooms > 5) {
      alert("Invalid room entered")
      return false;
    }
    let bookedRooms = [];
    let minTime = Infinity;
    const newHotel = hotelArray
    let currentMaxRoomInAFloor = maxRoomInAFloor;
    if (currentMaxRoomInAFloor >= numberOfRooms) {
      for (let i = 0; i < newHotel.length; i++) {
        let currentTime = 0;
        let curr = [];
        for (let j = 0; j < newHotel[i].length && curr.length<numberOfRooms; j++) {
          if(newHotel[i][j].occupancyStatus==1) continue;
          currentTime+=newHotel[i][j].time;
          curr.push(newHotel[i][j])
        }
        if(currentTime<minTime && curr.length==numberOfRooms){
          minTime=currentTime;
          bookedRooms=curr;
        }
      }
    } else {
      const curr = [];
      for (let i = 0; i < newHotel.length; i++) {
        for (let j = 0; j < newHotel[i].length; j++) {
          if(newHotel[i][j].occupancyStatus==1) continue;
          curr.push(newHotel[i][j])
        }
      }
      curr.sort((a,b) => a.time-b.time);
      if(curr.length<numberOfRooms) {
        alert("Invalid room entered")
        return false;
      };
      bookedRooms = curr.slice(0,numberOfRooms);
    }
    for(let i of bookedRooms){
      i.occupancyStatus=1;
    }
    currentMaxRoomInAFloor=0;
    for (let i = 0; i < newHotel.length; i++) {
      let curr = 0;
      for (let j = 0; j < newHotel[i].length; j++) {
        if(newHotel[i][j].occupancyStatus==1) continue;
        curr+=1;
      }
      currentMaxRoomInAFloor = Math.max(currentMaxRoomInAFloor, curr);
    }
    setMaxRoomInAFloor(currentMaxRoomInAFloor)
    setHotelArray([...newHotel]);
  }

  const bookRandom = () => {
    for(let i of hotelArray){
      for(let j of i){
        j.occupancyStatus = Math.random() < 0.5 ? 0 : 1
      }
    }
    let currentMaxRoomInAFloor=0;
    for (let i = 0; i < hotelArray.length; i++) {
      let curr = 0;
      for (let j = 0; j < hotelArray[i].length; j++) {
        if(hotelArray[i][j].occupancyStatus==1) continue;
        curr+=1;
      }
      currentMaxRoomInAFloor = Math.max(currentMaxRoomInAFloor, curr);
    }
    setMaxRoomInAFloor(currentMaxRoomInAFloor)
  }

  return (
    <div className="container">
      {/* UI Code Here */}
      <Header reset={reset} bookRoom={bookRoom} bookRandom={bookRandom}/>
      <Hotel hotelArray={hotelArray}/>
    </div>
  );
}
