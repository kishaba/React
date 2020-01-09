import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome}
        cargo={props.cargo}
        idade={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h3>Olá sou o(a) {props.nome}</h3>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>

  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>Instagram</a>
    </div>
  );
}

function App () {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome='Marcos' cargo='Analista' idade='27'
        facebook='https:google.com' />
      <Equipe nome='Lucas' cargo='Programador' idade='25'
        facebook='https:google.com' />

    </div>
  )
}


export default App;
