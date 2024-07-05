# backend-cat-inspect

## List of Routes

```js
app.use("/api/brakes", brakeRoutes);
app.use("/api/battery", batteryRoutes);
app.use("/api/tire", tireRoutes);
app.use("/api/engine", engineRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/exterior", exteriorRoutes);
app.use("/api/upload", gcsRoutes);
```

## How to upload images?

```
POST /api/upload
```

To send files, do something equivalent to the following:

<img width="1213" alt="SCR-20240706-baxc" src="https://github.com/akashShanmugraj/backend-cat-inspect/assets/65720968/fb702588-6337-4cc1-903d-e05da907bc66">

this will return a public URL, which you can send in the other POST requests.

## Brake Routes

```
GET /api/brakes/get
```

```
POST /api/brakes/post

const brakes = new Brakes({
    inspectionId: req.body.inspectionId,
    brakeMake: req.body.brakeMake,
    brakeReplacementDate: req.body.brakeReplacementDate,
    brakePadThickness: req.body.brakePadThickness,
    brakeDiscThickness: req.body.brakeDiscThickness,
    brakeOverallSummary: req.body.brakeOverallSummary,
    attachedImages: req.body.attachedImages,
});
```

## Battery Routes

```
GET /api/battery/get
```

```
POST /api/battery/post

const battery = new Battery({
    inspectionId: req.body.inspectionId,
    batteryMake: req.body.batteryMake,
    batteryReplacementDate: req.body.batteryReplacementDate,
    batteryVoltage: req.body.batteryVoltage,
    batteryWaterLevel: req.body.batteryWaterLevel,
    conditionOfBattery: req.body.conditionOfBattery,
    anyRustInBattery: req.body.anyRustInBattery,
    anyLeakInBattery: req.body.anyLeakInBattery,
    batteryOverallSummary: req.body.batteryOverallSummary,
    attachedImages: req.body.attachedImages,
});

```

## Engine Routes

```
GET /api/engine/get
```

```
POST /api/engine/post

const engine = new Engine({
    inspectionId: req.body.inspectionId,
    engineMake: req.body.engineMake,
    engineModel: req.body.engineModel,
    engineSerialNumber: req.body.engineSerialNumber,
    engineReplacementDate: req.body.engineReplacementDate,
    engineHours: req.body.engineHours,
    engineOverallSummary: req.body.engineOverallSummary,
    attachedImages: req.body.attachedImages,
});

```

## Exterior Routes

```
GET /api/exterior/get
```

```
POST /api/exterior/post

const exterior = new Exterior({
    inspectionId: req.body.inspectionId,
    exteriorMake: req.body.exteriorMake,
    exteriorReplacementDate: req.body.exteriorReplacementDate,
    exteriorOverallSummary: req.body.exteriorOverallSummary,
    attachedImages: req.body.attachedImages,
});
```



## Header Routes

```
GET /api/header/get
```

```
POST /api/header/post

const header = new Header({
    truckSerialNumber: req.body.truckSerialNumber,
    truckModel: req.body.truckModel,
    inspectionId: req.body.inspectionId,
    inspectorName: req.body.inspectorName,
    inspectionEmployeeId: req.body.inspectionEmployeeId,
    inspectionDate: req.body.inspectionDate,
    inspectionTime: req.body.inspectionTime,
    inspectionLocation: req.body.inspectionLocation,
    inspectionGeocoordinates: req.body.inspectionGeocoordinates,
    serviceMeterHours: req.body.serviceMeterHours,
    inspectorSignature: req.body.inspectorSignature,
    companyName: req.body.companyName,
    catCustomerId: req.body.catCustomerId,
});
```

## Tire Routes

```
GET /api/tire/get
```

```
POST /api/tire/post

const tire = new Tire({
    inspectionId: req.body.inspectionId,
    tireMake: req.body.tireMake,
    tireModel: req.body.tireModel,
    tireSerialNumber: req.body.tireSerialNumber,
    tireReplacementDate: req.body.tireReplacementDate,
    tireOverallSummary: req.body.tireOverallSummary,
    attachedImages: req.body.attachedImages,
});
```