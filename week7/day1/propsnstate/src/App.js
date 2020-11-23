import './App.css';

const Student = (props) => <h3 style={{
  backgroundColor: props.color
}}>
  {props.name}
</h3>

const ClassRoom = (props) => {
  console.log(props.characters)
return <div>
  <Student name={props.characters[0]} color="green"/>
  <Student name="Ayhan" color="green"/>
  <Student name="Carlos"  color="#3296d3"/>
  <Student name="Fran"  color="orange"/>
</div>}

function App() {

  const characters = ['1', '2', '3']

  return (
    <div className="App">
      <ClassRoom characters={characters}/>
    </div>
  );
}

export default App;
