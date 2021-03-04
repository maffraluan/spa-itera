import React from 'react';

import dotted from '../../assets/dotted.png';
import component_rounded from '../../assets/component-rounded.svg';
import arrow_right from '../../assets/right.svg';
import arrow_left from '../../assets/left.svg';

import './testimonial.styles.scss';

/*  I was testing mapping the array, but i don't know why the paragraphy render take one effect only.  */
/* import { ParagraphyArray } from './ParagraphyArray';

const Paragraphy = ({ state }) => {
  React.useEffect(() => {
    console.log(state)
  }, [state]);
  return (
    <React.Fragment>
      {state && !!state.length && state.map(({ paragraphy, id }) => {
        return (
          <div key={id}>
            <p>{paragraphy}</p>
          </div>
        )
      })}
    </React.Fragment>
  )
}
 */


function TemplateTestimonial({ index = 0 }) {
  const [isActive, setIsActive] = React.useState(false);
  /*   const [state, setState] = React.useState([ParagraphyArray[index]]);
  
    const handleNextParagraphy = (index) => {
      setState(ParagraphyArray(index));
    };
   */

  if (isActive) RenderParagraphyBodyBuilder();
  else RenderParagraphyCacidis();

  function RenderParagraphyBodyBuilder() {
    return (
      <React.Fragment>
        <p>Aqui é Body Builder Ipsum! Eu quero esse 13 daqui a pouquinho aí. Tá saindo da jaula o monstro! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. É verão o ano todo vem cumpadi. Aqui nóis constrói fibra, não é água com músculo. Não vai dá não. É esse que a gente quer, é ele que nóis vamo buscar. Boraaa, Hora do Show.</p>
      </React.Fragment>
    )
  }

  function RenderParagraphyCacidis() {
    return (
      <React.Fragment>
        <p>Cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. A ordem dos tratores não altera o pão duris.</p>
      </React.Fragment>
    )
  }

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
              <div
                onClick={() => setIsActive(!isActive)}
                //onClick={(index) => handleNextParagraphy(index = 0)}
                className="rounded-arrow-left">
                <img src={arrow_left} alt="Arrow" />
              </div>

              <div
                onClick={() => setIsActive(!isActive)}
                //onClick={(index) => handleNextParagraphy(index = 1)}
                className="rounded-arrow-right">
                <img src={arrow_right} alt="Arrow" />
              </div>
            </div>
          </div>
          {isActive
            ? <RenderParagraphyBodyBuilder />
            : <RenderParagraphyCacidis />
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export { TemplateTestimonial }