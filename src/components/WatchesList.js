import Watch from './Watch';
import './WatchesList.css';

function WatchesList(props) {
  const handleClose = (name) => {
    if (props.onRemove) props.onRemove(name);
  }

  return (
    <div className='watches-list'>
      {
        props.items.map((o) =>
          <Watch {...o} onClose={handleClose} key={o.name}/>
        )
      }
    </div>
  )
}


export default WatchesList;