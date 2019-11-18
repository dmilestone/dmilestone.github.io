let trace3 = {
    labels: ["Transportation Sales", "Healthcare Staffing Agency Sales", "Data Analytics Bootcamp"],
    values: [3.5, 8.0, 0.5],
    type: "pie"
}


let layout2 = {
    title: "My time after college",
    xaxis: {title: "Roles"},
    yaxis: {title: "Time Spent (years)"}
};

let data2 = [trace3];

Plotly.newPlot("plot2", data2, layout2)