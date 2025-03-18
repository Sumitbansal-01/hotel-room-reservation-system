import Room from "./Room";

export default function Floor(props) {

    const getRooms = (totalRoomNumber) =>{
        const totalRooms = [];
        for (let i = 1; i <= totalRoomNumber; i++) {
            totalRooms.push(<Room key={i} roomNumber={props.floorNumber*100+i}/>);
        }
        return totalRooms;
    }

  return (
    <div className="floor">
      {getRooms(props.totalRooms)}
    </div>
  )
}
