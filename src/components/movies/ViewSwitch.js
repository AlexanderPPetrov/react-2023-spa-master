import { useMovieContext } from '../../context/MoviesContext'
import { BsGrid, BsList } from 'react-icons/bs';


function ViewSwitch() {

    const { listView, setListView } = useMovieContext()

    return <div className="btn-group btn-group-sm"
                role="group">
                <input type="radio" 
                    className="btn-check" 
                    name="btnradio" id="listView" 
                    onChange={()=> setListView(true)}
                    autoComplete="off" checked={listView} />
                <label 
                    className="btn btn-outline-primary" 
                    htmlFor="listView">
                    <BsList size="1.5rem"/>
                </label>
                <input type="radio" 
                    className="btn-check" 
                    name="btnradio" 
                    onChange={()=> setListView(false)}
                    id="gridView" 
                    autoComplete="off" />
                <label 
                    className="btn btn-outline-primary" 
                    htmlFor="gridView"
                    checked={!listView}
                    >
                    <BsGrid size="1.5rem"/>
                </label>
            </div>
}

export default ViewSwitch
