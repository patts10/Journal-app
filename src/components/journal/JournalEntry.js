import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      
      <div 
        className="journal__entry-picture"
        style={ {
          backgroundSize: 'cover',
          backgroundImage: 'url(https://s26162.pcdn.co/wp-content/uploads/2020/05/F1.large_.jpg)'
        }}  
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo día
        </p>
        <p className="journal__entry-content">
          Est commodo ad ex eu reprehenderit eu nulla amet est cupidatat enim irure duis.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
