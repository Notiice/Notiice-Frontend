import React from 'react';
import './Calendar.scss'

function Calendar() {

    let user = JSON.parse(localStorage.getItem('user'));
    let username = user.username;
    


    return (
        <div className='calendar-container'>
        <iframe 
        className='calendar'
        src={`https://calendar.google.com/calendar/embed?src=${username}%40gmail.com&ctz=Europe%2FZurich`}
        style={{ border: 0 }}
        frameBorder="0"
        scrolling="no"
      />
        </div>
    );
}

export default Calendar;