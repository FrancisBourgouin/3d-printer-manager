import React, { useState } from 'react'

const PrinterForm = (props) => {
  const { id, brand, model, nickname, dateOfPurchase, comments, addPrinter, editPrinter, removePrinter, mode } = props

  const [formData, setFormData] = useState({
    brand: brand,
    model: model,
    nickname: nickname,
    dateOfPurchase: dateOfPurchase,
    comments: comments,
  })

  const updateFormField = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <form>
      <ul>
        <input type="text" name="brand" value={formData.brand} onChange={updateFormField} placeholder="Brand Name" />
        <input type="text" name="model" value={formData.model} onChange={updateFormField} placeholder="Model Name" />
        <input type="text" name="nickname" value={formData.nickname} onChange={updateFormField} placeholder="Nickname" />
        <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={updateFormField} placeholder="Date of purchase" />
        <input type="text" name="comments" value={formData.comments} onChange={updateFormField} placeholder="Comments" />
      </ul>
      {mode !== "EDIT" && <button onClick={() => addPrinter(formData)}>Add printer</button>}
      {mode === "EDIT" && <button onClick={() => editPrinter(formData)}>Edit</button>}
      {mode === "EDIT" && <button onClick={() => removePrinter(id)}>Remove</button>}
    </form>
  )
}

export default PrinterForm