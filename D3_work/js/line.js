

const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2019-01-01'

document.addEventListener("DOMContentLoaded", function(event){
fetch(api)
        .then(function(response){ return response.json();})
        .then(function(data) {
          var parsedData = parseData(data);
          drawChart(parsedData);
        })
        .catch(function(err) {  console.log("This is the error " ,err); })
});


function parseData(data){

  var arr = [];
  for(var i in data.bpi){
    arr.push({
      data: new Date(i),
      value: +data.bpi[i]

    });
  }
  return arr;
}

function drawChart(data){
  var svgWidth = 800, svgHeight = 600;
  var margin = { top: 20, right: 20, bottom: 30, left:100 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin. bottom;

  var svg = d3.select('svg.line-chart')
      .attr("width", svgWidth)
      .attr("height", svgHeight)

  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime()
      .rangeRound([0, width]);

  var y = d3.scaleLinear()
      .rangeRound([height, 0]);



  var line = d3.line()
      .x(function(d) {  return x(d.data) })
      .y(function(d) {  return y(d.value) })
      x.domain(d3.extent(data, function(d) {  return d.data }));
      y.domain(d3.extent(data, function(d) {  return d.value }));

  g.append("g")
      .attr("transform","translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

  g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("test-anchor","end")
      .text("Price ($)");

  g.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

}
