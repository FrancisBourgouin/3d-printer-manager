import React, { useState } from 'react'
import Printer from './Printer'
import PrinterForm from './PrinterForm'

const Printers = ({ state, dispatch }) => {
  const [formActive, setFormActive] = useState(false)
  const addPrinter = (formData) => {
    dispatch({ type: "addPrinter", data: formData })
    setFormActive(false)
  }
  const editPrinter = (formOutput) => {
    dispatch({ type: "updatePrinter", data: formOutput })
  }
  const removePrinter = (id) => {
    dispatch({ type: "updatePrinter", data: { id } })
  }
  return (
    <section className="Printers">
      <h1>Current Printers</h1>
      {Object.values(state.printers).map(printer => <Printer key={printer.id} {...printer} {...{ editPrinter, removePrinter }} />)}
      {!formActive && <button onClick={() => setFormActive(true)}>Add a printer</button>}
      {formActive && <PrinterForm {...{ addPrinter }} />}
    </section>
  )
}

export default Printers