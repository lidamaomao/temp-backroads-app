import React from 'react';
import { pageLinks } from './data';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} rel="noreferrer" className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
