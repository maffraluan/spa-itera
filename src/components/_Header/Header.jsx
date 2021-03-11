import './header.styles.scss';

import { Button } from '../'

function Header() {
  return (
    <header className={'header'}>
      <nav>
        <div>
          <h3>John Doe<span>.</span></h3>
        </div>

        <a href="/home">Home</a>
        <a href="/about">About me</a>
        <a href="/whatido">What I do?</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/blog">Blog</a>

        <Button name="contact">Contact</Button>
      </nav>
    </header>
  )
}

export { Header }