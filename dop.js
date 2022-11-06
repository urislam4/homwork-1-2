 const age = [1,12,15,22,8,25];

 const getEvent = (age) => {
  return age.filter((el) => el % 2 == 0)
 }
 console.log(getEvent(age));