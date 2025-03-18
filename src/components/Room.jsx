export default function Room(props) {

  return (
    <div className="room" style={{color: props.roomColour}}>
      {props.roomNumber}
    </div>
  )
}
