import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume-section bg-light">
      <div className="row justify-content-md-center">
        <div className="col-md-2 mb-4 mb-md-0 justify-content-md-center">
          <h2>Experience</h2>
        </div>

        <div className="col-md-6 mb-3 mb-md-0">
          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                Freelance\Contract Software Developer
                <small className="text-muted float-md-right">Present</small>
              </h4>
              <p>
                Frontend focused full stack development using React\Redux for
                user interface functionality and Django or Express for backend
                APIs
              </p>
            </div>
          </div>

          <br />

          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                Research Assistant: NC State University
                <small className="text-muted float-md-right">
                  Feb 2014 - Jan 2015
                </small>
              </h4>
              <p>
                Technical lead for SimSelf Intelligent Tutor. A tutoring system
                for middle school students using an agent based question and
                answering system
              </p>
            </div>
          </div>

          <br />

          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                Software Engineer: SAS Institute
                <small className="text-muted float-md-right">
                  May 2006 - Feb 2014
                </small>
              </h4>
              <p>
                Worked on a team developing common user interface components and
                frameworks used by applications throughout the company.
                Independently develop web-based components as well as worked in
                small teams on larger frameworks.
              </p>
            </div>
          </div>

          <br />

          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                Software Engineer: I-Cubed
                <small className="text-muted float-md-right">
                  May 2005 - May 2006
                </small>
              </h4>
              <p>
                Supported a bulk migration tool for CAD files to move customer
                data from existing storage systems to new version control
                system. Worked directly with customers to develop custom data
                processing scripts.
              </p>
            </div>
          </div>

          <br />

          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                Teaching Assistant: NC State University
                <small className="text-muted float-md-right">
                  August 2004 – May 2006
                </small>
              </h4>
              <p>
                Teaching assistant for Java and Operating Systems in C courses.
                Responsibilities included: teaching classes, leading study
                sessions, answering student questions and test and assignment
                preparation and grading.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row justify-content-md-center">
        <div className="col-md-2 mb-4 mb-md-0 justify-content-md-center">
          <h2>Education</h2>
        </div>

        <div className="col-md-6 mb-5 mb-md-0">
          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                M.S. Computer Science: NC State University
                <small className="text-muted float-md-right">Fall 2007</small>
              </h4>
              <p>
                Concentration in Aftificial Intelligence and Human Computer
                Interaction.
              </p>
            </div>
          </div>

          <br />

          <div className="row item">
            <div className="col-md-12 mb-5 mb-md-0">
              <h4>
                B.S. Computer Science, B.A. Physics: University of North
                Carolina at Wilmington
                <small className="text-muted float-md-right">Spring 2004</small>
              </h4>
              <p>
                Double major in Computer Science and Physics with a
                concentration of scientific computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
