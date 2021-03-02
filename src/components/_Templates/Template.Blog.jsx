import React from 'react';

import { Button } from '../';

import plants_1 from '../../assets/plants_1.svg';
import plants from '../../assets/plants.svg';
import green_plants from '../../assets/green_plants.svg';
import left from '../../assets/left.svg';


import './blog.styles.scss';


function TemplateBlog() {
  return (
    <React.Fragment>
      <div className={'blog'}>
        <pre>BLOG</pre>
        <span className={'span-blog'}>My Blog</span>
        <h1>Blog<span className={'dot'}>.</span></h1>
        <p>See the latest articles that's talking about design and development.</p>
      </div>

      <div className={'w-80'}>
        <div className={'blog-images'}>
          <img className={'plant-one'} src={plants_1} alt="Plant One" />
          <img src={plants} alt="Plant Two" />
          <img src={green_plants} alt="Green Plant" />
        </div>
        <div className={'btn-articles'}>
          <Button name="Read all articles">Read all articles
            <img src={left} alt="Arrow" />
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export { TemplateBlog }