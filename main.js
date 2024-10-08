let Cheese = 0;
let Milk = 50;
let ChocoMilk = 0;
let Cows = 1;
let PriceCow = 10;
let Time = 3000;
let CheeseMakers = 0;
let PriceCheeseMaker = 20;
let ChocoCows = 0;
let PriceChocoCow = 100;

function Get(Id) {
    return document.getElementById(Id);
}

function MakeCheeseFunc() {
    if (Milk > 0) {
        Cheese++;
        Milk--;
        Get("CheeseCount").innerText = Math.round(Cheese);
        Get("MilkCount").innerText = Math.round(Milk);
    }
}

function MilkCowFunc() {
	Milk += Cows;
	Get("MilkCount").innerText = Math.round(Milk);
}

function BuyCowFunc() {
    if (Cheese >= PriceCow) {
        Cows++;
        Cheese -= PriceCow;
        PriceCow += 10;
        Get("CowCount").innerText = Cows;
        Get("PriceCow").innerText = PriceCow;
    }
}

function MilkChocoCowFunc() {
	ChocoMilk += ChocoCows;
	Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
}

function BuyChocoCowFunc() {
    if (Cheese >= PriceChocoCow) {
        ChocoCows++;
        Cheese -= PriceChocoCow;
        PriceChocoCow += 20;
        Get("ChocoCowCount").innerText = ChocoCows;
        Get("PriceChocoCow").innerText = PriceChocoCow;
    }
}

function BuyCheeseMakerFunc() {
	if (Cheese >= PriceCheeseMaker) {
		CheeseMakers++;
		Cheese -= PriceCheeseMaker;
		PriceCheeseMaker = Math.round(PriceCheeseMaker * 1.15 / 5) * 5;
		Get("CheeseCount").innerText = Math.round(Cheese);
		Get("CheeseMakerCount").innerText = CheeseMakers;
		Get("PriceCheeseMaker").innerText = PriceCheeseMaker;
	}
}

setInterval(() => {
    Get("CheeseCount").innerText = Math.round(Cheese);
    Get("MilkCount").innerText = Math.round(Milk);

	if (Milk >= CheeseMakers / 10 / 2) {
		Cheese += CheeseMakers / 10 / 2;
		Milk -= CheeseMakers / 10 / 2;
		Get("CheesePerSecond").innerText = CheeseMakers / 2;
	} else {
		Get("CheesePerSecond").innerText = Milk;
		Cheese += Milk;
		Milk = 0;
	}

    Time--;
    Get("TimeLeft").innerText = Math.round(Time / 10);
}, 100);
