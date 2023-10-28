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
              We have a table in a database with the following columns:

              Fecha: Date in format year/month
              Vol_total: Total number of avocado sales in the US at current data
              Exportaciones: Total number of exports of avocado from Mexico to the US at current date
              Precio: Average avocado price in dollars at current date

              You will receive a question regarding data from the table. You need to select the two columns that are the most appropriate to generate a visualization as an answer to the question. Then you will respond with a JSON structure with the following format:

              {"col1":{"name": "sales", "min": 0, "max": 0, "include": []}, "col2": {"name": "date","min": 4,"max": 10,"include": []}}

              where name is the name of column, min is the lower limit (if the request specifies it, else use 0) max is the upper limit (if the request specifies it, else use 0)  and include is an array with the specific categories to include (in the case the column is categorical, if not specified leave empty) 
              Please give the JSON in minified format; that is, do not include line breaks or spaces.
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
