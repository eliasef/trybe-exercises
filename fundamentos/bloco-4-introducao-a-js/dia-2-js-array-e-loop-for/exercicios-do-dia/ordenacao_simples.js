function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }
  data = [3,5,1,7,3,9,10];
  console.log(data.sort(sortfunction)) //resultado: [1, 3, 3, 5, 7, 9, 10]