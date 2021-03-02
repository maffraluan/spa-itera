import React from 'react';

import dotted from '../../assets/dotted.png';
import component_rounded from '../../assets/component-rounded.svg';
import arrow_right from '../../assets/right.svg';
import arrow_left from '../../assets/left.svg';

import './testimonial.styles.scss';

function TemplateTestimonial() {
  return (
    <React.Fragment>
      <div className={'testimonials'}>
        <img className={'component-dotted'} src={dotted} alt="Dotted" />
        <img className={'component-rounded'} src={component_rounded} alt="Rounded" />
        <pre>
          TESTIM <br />
            ONIALS
          </pre>

        <div className={'text-testimonials'}>
          <span>What My Clients Says</span>
          <div className="text-icon-flex">
            <h1>Testimonials<span className={'dot'}>.</span></h1>

            <div className="align-rounded">
              <div className="rounded-arrow-left">
                <img src={arrow_left} alt="Arrow" />
              </div>

              <div className="rounded-arrow-right">
                <img src={arrow_right} alt="Arrow" />
              </div>
            </div>
          </div>
          <p>Aqui é Body Builder Ipsum! Eu quero esse 13 daqui a pouquinho aí. Tá saindo da jaula o monstro! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. É verão o ano todo vem cumpadi. Aqui nóis constrói fibra, não é água com músculo. Não vai dá não. É esse que a gente quer, é ele que nóis vamo buscar. Boraaa, Hora do Show.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export { TemplateTestimonial }