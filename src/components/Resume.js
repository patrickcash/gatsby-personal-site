import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume-section bg-light">
      <div className="row justify-content-md-center">
        <div className="col-md-2 mb-4 mb-md-0 justify-content-md-center">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="col-md-6 mb-3 mb-md-0">
          <div className="row item">
            <div className="col-md-12 mb-3 mb-md-0">
              <h3>Awesome Design Studio</h3>
              <p className="info">
                Senior UX Designer
                <span>&bull;</span>
                <em className="date">March 2010 - Present</em>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>
            </div>
          </div>

          <div className="row item">
            <div className="col-md-12 mb-3 mb-md-0">
              <h3>Super Cool Studio</h3>
              <p className="info">
                UX Designer
                <span>&bull;</span>
                <em className="date">March 2007 - February 2010</em>
              </p>

              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio. Sed non mauris vitae erat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-2 mb-4 mb-md-0 justify-content-md-center">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="col-md-6 mb-3 mb-md-0">
          <div className="row item">
            <div className="col-md-12 mb-3 mb-md-0">
              <h3>University of Life</h3>
              <p className="info">
                Master in Graphic Design
                <span>&bull;</span>
                <em className="date">April 2007</em>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>
            </div>
          </div>

          <div className="row item">
            <div className="col-md-12 mb-3 mb-md-0">
              <h3>School of Cool Designers</h3>
              <p className="info">
                B.A. Degree in Graphic Design
                <span>&bull;</span>
                <em className="date">March 2003</em>
              </p>

              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio. Sed non mauris vitae erat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
