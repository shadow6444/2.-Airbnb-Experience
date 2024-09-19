export default function Joke({ setup, punchline }) {
  return (
    <div>
      {setup&&<h3>{setup}</h3>}
      <p>{punchline}</p>
      <hr />
    </div>
  );
}
