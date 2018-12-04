var margin = { left:80, rigt:20, top:50, bottom:100 };
var height = 500 - margin.top - margin.bottom;
var width = 800 - margin.left - margin.right;

var g = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var time = 0;

var colors = {
  "americas" : "#5687d1",
  "africa" : "#5c7b61",
  "asia" : "#de783b",
  "europe" : "#6ab975"
};


var colorText = g.selectAll("text").data(d3.entries(colors))
  colorText.enter()
    .append("text")
    .attr("class", "colors")
    .attr("y", function(d,i){
      return height - 40 + 15*i;
    })
    .attr("x", width-40)
    .attr("font-size","20px")
    .style("fill",function(d){
      console.log(d.value);
      return d.value;
    })
    .style("opacity","0.8")
    .style("text-anchor","middle")
    .text(function(d){
      return d.key;
    })


var x = d3.scaleLog()
    .range([0,width])
    .domain([142,12000]);
var y = d3.scaleLinear()
    .range([height,0])
    .domain([0,90]);
var area = d3.scaleLinear()
    .range([25*Math.PI, 1500*Math.PI])
    .domain([2000,1400000000]);

var xLable = g.append("text")
    .attr("y", height + 50)
    .attr("x", width/2 )
    .attr("font-size","20px")
    .attr("font-anchor","middle")
    .text("GDP Per Capita ($)");

var yLable = g.append("text")
    .attr("transform","rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font0size","20px")
    .attr("text-anchor","middle")
    .text("Life Expecrancy (Years)");

var timeLable = g.append("text")
    .attr("y", height - 10)
    .attr("x", width - 40)
    .attr("font-size","40px")
    .attr("opacity", "0,4")
    .attr("text-anchor", "middle")
    .text("1800");

var xAxisCall = d3.axisBottom(x)
    .tickValues([400,4000,40000])
    .tickFormat(d3.format("$"));
g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxisCall);

var yAxisCall = d3.axisLeft(y)
    .tickFormat(function(d){
      return +d;
    });
g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall);

d3.json("data/data_full.json",function(data){
  console.log(data);

  const formattedData = data.map(function(year){
    return year["countries"].map(function(country){
      return country;
    })
  });

  d3.interval(function(){
    time = (time < 214) ? time+1 : 0
    update(formattedData[time]);
  },100)
})


function update(data){
  var t = d3.transition()
      .duration(100);

  var circles = g.selectAll("circle").data(data, function(d){
    return d.country;
  });

  var texts = g.selectAll(".enter_text").data(data, function(d){
    return d.country;
  });

  circles.exit()
      .remove();

  circles.enter()
    .append("circle")
    .attr("class","enter")
    .attr("fill",function(d){
      return continentColor(d.continent);
    })
    .merge(circles)
    .translate(t)
      .attr("cx",function(d){
        return x(d.income);
      })
      .attr("cy",function(d){
        return y(d.life_exp);
      })
      .attr("r",function(d){
        return Math.sqrt(area(d.population)/Math.PI);
      })

  texts.enter()
    .append("text")
    .attr("class","enter_text")
    .attr("font-size","15px")
    .merge(texts)
      .attr("x", function(d){
        return x(d.income-125);
      })
      .attr("y", function(d){
        return y(d.life_exp+5);
      })
      .text(function(d,i){
        return (d.continent);
      })
}
