let methods = {}

methods.countFine = (dueDate) => {
  let inDate = new Date()
  // console.log('di helper fine');
  // console.log(dueDate);
  // console.log(inDate);
  let selisih = Number(inDate) - Number(dueDate)
  // console.log(selisih);
  let resultFine = Math.floor((selisih / (1000*60*60*24)) * 1000)
  console.log(resultFine);
  return selisih > 0 ? resultFine : 0
}

methods.dueDate = (days) => {
  let outDate = new Date()
  let convertOutDate = Number(new Date(outDate))
  let convertDays = Number((days*1000*60*60*24))
  // console.log('di helper duedate');
  // console.log(convertOutDate);
  // console.log(convertDays);
  // console.log(new Date(convertOutDate + convertDays))
  return new Date(convertOutDate + convertDays)
}

module.exports = methods