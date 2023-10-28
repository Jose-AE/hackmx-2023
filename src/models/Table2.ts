import mongoose, { Schema } from "mongoose";

const mainTableSchema = new Schema({
  year: Number,
  volumen_produccion: Number,
  valor_produccion: Number,
});

const Table2 =
  mongoose.models.Table2 || mongoose.model("Table2", mainTableSchema);

export default Table2;

////"año","volumen_produccion (ton)","valor_produccion (mil M)"
