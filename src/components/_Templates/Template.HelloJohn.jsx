import { Button } from '../';

import arrow from '../../assets/right.svg';

function TemplateHelloJohn() {
  return (
    <div className={'left-column'}>
      <pre>
        DESI <br />
              GN <br />
              ER
            </pre>
      <h1>Hello<span>.</span></h1>
      <div className={'row'}>
        <h1>I am </h1> <span>I am Graphic Designer and <br /> UI Designer.</span>
      </div>
      <h1>John</h1>

      <div className={'btn'}>
        <Button name="Say Hello" >Say hello</Button>
        <a href="/about">
          About me
           <img src={arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  )
}

export { TemplateHelloJohn }