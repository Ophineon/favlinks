import React from 'react'
// import react library to use React components

const TableHeader = () => {
  return (
    <thead>
      <tr style={{ borderBottom: "1px solid #dcdced" }}>
        <td width='30%' style={{fontWeight: 500, marginLeft: '90px', color: 'white'}}>Name</td>
        <td width='50%' style={{fontWeight: 500, color: 'white'}}>URL</td>
        <td width='15%' style={{fontWeight: 500, color: 'white'}}>Remove</td>
      </tr>
    </thead>
  )
}
// Tableheader returms... the tableheader
//creates a table header with the columns Name,URL,Remove
//uses in text styling to color the column names
//tr is table row and td is table data

const TableBody = ({linkData,removeLink}) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  // creates a tablebody and uses linkdata as one of the params
  const rows = linkData.map((row, index) => {
    //creates a new array called rows by mapping over the linkData prop.
    //For each element in linkData, this maps over it to create a table row.
    return (
      // more in text styling//
      // styles the body and creates columns with names like the header
      <tr key={index} style={{ borderBottom: "1px solid #dcdced" }}>
        <td width={'30%'} style={{padding:'15px 0px', fontWeight:450}}>{row.name}</td>
        <td width={'50%'} style={{padding:'15px 0px', color: 'white'}}>
          <a style={{color:'#318CE7'}} href={row.links} target='_blank'>{row.links}</a>
        </td>
        <td width={'15%'} style={{padding:'0px 0px'}}>
        <button
              type="submit"
              style={{
                backgroundColor: '#b62e24',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight:'bold',
                padding:'5px',
                cursor:'pointer',
                width:'70px',
                borderRadius:'3px',
                height:'35px'
              }}
              onClick={() => removeLink(index)}
            >
              Delete
            </button>
        </td>
      </tr>
    )
  })
// creates styling for buttons and creates a delete button
// delete calls a remove link function 
  return <tbody>{rows}</tbody>
  // returns tablebody with the rows created in the rows array line 24
}

const Table = ({linkData,removeLink}) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    //badabing badaboom, takes the params from before and defines the
    //parent of the header and body components
    return<div style={{marginLeft:'210px'}}>
    <table style={{width:'82%',borderCollapse:'collapse', color: 'white'}}>
      <TableHeader/>
      <TableBody linkData={linkData} removeLink={removeLink}/>
    </table>
    </div> 
  }
  /*imagine The headers listing each of the columns and
  the rows from the body lining up with them
  a nice grid.
  stack the header on top of the body*/
  // returns the table component with header and body
}

export default Table
