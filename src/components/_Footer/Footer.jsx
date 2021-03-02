import { Button } from '../';
import human_ from '../../assets/only_human.svg';

import './footer.styles.scss';

function Footer() {
  return (
    <div className={'footer'}>
      <div>
        <span className={'getintouch'}>Get in Touch</span>
        <h1>Let's Work Together<span>.</span></h1>

        <div className={'image-rounded'}>
          <img src={human_} alt="Profile Human" />
        </div>

        <p>If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.</p>

        <Button name="johndoe@gmail.com">johndoe@gmail.com</Button>
      </div>
    </div>
  )
}

export { Footer };