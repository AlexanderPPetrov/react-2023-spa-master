import Workstation from "../components/Workstation"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import moment from 'moment';

function BookingPage() {




    const workoutTemplate = {
        name: "Пилатес",
        days: [1,3,5],
        time: [ 
            {
                hour: 9,
                minutes: 30,
            },
            {
                hour: 10,
                minutes: 30,
            },
            {
                hour: 11,
                minutes: 30,
            }    
        ],
        freeSpaces: 10,
    }


    const [startDate, setStartDate] = useState(new Date());
    const [workouts, setWorkouts] = useState([]);
    const [bookedPlace, setBookedPlace] = useState(null);


    const [selectedWorkout, setSelectedWorkout] = useState({});



    //TODO
    const confirmBooking = () => {
        // gather data from 
        // selectedWorkout & bookedPlace & currentUser
        // save to db, show modal on success with summary data of what happened
    }

    const selectWorkout = (workoutSelected) => {
        //Check for existing workout on this date in backend
        // if it exists setSelectedWorkout from response

        // if it doesnt exist generate from here
        
        const workout = {
            workoutTemplate,
            workoutDate: moment(workoutSelected.date).toDate(),
            freeSpaces: workoutTemplate.freeSpaces,
            reservedPlaces: [{
                user: "PB",
                bookedPlace: 2
            }],
        }

        setSelectedWorkout(workout)
    }

    const selectDate = (date) => {
        setStartDate(date)
        const selectedDate = moment(date)
        const generatedWorkouts = workoutTemplate.time.map(time => {
            const generatedDate = selectedDate.hours(time.hour).minutes(time.minutes).format('MMM Do YY HH:mm')
            return {
                date: generatedDate
            }
        })
        
        setWorkouts(generatedWorkouts)
    }

    const getWorkouts = () => {

        return workouts.map( (workout, index) => {
            return <div className="p-3" 
                onClick={() => selectWorkout(workout)}
                key={index}>
                {workout.date}
            </div>
        })
    }

    function getUser(index) {
        //Previously reserved spots
        const existingBooking = selectedWorkout?.reservedPlaces
        .find(reservedPlace => reservedPlace.bookedPlace === index)

        if(existingBooking) {
            return existingBooking.user
        }

        //Reserved by current user spot
        const isCurrentBooking = index === bookedPlace
        if(isCurrentBooking) {
            return "AB"
        }

        //Free spot
        return null;
    }

    function getAvailablePlaces(column) {

        const freeSpaces = Array.from({length:selectedWorkout?.freeSpaces || 0 }, (_, i) => i + 1);

        return freeSpaces.map((freeSpace, index) => {
            return <Workstation
                onBook={() => {
                    if(index === bookedPlace) {
                        setBookedPlace(null)
                    } else {
                        setBookedPlace(index)
                    }
                }} 
                key={index}
                isLeft={index % 2 === 0}
                user={getUser(index)}
            />
        })
    }

    
    function isWeekday(date) {
        const day = date.getDay();
        return workoutTemplate.days.includes(day)
      }

    return <div className="container">
    <div className="row">
        <div className="col-md-4">
        <DatePicker 
            selected={startDate} 
            onChange={(date) => selectDate(date)}
            filterDate={isWeekday}
        />

        {getWorkouts()}

        </div>
        <div className="col-md-8">
            <div className="d-flex">
                {getAvailablePlaces()}
            </div>
        </div>
    </div>
</div>
 
}

export default BookingPage