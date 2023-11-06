import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const hideDone = false;

const tasks = [
  {
    id: 1, content: "Nauczyć się programować", done: false,
  },
  {
    id: 2, content: "Kupić kurs programowania", done: true,
  },
];

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone} />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone} />
        } />
    </Container>
  );
}

export default App;
