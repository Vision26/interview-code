//fizzbuzz code practice
const num = 100
function fizzBuzz(num) {
    for (i = 0; i < num; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0){
            console.log('buzz')
        } else if(i % 3 === 0){
            console.log('fizz')
        } else
        console.log(i)
    }
}
fizzBuzz(num)