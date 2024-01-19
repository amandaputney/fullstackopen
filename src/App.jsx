const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://amandaputney.github.io/portfolio/' target="blank">Amanda</a>
    </div>
  )
}

const App = () => {
  const name = 'Lee'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>

      <h4><Hello name='Amanda'age={26 + 10}/></h4>
      <Hello name={name} age={age}/>
      <Footer />
    </>
  )
}

export default App