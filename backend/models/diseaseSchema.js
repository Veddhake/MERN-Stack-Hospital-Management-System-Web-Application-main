import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
  symptom: {
    type: String,  
    required: true,
  },
  department: {
    type: String, 
    required: true,
  },
});

export const Disease = mongoose.model("Disease", diseaseSchema);