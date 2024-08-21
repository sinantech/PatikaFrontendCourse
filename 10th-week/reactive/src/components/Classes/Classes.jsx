import React, { useState } from 'react';
import './Classes.css';
function Classes() {
  const [selectedClass, setSelectedClass] = useState('yoga');
  const [isReversed, setIsReversed] = useState(false);

  const classesData = {
    yoga: {
      title: "Why Should You Do Yoga?",
      imgSrc: "./src/img/yoga.jpg",
      schedule: "Saturday-Sunday: 8.00am - 10.00am <br>Monday-Tuesday: 10.00am - 12.00pm<br>Wednesday-Friday: 3.00pm - 6.00pm",
    },
    group: {
      title: "Why Should You Do Group?",
      imgSrc: "./src/img/group.webp",
      schedule: "Monday-Tuesday: 9.00am - 11.00am <br>Thursday-Friday: 11.00am - 1.00pm<br>Friday-Saturday: 4.00pm - 7.00pm",
    },
    solo: {
      title: "Why Should You Do Solo?",
      imgSrc: "./src/img/solo.jpg",
      schedule: "Tuesday-Wednesday: 7.00am - 9.00am <br>Thursday-Friday: 10.00am - 12.00pm<br>Saturday-Sunday: 4.00pm - 7.00pm",
    },
    stretch: {
      title: "Why Should You Do Stretch?",
      imgSrc: "./src/img/stret.webp",
      schedule: "Monday-Wednesday: 8.00am - 10.00am <br>Thursday-Friday: 10.00am- 12.00pm",
    },
  };

  const handleClick = (classType) => {
    setSelectedClass(classType);
    setIsReversed(!isReversed);
  };

  return (
    <section className="classes" id="classes">
      <div className="background"></div>
      <div className="title">
        <h2 className="our-classes">OUR CLASSES</h2>
        <div className="shadow"></div>
        <p className="first-parag">
          Lorem ipsum is not simply random text. It has roots in a piece of
          classical at <br />
          Hampden-Sydney College
        </p>
      </div>
      <div className="btns" id="btns">
        <button className={`btn ${selectedClass === 'yoga' ? 'selected' : ''}`} onClick={() => handleClick('yoga')}>Yoga</button>
        <button className={`btn ${selectedClass === 'group' ? 'selected' : ''}`} onClick={() => handleClick('group')}>Group</button>
        <button className={`btn ${selectedClass === 'solo' ? 'selected' : ''}`} onClick={() => handleClick('solo')}>Solo</button>
        <button className={`btn ${selectedClass === 'stretch' ? 'selected' : ''}`} onClick={() => handleClick('stretch')}>Stretching</button>
      </div>
      <div className={`text-img ${isReversed ? 'reversed' : ''}`} >
        <div className="classes-text">
          <h3 className="first-h">{classesData[selectedClass].title}</h3>
          <br />
          <p className="first-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto vero
            aspernatur velit nobis error veritatis laboriosam porro reiciendis?
            Et quae corrupti ratione iste deserunt asperiores veritatis itaque
            fugiat eligendi? Modi?
          </p>
          <br />
          <h3 className="second-h">When Will Your Time Come?</h3>
          <br />
          <p className="second-p" dangerouslySetInnerHTML={{ __html: classesData[selectedClass].schedule }}></p>
        </div>
        <div className="classes-img">
          <img src={classesData[selectedClass].imgSrc} alt={selectedClass} height="250rem" width="350rem" />
        </div>
      </div>
    </section>
  )
}

export default Classes