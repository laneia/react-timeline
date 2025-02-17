import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.items.map((event, i) => {
    return (
      <TimelineEvent 
      key = {i}
      person={event.person} 
      status={event.status} 
      time={event.timeStamp} />
    );
  });
  return(
    <section className="timeline">{timelineComponents}</section>
  );
}


export default Timeline;
