import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'
import {format} from "date-fns";


const Header = () => {
    const[openDate, setOpenDate] = useState(false);
    const [date, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
        </div>
        <h1 className="headerTitle">
            A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc">
        Save at least 15% on stays worldwide, from relaxing retreats to off-the-grid adventures
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSyarearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} />
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy"
                )} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                { openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} />
                <span className="headerSearchText">2 adults 2 children 1 room</span>
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header