export default function Room(props) {

  const roomColour = (occupancyStatus) => {
    if(occupancyStatus===1) return 'red';
    // else if(occupancyStatus===0) return 'yellow';
    else return null
  }

  return (
    <div className="room" style={{backgroundColor: roomColour(props.occupancyStatus)}}>
      {props.roomNumber}
    </div>
  )
}
