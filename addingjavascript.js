data.forEach(  (item) =>
{
   var row = tbody.append("tr")
   // Object.entries(item).forEach(function (itemdata) {
   //     row.append("td").text(itemdata[1]);
   // })
   row.append("td").text(item.weekday)
   row.append("td").text(item.date)
   row.append("td").text(item.high)
   row.append("td").text(item.low)
})
