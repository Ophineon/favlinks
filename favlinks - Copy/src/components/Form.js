import React from "react";

const Form = ({ handleSubmit, setName, name, links, setLink }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    handleSubmit();
  };
// destructuring- basically you can take a value from an object or array 
// and you can make variables out of the values of the properties
// did it to use the onSumbitHandler to take all those params in the form
  return (
    <form onSubmit={onSubmitHandler}>
      <div style={{ marginLeft: '210px' }}>
        <div style={{marginBottom:'12px' ,}}>
          <div style={{ fontSize: '16px' , fontWeight:500, marginBottom:'6px', color: 'white' }}> Name </div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="name"
            style={{ width: '80%', padding: '10px',borderRadius:'3px' }}
            required
            //name is set to required
          />
        </div>
        <div>
          <div style={{ fontSize: '16px' , fontWeight:500 , marginBottom:'6px', color: 'white'}}> URL </div>
          <input
            value={links}
            onChange={(event) => setLink(event.target.value)}
            type="url"
            name="link"
            style={{ width: '80%', padding: '10px',borderRadius:'3px' }}
            required
            // link is also required
          />
        </div>
        <div style={{ width: '40px', height: '50px', marginTop: '6px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#b62e24',
              color: 'white',
              border: 'none',
              fontSize: '14px',
              fontWeight:'bold',
              width: '75px',
              height: '35px',
              cursor:'pointer',
              borderRadius:'3px'
            }}
            //submit button style
            // style it up, buttons should look snazzy so people press em
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
