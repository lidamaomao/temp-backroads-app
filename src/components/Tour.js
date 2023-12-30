import React from 'react';
import Title from './Title';
import TourList from './TourList';

function Tour() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <TourList />
    </section>
  );
}

export default Tour;
