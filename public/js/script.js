/*var age = prompt("What is your age: ");

if(age == null){
	alert("No age has been given.");
	throw new Error('This is not an error. This is just to abort javascript');
}

age = parseInt(age);

if(age<0){
	alert("You cannot enter a negative age.");
}else if(age === 21){
	alert("Happy birthday");
}else if(!(age % 2 === 0 && age != NaN)){
	alert("Your age is odd.");
}
*/

/*
var nr1 = -10;

while(nr1 > -11 && nr1 < 20){
	if(nr1 % 2 == 0){
		console.log(nr1);
	}
	nr1++;
}

for(var i = -10 ; i<20 ; i++){
	console.log(i);
} */

/*
function test(x)
{
	return x*2; // return del prej funksionit kodi ma posht sfunksionon
	return x/2;
}

console.log(test(40));
*/

/*
function isEven(x){
	if(x % 2 == 0){
		return true;
	}else{
		return false;
	}
}

var nr = prompt("Write a nr:");
nr = parseInt(nr);

if(isEven(nr)){
	console.log("Number is even.");
}else{
	console.log("Number is odd.");
}
*/

/*
var person = {
	name: "Bob",
	age : 24,
	city : "LA"
};

console.log(person.name);
*/

/*
$(document).ready(function() {
  $("#target").click(function () {
    $('div').addClass('prpl');
  });
});

$(document).ready(function() {
  $("#target").click(function () {
    $('#third').addClass('ornb');
  });
});
*/

$(document).ready(function(){

	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Awesome range over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'AWESOME OVER TIME',
            data: data
        }]
    });
});
});


