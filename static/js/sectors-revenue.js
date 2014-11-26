

var barChart = dc.barChart("#sector-revenue-bar-chart");
var pieChart = dc.pieChart("#sector-revenue-pie-chart");

//d3.csv("https://docs.google.com/spreadsheet/pub?key=0AjPWVMj9wWa6dGw3b1c3ZHRSMW92UTJlNXRLTXZ0RUE&single=true&gid=0&output=csv",function(resource_data){
d3.csv("static/data/2003-2013-royalty-data.csv",function(resource_data){
	

	var ndx = crossfilter(resource_data);

	var parseDate = d3.time.format("%Y").parse;
	//print_filter(resource_data);
	resource_data.forEach(function(d){
		/*d["Grand Total"]	= clean_monetary_float(d["Grand Total"]);
		d["Coal"]			= clean_monetary_float(d["Coal"]);
		d["Other Products"]	= clean_monetary_float(d["Other Products"]);
		d["Renewables"]		= clean_monetary_float(d["Renewables"]);
		d["Gas"]			= clean_monetary_float(d["Gas"]);
		d["Oil"]			= clean_monetary_float(d["Oil"]);
		d["Year"]			= parseDate(d["Year"]);*/
		d["Royalty"]		= clean_monetary_float(d["Royalty"]);
		//d["Year"]			= parseDate(d["Year"]);

	});
	//print_filter(resource_data);

	var yearDimension = ndx.dimension(function(d){
		return d["Year"];
	});
	var typeDimension = ndx.dimension(function(d){
		return d["Commodity"];
	})
	var totalByYear = yearDimension.group().reduceSum(function(d){
		return d["Royalty"];
	});

	var totalByType = typeDimension.group().reduceSum(function(d){
		return d["Royalty"];
	});
	var all=ndx.groupAll().reduceSum(function(d){return d["Royalty"];});


	var minDate = yearDimension.bottom(1)[0]['Year'];
	var maxDate = yearDimension.top(1)[0]["Year"];

	var barTip = d3.tip()
	  .attr('class', 'd3-tip')
	  .offset([-10, 0])
	  .html(function(d) {
	    return "total royalties<br/> <span style='color:#d54740'>$"+parseFloat(d.data.value).formatMoney(2,'.',',')+"</span>";
	  });
	var pieTip = d3.tip()
		.attr('class','d3-tip')
		.offset([-10,0])
		.html(function (d) { return d.data.key + " royalties<br/><span style='color:#d54740'> $" + parseFloat(d.data.value).formatMoney(2,'.',',') + "</span>";
		});


	
	barChart
		.width(400).height(130)
		.group(totalByYear)
		.dimension(yearDimension)
		.centerBar(false)
		.gap(15)
		.colors(["#9B9B9B"])		
		//.colors(['red',"blue"])
		/*.renderlet(function(chart){
			var expenseColors = ["#fde0dd","#fa9fb5","#e7e1ef","#d4b9da","#c994c7","#fcc5c0","#df65b0","#e7298a","#ce1256", "#f768a1","#dd3497","#e78ac3","#f1b6da"];
			var i=0;
			chart.selectAll("rect.bar").each(function(d){
				d3.select(this).attr("style","fill:"+expenseColors[i]);
				i++;
			});
		})*/
		.elasticY(true)
		.brushOn(false)
		//.x(d3.time.scale().domain([minDate,maxDate]))
		.xUnits(dc.units.ordinal)
        .x(d3.scale.ordinal().domain(["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]))
		.margins({top: 10, right: -2, bottom: 20, left:-2})

		
		//.xUnits(function(){return 15;})
		.yAxis().tickFormat(function(v){return "";});

	
	//barChart.xAxis();

	pieChart.width(300)
		.colors(d3.scale.ordinal().range(["#d54740","#3397c2","#865daa","#9fa731","#5a5a5a"]))
		.height(300)
		.transitionDuration(750)
		.radius(130)
		//.innerRadius(60)
		.dimension(typeDimension)
		.group(totalByType)
		.legend(dc.legend().x(300).y(30).itemHeight(13).gap(10))
		.renderLabel(false)
		//.minAngleForLabel(0)
		//.label(function(d) { return d.data.key + "(" + Math.floor(d.data.value / all.value() * 100) + "%)"; })
		.renderlet(function(d){
			d3.select("#pie-chart-center-text h1").html('Total:<br /> <span>$' + text_money(all.value()) + '</span>');
		});

	

	dc.renderAll();

	d3.selectAll(".bar").call(barTip);
	d3.selectAll(".bar").on('mouseover', barTip.show)
		.on('mouseout', barTip.hide);

	
	


	d3.selectAll(".pie-slice").call(pieTip);
	d3.selectAll(".pie-slice").on('mouseover', pieTip.show).on('mouseout', pieTip.hide);	
});



