import { Header, Footer, Button } from '../components';

import human_ from '../assets/human_.svg';
import bubbles from '../assets/bubbles.png';
import human_bubbles from '../assets/human_bubbles.png';
import dotted from '../assets/dotted.png';

import './landing.scss';

export function Landing() {
  return (
    <div>
      <div className={'bubbles'}>
        <img className={'right-bubbles'} src={bubbles} alt="Bubbles" />
        <img className={'top-bubbles'} src={bubbles} alt="Bubbles" />
      </div>
      <div className={'landing-page'}>
        <Header />
        <section className={'section-hello'}>
          <div className={'left-column'}>
            <h1>Hello<span>.</span></h1>
            <div className={'row'}>
              <h1>I am </h1> <span>I am Graphic Designer and <br /> UI Designer.</span>
            </div>
            <h1>John</h1>

            <div className={'btn'}>
              <Button name="Say Hello" >Say hello</Button>
              <a href="/about">About me</a>
            </div>
          </div>

          <div className={'right-column'}>
            <img src={human_} alt="Human SVG" />
          </div>
        </section>

        <section className={'section-who-i-am'} >
          <div className={'image-column'}>
            <img src={human_bubbles} alt="Human Bubbles" />
          </div>

          <div className={'text-column'}>
            <img src={dotted} alt="Dotted background" />
            <span>About Me</span>
            <h1>Who am I<span>?</span></h1>
            <p>Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?</p>

            <a href="/findoutmore">Find out more</a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}