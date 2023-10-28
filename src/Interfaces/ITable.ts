export default interface ITable {
  name: string;
  cols: string[];
  data: {
    [key: string]: any;
  }[];
}

/*

data = [
    {
        "COL1": "1",
        "COL2": "6",
        "COL3": "11"
    },
    {
        "COL1": "2",
        "COL2": "7",
        "COL3": "12"
    },
    {
        "COL1": "3",
        "COL2": "8",
        "COL3": "13"
    },
    {
        "COL1": "4",
        "COL2": "9",
        "COL3": "14"
    },
    {
        "COL1": "5",
        "COL2": "10",
        "COL3": "15"
    }
]




*/
