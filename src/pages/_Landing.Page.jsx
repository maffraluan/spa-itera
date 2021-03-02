import { Header, Footer, TemplateSkill, TemplateHelloJohn, TemplateWhoIAm, TemplateExperience, TemplateBlog } from '../components';

import human_ from '../assets/human_.svg';
import bubbles from '../assets/bubbles.png';
import human_bubbles from '../assets/human_bubbles.png';

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
          <TemplateHelloJohn />

          <div className={'right-column'}>
            <img src={human_} alt="Human SVG" />
          </div>
        </section>

      </div>
      <section className={'who-i-am'} >
        <div className={'section-who-i-am'}>
          <div className={'image-column'}>
            <img src={human_bubbles} alt="Human Bubbles" />
          </div>
          <TemplateWhoIAm />
        </div>
      </section>

      <section className={'my-skills'}>
        <img className={'left-bubbles-skills'} src={bubbles} alt="Bubbles" />
        <img className={'right-bubbles-skills'} src={bubbles} alt="Bubbles" />
        <div className={'alinging-center'}>
          <TemplateSkill />
        </div>
      </section>

      <section className={'experience'}>
        <img className={'left-bubbles-experience'} src={bubbles} alt="Bubbles" />
        <img className={'right-bubbles-experience'} src={bubbles} alt="Bubbles" />
        <TemplateExperience />
      </section>

      <section className={'section-blog'}>
        <TemplateBlog />
      </section>
      <Footer />
    </div>
  )
}