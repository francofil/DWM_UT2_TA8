const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

  
function findTheOldest(array){
    let max = 0;
    let resultado;
    for(i = 0; i<array.length; i++){
      if(array[i].yearOfDeath-array[i].yearOfBirth>max){
        max = array[i].yearOfDeath-array[i].yearOfBirth;
        resultado = array[i].name;
      }
    }
    return resultado;
}
console.log(findTheOldest(people));
