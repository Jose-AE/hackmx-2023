import mongoose, { Schema } from "mongoose";

const mainTableSchema = new Schema({
  date: String,
  sequia_leve: Number,
  sequia_moderada: Number,
  sequia_grave: Number,
  exportaciones_miles_dolares: Number,
  evento_violencia: String,
  precio_promedio: Number,
  total_vendido_US: Number,
});

const MainTable =
  mongoose.models.maintable || mongoose.model("maintable", mainTableSchema);

export default MainTable;
