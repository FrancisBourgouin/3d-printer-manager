import { v4 as uuidv4 } from 'uuid';


const defaultPrinter = {
  id: "",
  brand: "",
  model: "",
  nickname: "",
  dateOfPurchase: "",
  maintenanceDateList: [],
  levelDateList: [],
  modifications: [],
  comments: "",
  availableSurfaces: []
}
const defaultSurface = {
  id: "",
  material: "",
  active: false
}
const defaultFilament = {
  id: "",
  type: "",
  brand: "",
  manufactureHotendTemp: { min: 0, max: 0 },
  manufactureBedTemp: { min: 0, max: 0 },
  testedHotendTemp: 0,
  testedBedTemp: 0,
  comments: "",
  filamentRemaining: { meter: 0, gram: 0 },
  opened: false
}

const defaultPrint = {
  id: "",
  material: "",
  resultQuality: 100,
  nozzleSize: 0,
  lineHeight: 0,
  imageUrl: "",
  comments: "",
  size: { x: 0, y: 0, z: 0 },
  printSurface: "",
  hotendTemp: 0,
  bedTemp: 0,
}
const defaultModel = {
  id: "",
  name: "",
  description: "",
  imageUrl: "",
  fileUrl: "",
  comments: "",
}

const defaults = {
  filament: defaultFilament,
  model: defaultModel,
  print: defaultPrint,
  printer: defaultPrinter,
  surface: defaultSurface
}

export const initialState = {
  filaments: {},
  models: {},
  printers: {},
  prints: {},
  surfaces: {}
}


export const reducer = (state, action) => {
  switch (action.type) {
    case 'addPrinter':
      return manageEntry(state, "printers", action.data, uuidv4());
    case 'updatePrinter':
      return manageEntry(state, "printers", action.data);
    case 'addSurface':
      return manageEntry(state, "surface", action.data, uuidv4());
    case 'updateSurface':
      return manageEntry(state, "surface", action.data);
    case 'addFilament':
    case 'updateFilament':
      return '';
    case 'addModel':
    case 'updateModel':
      return '';
    case 'addPrint':
    case 'updatePrint':
      return '';
  }
}

// Initial version for printer only, generalized version under

// const managePrinter = (state, printerData) => {
//   // Initialize
//   let currentId = printerData.id
//   let currentPrinter

//   // If new printer, generate id (lack of id in parameter indicates a new one)
//   if (!currentId) {
//     currentId = uuidv4()
//     currentPrinter = { ...defaultPrinter, ...printerData, id: currentId }
//   } else {
//     currentPrinter = { ...printerData }
//   }

//   // Checks if currentPrinter is an empty object, delete the key if it's true, append to the printers object if false
//   const updatedPrinters = { ...state.printers }
//   if (Object.keys(currentPrinter).length) {
//     updatedPrinters[currentId] = currentPrinter
//   } else {
//     delete updatedPrinters[currentId]
//   }
//   return { ...state, printers: updatedPrinters }
// }

const manageEntry = (state, target, entryData, entryId) => {
  // Initialize
  let currentId = entryId || entryData.id
  let currentEntry

  // If new printer, generate id (lack of id in parameter indicates a new one)
  if (entryId) {
    currentEntry = { ...defaults[target], ...entryData, id: currentId }
  } else {
    currentEntry = { ...entryData }
  }

  // Checks if entryData is an id, delete the key if it's true, append to the printers object if false
  const updatedEntries = { ...state[target] }
  if (Object.keys(currentEntry).length > 1) {
    updatedEntries[currentId] = currentEntry
  } else {
    delete updatedEntries[currentId]
  }
  return { ...state, [target]: updatedEntries }
}
