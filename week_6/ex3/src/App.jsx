import './App.css'
function App() {
const llamaFacts = [
  'One L in Llama is silent?',
  'However, their genus is Lama and species is technically Glama.',
  'A Llama typically lives 15 - 20 years.',
  'Llamas primarily eat grass.',
  'Llamas are known to be able to carry up to 200 pounds for 12 hours per day, but they are not generally ridden.',
  'Llamas stick their tongues out or spit to express dislike.',
  'When a Llama starts to spit, run! They can spit over 15 feet. ...and it is more-so vomit than spit.',
  'Llamas are closely related to alpacas, they are collectively known as "lamoids".'
];
let lastTwo;
const llamaFactTrue = 'Llamas can run 35 to 40 miles per hour!';
const llamaFactFalse = 'Llamas are inherently excellent jazz drummers!';
const llamaBonus = 'Bonus Fact'
//How should we comment? I haven't found a way to leave comments within the return function.
  return (
    <>
    <div>
      <h1>Fun Facts About Llamas</h1>
    </div>
    <ol>
      {llamaFacts.map(llamaFacts => (
        <li key={llamaFacts}>{llamaFacts}</li>
      ))}
    </ol>
    <section className = "ternerary">
        <h3>Featured Fact:</h3>
          {lastTwo ? (llamaFacts[7]) : (llamaFacts[6])}
        <h3>Bonus Fact:</h3>
          {llamaBonus === 'Bonus Fact' ? (llamaFactTrue) : (llamaFactFalse)}
    </section>
    </>
  )
}
export default App
