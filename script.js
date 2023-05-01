// Задание № 1 (вариант 1)
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
function sorting (a, b){
  return a.age - b.age;
}
  
console.log(people.sort(sorting));

// Задание № 1 (вариант 2)

const people1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
console.log(people1.sort((a,b) => a.age - b.age));

