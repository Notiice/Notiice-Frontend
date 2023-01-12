import React from 'react';
import './Calendar.scss'

function Calendar() {
    return (
        <div className='calendar-container'>
        <p>Hello Calendar Here!</p>
        <iframe 
        src="https://calendar.google.com/calendar/embed?src=maxi03milian%40gmail.com&ctz=Europe%2FZurich"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
        </div>
    );
}

export default Calendar;