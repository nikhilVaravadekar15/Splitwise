import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Sales", "Expenses"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
];

const options = {
    chart: {
        title: "Expenses per users",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ["#12B886", "#FAB005"]
};

export default function BarChart() {
    return (
        <div className="p-4 w-full cursor-pointer border rounded-lg hover:shadow-md">
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}
