import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body.message;
    const response = await axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `
We have a table in a database with the following tables:

comparison_table: This table is used for comparison across different variables affecting avocado sales. For example, it can relate avocado sales to violent crimes, or to droughts. It has the following columns:
	- fecha: date of observation in year/month format (TYPE: DATE)
	- sequia_leve: percentage of land in Mexico affected by slight droughts (TYPE: NUMERICAL)
	- sequia_moderada: percentage of land in Mexico affected by moderate droughts (TYPE: NUMERICAL)
	- sequia_grave: percentage of land in Mexico affected by severe droughts (TYPE: NUMERICAL)
	- exportaciones_miles_dolares: amount of money (in million USD) exported of avocado from Mexico to US (TYPE: NUMERICAL)
	- evento_violencia: determines if a violent crime related to drug dealers occurred in the month (TYPE: CATEGORICAL)
	- precio_promedio: average price (in USD) of avocado (TYPE: NUMERICAL)
	- total_vendido_US: total number of avocados sold (TYPE: NUMERICAL)

aguacate_mexico: This table contains yearly data of avocado only in Mexican territory. It has the following columns:
	- año: year of observation (TYPE: DATE)
	- volumen_produccion: amount of tons of avocado produced in Mexico (TYPE: NUMERICAL)
	- valor_produccion: amount of value obtained from yearly avocado production in Mexico (TYPE: NUMERICAL)


You will receive a question regarding data from the database. You first need to select one and only one table from the database. Then, only from the selected table, choose
the two columns from the table that are the most appropriate to generate a visualization as an answer to the question. Next, you will suggest one of the four following types of visualizations:

  - line_plot: suggest if one of the columns if of TYPE date
  - bar_plot: suggest if one of the columns is TYPE categorical and the other TYPE numerical
  - scatter_plot: suggest if and only if one column is TYPE numerical and the other is TYPE numerical

Then you will respond with a JSON structure with the following format:

  {“table”:“table_name”,col1":{"name": "sales"}, "col2": {"name": "date"}, "plot_type": "line_plot"}

where table is the name of the table, name is name of column. Please give the JSON in minified format; that is, do not include line breaks or spaces.
              `,
            },
            { role: "user", content: message },
          ],
        },
        {
          headers: { Authorization: "Bearer " + process.env.OPEN_AI_KEY },
        }
      )
      .then((res) => res.data);

    const answer = response.choices[0].message;

    return NextResponse.json(answer, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
