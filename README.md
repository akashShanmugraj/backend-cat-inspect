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
  brakeFluidLevel: req.body.brakeFluidLevel,
  brakeConditionFront: req.body.brakeConditionFront,
  brakeConditionRear: req.body.brakeConditionRear,
  emergencyBrake: req.body.emergencyBrake,
  brakeOverallSummary: req.body.brakeOverallSummary,
  attachedImages: req.body.attachedImages
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
  rustedEngine: req.body.rustedEngine,
  dentedEngine: req.body.dentedEngine,
  damagedEngine: req.body.damagedEngine,
  engineOilCondition: req.body.engineOilCondition,
  engineOilColor: req.body.engineOilColor,
  brakeFluidCondition: req.body.brakeFluidCondition,
  brakeFluidColor: req.body.brakeFluidColor,
  oilLeakInEngine: req.body.oilLeakInEngine,
  engineOverallSummary: req.body.engineOverallSummary,
  attachedImages: req.body.attachedImages,
});

```

## Exterior Routes

```
GET /api/exterior/get
```

```
const exterior = new Exterior({
  inspectionId: req.body.inspectionId,
  rustedExterior: req.body.rustedExterior,
  dentedExterior: req.body.dentedExterior,
  damagedExterior: req.body.damagedExterior,
  oilLeakInSuspension: req.body.oilLeakInSuspension,
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
  tirePressureLeftFront: req.body.tirePressureLeftFront,
  tirePressureRightFront: req.body.tirePressureRightFront,
  tireConditionLeftFront: req.body.tireConditionLeftFront,
  tireConditionRightFront: req.body.tireConditionRightFront,
  tirePressureLeftRear: req.body.tirePressureLeftRear,
  tirePressureRightRear: req.body.tirePressureRightRear,
  tireConditionLeftRear: req.body.tireConditionLeftRear,
  tireConditionRightRear: req.body.tireConditionRightRear,
  tireOverallSummary: req.body.tireOverallSummary,
  attachedImages: req.body.attachedImages
});
```

## Sample Routes

```
app.use("/api/sampleinfo", sampleInfoRoutes);
```

```
router.route("/companyname").get(getCompanyName);
router.route("/inspectorname").get(getInspectorName);
router.route("/truckmodel").get(getTruckModel);
router.route("/checkinspectionid").get(checkinspectionid);
```

```
// get company name give cat-customer-id
const getCompanyName = asyncHandler(async (req, res) => {
  const customer = await Customer.findOne({ "cat_customer_id" : req.query.customer_id });
```

```
// get name of the inspector given inspector id
const getInspectorName = asyncHandler(async (req, res) => {
  const inspector = await Inspector.findOne({ "inspectorid": req.query.inspector_id });
```

```
const getTruckModel = asyncHandler(async (req, res) => {
  const truck = await Truck.findOne({ "truck-serial-number" : req.query.truck_id });
```

```
const checkinspectionid = asyncHandler(async (req, res) => {
  const header = await Header.findOne({ "inspectionId" : req.query.inspection_id });
});

```