import React from 'react';
import Title from './Title';
import ServiceList from './ServiceList';

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="out" subTitle="services" />
      <ServiceList />
    </section>
  );
}

export default Services;
