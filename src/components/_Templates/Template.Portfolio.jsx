import React from 'react';
import { Button } from '../';

import headphone from '../../assets/headphone.svg';
import fruit from '../../assets/fruit.svg';
import cup_glass from '../../assets/cup_glass.svg';
import cherry from '../../assets/cherry.svg';
import couch from '../../assets/couch.svg';
import orange from '../../assets/orange.svg';

import dotted from '../../assets/dotted.png';
import left from '../../assets/left.svg';

import './portfolio.styles.scss';

function TemplatePortfolio() {
  return (
    <React.Fragment>
      <img className={'image-dotted'} src={dotted} alt="Dotted" />
      <pre>
        POR <br />
            TFO <br />
            LIO
        </pre>
      <div className="w-80">
        <div className={'portfolio'}>
          <div className={'section-right-column'}>
            <span>My Feature Works</span>
            <h1>Portfolio<span className={'dot'}>.</span></h1>
            <p>Look at all of my latest works.</p>
          </div>

          <div className={'section-left-column'}>
            <Button name="All Category">All Category</Button>
            <a href="/webdesign">Web design</a>
            <a href="/3d">3D</a>
            <a href="/branding">Branding</a>
            <a href="/mobile">Mobile</a>
            <a href="/typography">Typography</a>
          </div>
        </div>
      </div>
      <div className={'portfolio-images'}>
        <div className={'upper-images'}>
          <img src={headphone} alt="Headephone" />
          <img src={fruit} alt="Fruit" />
          <img src={cup_glass} alt="Cup Glass" />
        </div>
        <div className={'upper-images'}>
          <img src={cherry} alt="Cherry" />
          <img src={couch} alt="Couch" />
          <img src={orange} alt="Orange" />
        </div>
        <div className={'btn-portfolio'}>
          <Button name="Discover all works">
            Discover all works
             <img src={left} alt="Arrow" />
          </Button>
        </div>
      </div>

    </React.Fragment>
  )
}

export { TemplatePortfolio }