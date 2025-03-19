import Floor from './Floor';

export default function Hotel(props) {

  return (
    <div className='hotel'>
      <div className='lift'></div>
      <div className='floors'>
        {props?.hotelArray.map((n,i)=>
            <Floor key={i} totalRooms={n}/>
        )}
      </div>
    </div>
  )
}
