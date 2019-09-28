import React from 'react';

import Layout from '../components/Layout';

import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Masthead />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
