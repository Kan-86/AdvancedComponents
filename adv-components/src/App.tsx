import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import { type FormHandle } from './components/Form'
import Form from './components/Form';
import { useRef } from 'react';


function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log({ extractedData });
    customForm.current?.clear();
  };
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button className="button">Save</Button>
        </p>
      </Form>

      {/* <p>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" />
        <Button className="button">A Button</Button>
      </p>
      <p>
        <Button className="anchor" href="https://google.com">A link</Button>
      </p>
      <Input label="Test" id="test" ref={input} />
      <Container className="button" as={Button} type="button">Click me</Container> */}
    </main>
  )
}

export default App
