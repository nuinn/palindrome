// function cashMachine(amount) {
//   const currency = [500,200,100,50,20,10,5,2,1];
//   function withdraw(denomination){
//     while (amount >= denomination){
//       if (denomination > 2){
//         console.log(`|${denomination} €|`);
//       }
//       else {
//         console.log(`(${denomination} €)`);
//       }
//       amount -= denomination;
//     }
//   }
//   for (const denomination of currency){
//     withdraw(denomination);
//   }
// }
// cashMachine(1498);

const coinStartIndex = 7;
function cashMachine(amount) {
  const currencies = [500,200,100,50,20,10,5,2,1];
  const summary = [];
  let holder = 0;
  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];
    if (amount >= currency){
      holder += currency;
      amount -= currency;
    }
    if (amount >= currency){
      i--;
    }
    else{
      summary[i] = holder;
      holder = 0;
    }
  }
  let statement = 'You will be provided with the following: ';
  for (let i = 0; i < summary.length; i++) {
    let moneyQuantity = '';
    if (summary[i] == 0){
      statement += moneyQuantity;
    }
    else{
      moneyQuantity = summary[i]/currencies[i];
      i < coinStartIndex ? statement += `${moneyQuantity}x |${currencies[i]} €|, ` : statement += `${moneyQuantity}x (${currencies[i]} €), `;
    }
  }
  statement = statement.slice(0, -2);
  return statement;
}

const todayIWant = 1999;

console.log(cashMachine(todayIWant));