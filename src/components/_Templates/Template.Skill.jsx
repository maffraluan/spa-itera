import React from 'react';

import dotted from '../../assets/dotted.png';
import './skill.styles.scss';

function TemplateSkill() {
  return (
    <React.Fragment>
      <div className={'skills'}>
        <img src={dotted} alt="Dotted background" />
        <pre>
          SK <br />
              IL <br />
              LS
            </pre>
        <span className={'span-absolute-position'}>My Skills</span>
        <h1>My Skills<span>.</span></h1>
        <p>
          Everyday, I practising, reading book and watching tutorials to gain a new skills, these skills helpes me to build my projects in the future.
          </p>
      </div>

      <template>
        <div>
          <h4>Languages <br />
            <hr />
          </h4>

          <span>- CSS3(SCSS, LESS)</span>
          <span>- HTML5</span>
          <span>- JavaScript(ES6)</span>
          <span>- PHP</span>
          <span>- Python</span>
        </div>
        <div>
          <h4>Methods & Tools <br />
            <hr />
          </h4>

          <span>- BEM ITCSS, OOCSS</span>
          <span>- NPM scripts, Webpack, Gulp</span>
          <span>- Progressive Web Apps</span>
          <span>- UX principles and accessibility</span>
          <br />
        </div>
        <div>
          <h4>Frameworks & Libs <br />
            <hr />
          </h4>

          <span>- Drupal(7/8)</span>
          <span>- Django (Wagtail)</span>
          <span>- JQuery, React(Redux), Vue</span>
          <span>- Twig, Jinja, Mustacho</span>
          <span>- Google Apps & APIs</span>
        </div>
        <div>
          <h4>Additional <br />
            <hr />
          </h4>

          <span>- GIT, SVN</span>
          <span>- UNIX server administration</span>
          <span>- Vagrant, Composer, Drush</span>
          <span>- Photoshop, Sketch</span>
          <span>- Agile, Waterfall</span>
        </div>
      </template>
    </React.Fragment>
  )
}

export { TemplateSkill }