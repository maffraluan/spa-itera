import dotted from '../../assets/dotted.png';

function TemplateWhoIAm() {
  return (
    <div className={'text-column'}>
      <pre>
        AB <br />
              OUT <br />
              ME
            </pre>
      <img src={dotted} alt="Dotted background" />
      <span>About Me</span>
      <h1>Who am I<span>?</span></h1>
      <p>Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?</p>

      <a href="/findoutmore">Find out more</a>
    </div>
  )
}

export { TemplateWhoIAm }