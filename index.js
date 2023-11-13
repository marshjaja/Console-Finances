var finances = [
	["Jan-2010", 867884],
	["Feb-2010", 984655],
	["Mar-2010", 322013],
	["Apr-2010", -69417],
	["May-2010", 310503],
	["Jun-2010", 522857],
	["Jul-2010", 1033096],
	["Aug-2010", 604885],
	["Sep-2010", -216386],
	["Oct-2010", 477532],
	["Nov-2010", 893810],
	["Dec-2010", -80353],
	["Jan-2011", 779806],
	["Feb-2011", -335203],
	["Mar-2011", 697845],
	["Apr-2011", 793163],
	["May-2011", 485070],
	["Jun-2011", 584122],
	["Jul-2011", 62729],
	["Aug-2011", 668179],
	["Sep-2011", 899906],
	["Oct-2011", 834719],
	["Nov-2011", 132003],
	["Dec-2011", 309978],
	["Jan-2012", -755566],
	["Feb-2012", 1170593],
	["Mar-2012", 252788],
	["Apr-2012", 1151518],
	["May-2012", 817256],
	["Jun-2012", 570757],
	["Jul-2012", 506702],
	["Aug-2012", -1022534],
	["Sep-2012", 475062],
	["Oct-2012", 779976],
	["Nov-2012", 144175],
	["Dec-2012", 542494],
	["Jan-2013", 359333],
	["Feb-2013", 321469],
	["Mar-2013", 67780],
	["Apr-2013", 471435],
	["May-2013", 565603],
	["Jun-2013", 872480],
	["Jul-2013", 789480],
	["Aug-2013", 999942],
	["Sep-2013", -1196225],
	["Oct-2013", 268997],
	["Nov-2013", -687986],
	["Dec-2013", 1150461],
	["Jan-2014", 682458],
	["Feb-2014", 617856],
	["Mar-2014", 824098],
	["Apr-2014", 581943],
	["May-2014", 132864],
	["Jun-2014", 448062],
	["Jul-2014", 689161],
	["Aug-2014", 800701],
	["Sep-2014", 1166643],
	["Oct-2014", 947333],
	["Nov-2014", 578668],
	["Dec-2014", 988505],
	["Jan-2015", 1139715],
	["Feb-2015", 1029471],
	["Mar-2015", 687533],
	["Apr-2015", -524626],
	["May-2015", 158620],
	["Jun-2015", 87795],
	["Jul-2015", 423389],
	["Aug-2015", 840723],
	["Sep-2015", 568529],
	["Oct-2015", 332067],
	["Nov-2015", 989499],
	["Dec-2015", 778237],
	["Jan-2016", 650000],
	["Feb-2016", -1100387],
	["Mar-2016", -174946],
	["Apr-2016", 757143],
	["May-2016", 445709],
	["Jun-2016", 712961],
	["Jul-2016", -1163797],
	["Aug-2016", 569899],
	["Sep-2016", 768450],
	["Oct-2016", 102685],
	["Nov-2016", 795914],
	["Dec-2016", 60988],
	["Jan-2017", 138230],
	["Feb-2017", 671099],
];

console.log("------------------");
console.log("Financial Analysis");
console.log("------------------");
//  <======  QUESTION 1 ANSWER: AMOUNT OF MONTHS ======>
console.log("Total Months: " + finances.length);

//  ======  QUESTION 2 ANSWER: TOTAL ======>
var totalSum = 0;

for (var i = 0; i < finances.length; i++) {
	totalSum += finances[i][1];
}
console.log("Total: " + "$" + totalSum);

// ======  QUESTION 3 ANSWER: AVERAGE CHANGE ======>
var totalChange = 0;

for (var i = 1; i < finances.length; i++) {
	var change = finances[i][1] - finances[i - 1][1];
	totalChange += change;
}
var averageChange = totalChange / (finances.length - 1);

console.log("Average Change:", averageChange.toFixed(2));

