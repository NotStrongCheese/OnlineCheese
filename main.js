let Cheese = 0;
let Milk = 50;
let Cows = 1;
let PriceCow = 10;
let Time = 3000;

function Get(Id) {
    return document.getElementById(Id);
}

function MakeCheeseFunc() {
    if (Milk > 0) {
        Cheese++;
        Milk--;
        Get("CheeseCount").innerText = Cheese;
        Get("MilkCount").innerText = Milk;
    }
}

function MilkCowFunc() {
    if (Milk > 0) {
        Milk += Cows;
        Get("MilkCount").innerText = Milk;
    }
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

setInterval(() => {
    Get("CheeseCount").innerText = Cheese;
    Get("MilkCount").innerText = Milk;

    Time--;
    Get("TimeLeft").innerText = Time / 10;
}, 100);