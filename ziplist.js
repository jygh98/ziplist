function zipList(list1, list2) {
  const res = [];
  for (let i = 0; i < list1.length; i++) {
    res.push(list1[i]);
    res.push(list2[i]);
  }
  return res;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