// ======  QUESTION 4 ANSWER: GREATEST INCREASE ======>

var greatestIncreaseIndex = 0;
var greatestIncreaseDate = "";
var greatestIncreaseAmount = 0;

for (var i = 1; i < finances.length; i++) {
	var change = finances[i][1] - finances[i - 1][1];

	if (
		change >
		finances[greatestIncreaseIndex + 1][1] - finances[greatestIncreaseIndex][1]
	) {
		greatestIncreaseIndex = i - 1;
	}
}

greatestIncreaseDate = finances[greatestIncreaseIndex + 1][0];
greatestIncreaseAmount =
	finances[greatestIncreaseIndex + 1][1] - finances[greatestIncreaseIndex][1];

console.log(
	"Greatest Increase in Profits/Losses: " +
		greatestIncreaseDate +
		" ($" +
		greatestIncreaseAmount +
		")"
);

// ======  QUESTION 5 ANSWER: GREATEST DECREASE ======>
var greatestDecreaseIndex = 0;
var greatestDecreaseDate = "";
var greatestDecreaseAmount = 0;

for (var i = 1; i < finances.length; i++) {
	var change = finances[i][1] - finances[i - 1][1];

	if (
		change <
		finances[greatestDecreaseIndex + 1][1] - finances[greatestDecreaseIndex][1]
	) {
		greatestDecreaseIndex = i - 1;
	}
}

greatestDecreaseDate = finances[greatestDecreaseIndex + 1][0];
greatestDecreaseAmount =
	finances[greatestDecreaseIndex + 1][1] - finances[greatestDecreaseIndex][1];

console.log(
	"Greatest Decrease in Profits/Losses: " +
		greatestDecreaseDate +
		" ($" +
		greatestDecreaseAmount +
		")"
);

// ======  DISPLAY CODE IN HTML, LIVE SERVER ======>

var totalMonths = document.getElementById("total-months");
totalMonths.textContent = "Total Months: " + finances.length;

var totalAmount = document.getElementById("total-amount");
totalAmount.textContent = "Total: " + "$" + totalSum;

var averageChangeResult = document.getElementById("average-change");
averageChangeResult.textContent = "Average Change: " + averageChange.toFixed(2);

var increaseResult = document.getElementById("increase");
increaseResult.textContent =
	"Greatest Increase in Profits/Losses: " +
	greatestIncreaseDate +
	" ($" +
	greatestIncreaseAmount +
	")";
var decreaseResult = document.getElementById("decrease");
decreaseResult.textContent =
	"Greatest Decrease in Profits/Losses: " +
	greatestDecreaseDate +
	" ($" +
	greatestDecreaseAmount +
	")";

var continueLoop = true;

while (continueLoop) {
	alert("\n WELCOME!\n Select the data you would like to visualize: ");

	var choice = prompt(
		"Enter your choice:\n1) Total Months \n 2) Total Net amount\n 3) Average Change\n 4) Greatest Increase in Profits/Losses: \n 5) Greatest Decrease in Profits/Losses: \n q) Press q to Quit):"
	);

	switch (choice) {
		case "1":
			alert("The Total number of Months in the data is: " + finances.length);
			break;
		case "2":
			alert("Total net amount over the entire period was: $" + totalSum);
			break;
		case "3":
			alert(
				"Average Change in Profit/Losses over the entire period was: $" +
					averageChange.toFixed(2)
			);
			break;
		case "4":
			alert(
				"Greatest Increase in Profits/Losses was in " +
					greatestIncreaseDate +
					" the amount was: $" +
					greatestIncreaseAmount
			);
			break;
		case "5":
			alert(
				"Greatest Decrease in Profits/Losses was in " +
					greatestDecreaseDate +
					" the amount was: $" +
					greatestDecreaseAmount
			);
			break;
		case "q":
			continueLoop = false;
			break;
		default:
			alert("Invalid choice. Please enter a valid option.");
			break;
	}
}
