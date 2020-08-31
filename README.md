# 3D Printer logger / manager

## Summary / Why

## Data structures

### Printers
Holds information about a specific printer

```js
{
  id:"UUID",
  brandName:"",
  nickname:"",
  dateOfPurchase:"",
  maintenanceDateList:["DATE"],
  levelDateList:["DATE"],
  modifications:["Mod Description"],
  comment:"",
  availableSurfaces:["PrintSurfaceId"]
}
```

### Print Surface
List print surfaces associated with a printer

```js
{
  id:"UUID",
  material:"",
  active:"BOOL" 
}
```

### Filaments
Holds information about a filament spool, still not sure if multiple spool of same product should be separated

```js
{
  id:"UUID",
  type:"",
  brand:"",
  manufactureHotendTemp:{min:0, max:0},
  manufactureBedTemp:{min:0, max:0},
  testedHotendTemp:[{printerId:"", temp:0}],
  testedBedTemp:[{printerId:"", temp:0}],
  comment:"",
  filamentRemaining:{meter:0, gram:0},
  opened:"BOOL"
}
```

### Prints

```js
{
  id:"UUID",
  material:"FilamentId",
  resultQuality:100,
  nozzleSize:0.4,
  lineHeight:0.2,
  imageUrl:"",
  comment:"",
  size:{x:0, y:0, z:0}
  printSurface:"PrintSurfaceId",
  hotendTemp:0,
  bedTemp:0,  
}
```

### Models

```js
{
  id:"UUID",
  material:"FilamentId",
  resultQuality:100,
  nozzleSize:0.4,
  lineHeight:0.2,
  imageUrl:"",
  comment:"",
}
```
