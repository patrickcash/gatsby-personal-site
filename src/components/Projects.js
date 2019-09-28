import React from 'react';
import demoImage1 from '../assets/images/demo-image-01.png';

export default function Portfolio() {
  return (
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Research Wrangler</h4>
                  <p className="mb-0 text-white-50">
                    Academic research management site. Provides search and
                    bookmark functionality
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: React/redux frontend, Django Rest Framework
                    backend
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/research-wrangler"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Reader</h4>
                  <p className="mb-0 text-white-50">Feed reader</p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: MERN - MongoDB, Express, React and Node
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/Reader"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Delicious Django</h4>
                  <p className="mb-0 text-white-50">
                    Personal bookmark manager inspired by del.icio.us
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: Django with Bootstrap
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/delicious-django"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Pixabay Image Search</h4>
                  <p className="mb-0 text-white-50">
                    Search Pixabey for images tagged with search query
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: Frontend project using React
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/photo-search"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Face finder</h4>
                  <p className="mb-0 text-white-50">
                    Frontend for the Clarafai image recogntion API, finds the
                    faces in a provided photo
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: Frontend project using React
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/face-finder"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Fullscreen image slideshow</h4>
                  <p className="mb-0 text-white-50">
                    Fullscreen slideshow of images with captions
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: Vanilla Javascript, HTML and CSS
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="#" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/fullscreen-image-slideshow"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Data science projects</h4>
                  <p className="mb-0 text-white-50">
                    Code playpens for my data science projects
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: Python (Data collection, analysis and
                    visualization) and Javascript (Data visualization)
                  </p>
                  <p className="mb-0 text-white-50">
                    <a
                      href="https://github.com/patrickcash/data-collection-playpen"
                      className="text-white mr-2"
                    >
                      <u>Data collection</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/data-analysis-playpen"
                      className="text-white mr-2"
                    >
                      <u>Data analysis</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/data-visualization-playpen"
                      className="text-white"
                    >
                      <u>Data visualization</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Superset</h4>
                  <p className="mb-0 text-white-50">
                    (Open source project I contribute to) - A modern,
                    enterprise-ready business intelligence web application
                  </p>
                  <p className="mb-0 text-white-50"></p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: React and D3.js frontend, Flask backend
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="Demo" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/incubator-superset"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Dash</h4>
                  <p className="mb-0 text-white-50">Dash</p>
                  <p className="mb-0 text-white-50">
                    (Open source project I contribute to) - Analytical Web Apps
                    for Python & R. No JavaScript Required.
                  </p>
                  <p className="text-black-50 mb-0">
                    Tech Stack: React and D3.js frontend, Flask backend
                  </p>
                  <p className="mb-0 text-white-50">
                    <a href="Demo" className="text-white mr-2">
                      <u>Demo</u>
                    </a>
                    <a
                      href="https://github.com/patrickcash/dash"
                      className="text-white"
                    >
                      <u>Code</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
