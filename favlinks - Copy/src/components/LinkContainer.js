import { useState } from 'react';
import Form from './Form';
import Table from './Table';
// this is necessary to import

function LinkContainer() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [links, setLink] = useState('');
// define the linkcontainer function and params
//tasks is a variable, settasks is an updater function, the variable initializes as an array
// name is an empty string and links is also an empty string
  function handleRemove(index) {
    const updatedTasks = [...tasks];
    //this is a copy of tasks
    updatedTasks.splice(index, 1);
    //remove the item at index specified in the parameter from the tasks
    setTasks(updatedTasks);
    //updates the setasks array with the updated tasks array
  }

  function handleSubmit() {
    if (name === '' && links === '') {
      alert('Please Fill All Fields');
      // if name AND link are empty and string, display alert
      // if not,
    } else {
      const obj = { name, links };
      // create new object called obj(ject) with the prop(erties)
      // name and link
      setTasks([...tasks, obj]);
      // update tasks variable and tasks array with new object
      setName('');
      // reset name variable input thingy to empty
      setLink('');
      // reset link input to empty string after input also
    }
  }

  return (
    <div className="container" style={{ display: 'block' }}>
      <h1 style={{ marginLeft: '210px', color:'white'}}>My Favorite Links</h1>
      <p style={{ marginLeft: '210px', color: 'white' }}>
        Add a new url with a name and link to the table.
      </p>
      <Table removeLink={handleRemove} linkData={tasks} />
      <br />
      <h3 style={{ marginLeft: '210px', color: 'white' }}>Add New</h3>
      <Form
        handleSubmit={handleSubmit}
        setName={setName}
        name={name}
        links={links}
        setLink={setLink}
      />
    </div>
  );
}
// render this thing in a div container with these margins
// and some encouaraging text
// link it up with the table and linkdata parts for the other components
export default LinkContainer;
