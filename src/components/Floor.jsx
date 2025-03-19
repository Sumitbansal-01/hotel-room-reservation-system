import Room from "./Room";

export default function Floor(props) {

  return (
    <div className="floor">
        {props?.totalRooms.map((n,i)=> <Room key={i} roomNumber={n.roomNumber} occupancyStatus={n.occupancyStatus}/>)}
    </div>
  )
}
