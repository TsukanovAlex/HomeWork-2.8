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

// Задание № 2

function isPositive(a) {
  return a >= 0;
  }

function isMale(people) {
    return people.gender === 'male';
  }

function filter(arr, myFunction) {
    const resultArr = [];
    
    for (let i = 0; i < arr.length; i++){
    if (myFunction(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
  }
  
console.log(filter([3, -4, 1, 9], isPositive));
  
const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale)); 
