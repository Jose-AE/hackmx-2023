import mongoose, { Schema } from "mongoose";

const mainTableSchema = new Schema({
  date: Date,
  sequia_leve: [Number],
  sequia_moderada: [Number],
  sequia_grave: [Number],
  exportaciones_miles_dolares: [Number],
  evento_violencia: [Boolean],
  precio_promedio: [Number],
  total_vendido_US: [Number],
});

const MainTable =
  mongoose.models.Post || mongoose.model("MainTable", mainTableSchema);

export default MainTable;
