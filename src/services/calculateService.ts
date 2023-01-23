
  export function calculateCompositeTax(data:any){

    let valueHistory = [{
      value: data.initialValue,
      currentYear: 0,
      totalInvestment: 0,
    }]

    Array(data.years).fill(undefined).forEach((_,index) => {

      const lastMonth = valueHistory[index]
      const currentYear = index + 1

      let currentValue = (lastMonth.value * (1+(data.profitability)/100) + (data.contribution*12)) 
       valueHistory.push({
        value: currentValue.toFixed(2),
        currentYear: currentYear,
        totalInvestment: data.initialValue + (data.contribution * 12 * currentYear )
      })
    })
    return valueHistory
  }
