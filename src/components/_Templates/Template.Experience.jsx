import React from 'react';

import experience from '../../assets/experience.svg';
import './experience.styles.scss';

function TemplateExperience() {
  return (
    <React.Fragment>
      <div className={'experience-absolute'}>
        <pre>
          EXP <br />
          ERIE <br />
          NCE
          </pre>
        <div className={'text-experience'}>
          <span>My Experiences</span>
          <h1>Experiences<span className={'dot'}>.</span></h1>
          <p>I've had the pleasure of working with some freat organisations</p>
        </div>

        <div className={'image-experience'}>
          <img src={experience} alt="Experience" />
        </div>
      </div>
    </React.Fragment>
  )
}

export { TemplateExperience }