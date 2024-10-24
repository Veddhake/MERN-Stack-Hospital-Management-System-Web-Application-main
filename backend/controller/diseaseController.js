import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Disease}  from "../models/diseaseSchema.js";

export const sendDisease = catchAsyncErrors(async (req, res, next) => {
  const { symptom, department } = req.body;
  if (!symptom || !department ) {
    return next(new ErrorHandler("Please FillFull Form!", 400));
  }
  await Disease.create({ symptom,department });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllDiseases = catchAsyncErrors(async (req, res, next) => {
  const diseases = await Disease.find();
  res.status(200).json({
    success: true,
    diseases,
  });
});
