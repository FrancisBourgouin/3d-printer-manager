import React, { useState } from 'react'
import PrinterForm from './PrinterForm'

const Printer = (props) => {
  const [mode, setMode] = useState("SHOW") // SHOW - EDIT - SURFACE - 
  const {
    id,
    brand,
    model,
    nickname,
    dateOfPurchase,
    maintenanceDateList,
    levelDateList,
    modifications,
    comments,
    availableSurfaces,
    removePrinter,
    editPrinter
  } = props
  return (
    <article>
      {mode === "SHOW" &&
        <>
          <ul>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Nickname: {nickname}</li>
            <li>Purchased on: {dateOfPurchase}</li>
            <li>Additional comments: {comments}</li>
          </ul>
          <ul>
            <li>Maintenance dates: {maintenanceDateList}</li>
            <li>Level dates: {levelDateList}</li>
            <li>List of modifications: {modifications}</li>
            <li>Available surfaces : {availableSurfaces}</li>
          </ul>
        </>
      }
      {mode === "EDIT" && <PrinterForm {...{ mode, id, brand, model, nickname, dateOfPurchase, comments, editPrinter, removePrinter }} />}
      <button onClick={() => setMode("EDIT")}>Edit</button>
      <button onClick={() => setMode("SHOW")}>Show</button>
    </article>
  )
}

export default Printer