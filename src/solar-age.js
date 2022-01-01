export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthYearsLeft, mercuryYearsLeft, venusYearsLeft, marsYearsLeft, jupiterYearsLeft, earthYearsPast, mercuryYearsPast, venusYearsPast, marsYearsPast, jupiterYearsPast) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthYearsLeft = earthYearsLeft;
    this.mercuryYearsLeft = mercuryYearsLeft;
    this.venusYearsLeft = venusYearsLeft;
    this.marsYearsLeft = marsYearsLeft;
    this.jupiterYearsLeft = jupiterYearsLeft;
    this.earthYearsPast = earthYearsPast;
    this.mercuryYearsPast = mercuryYearsPast;
    this.venusYearsPast = venusYearsPast;
    this.marsYearsPast = marsYearsPast;
    this.jupiterYearsPast = jupiterYearsPast;
  }

//Test to ensure proper type
negativeCheck() {
  if (this.earthAge < 0) {
    return "age is negative";
    }
  }
//methods to calculate solar age on each planet
toMercury() {
  this.mercuryAge = (this.earthAge / 0.24);
  return this.mercuryAge;
}
}