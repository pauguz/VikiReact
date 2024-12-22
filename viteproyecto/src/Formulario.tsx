import React from 'react'

function Formulario() {
  return (
    <center style={{width:"30%",         
      borderWidth: "1px",
      borderStyle: "groove",
      borderColor: "black",
      borderRadius:"5px"}}>
      <form>
        <input type="number" pattern='^([0-1]{1}|[1-9]{2}[13579])$' min={9} max={19} placeholder='Dimension' id='dim'/>
        <br></br>
        <hr></hr>
        <label htmlFor='0'>Negras</label>
        <input type='radio' value={0} id='0' name='i' />
        <label htmlFor='1'>Blancas</label>
        <input type='radio'value={1} id='1' name='i' />
        <hr/>
      </form>
    </center>
  )
}

export default Formulario
