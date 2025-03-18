import config from "../config";
import Floor from './Floor';

export default function Hotel() {

    const getFloors = (totalFloorNumber) =>{
        const totalFloors = [];
        for (let i = 1; i <= totalFloorNumber; i++) {
            totalFloors.push(<Floor key={i} floorNumber={i} totalRooms={i!==totalFloorNumber ? config.Max_Rooms_Per_Floor : config.Total_Rooms % config.Max_Rooms_Per_Floor}/>);
        }
        return totalFloors;
    }

  return (
    <div className='hotel'>
      <div className='lift'></div>
      <div className='floors'>
        {getFloors(config.Total_Floors)}
      </div>
    </div>
  )
}
