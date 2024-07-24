export class CountryData {
    name: string;
    years: YearValue[]

    constructor(name: string, years: YearValue[]) {
        this.name = name
        this.years = years
    }

    get getAllYears(): YearValue[] {
        return this.years;
    }

    getValuesForYear(year: number): YearValue | undefined {
        return this.years.find(y => y.year === year);
    }

}

export interface YearValue {
    year: number,
    internetUsage?: number,
    lifeSatisfaction?: number,
    gdp?: number
}