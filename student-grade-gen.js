// The function generates the grades of students based on their score
const student = ["Ayo", "Mary", "Janet", "Moses"]

function grades(studentName, index, studentsScore){student.map( names=> names)
    if( studentsScore >= 80 && studentsScore <= 100 ){
        return ` ${student[index]}, your grade is A`
    }else if (studentsScore >= 60 && studentsScore <= 79){
        return ` ${student[index]}, your grade is B`
    }else if (studentsScore >= 50 && studentsScore <= 59){
        return ` ${student[index]}, your grade is C`
    }else if (studentsScore >= 40 && studentsScore <= 49){
        return ` ${student[index]}, your grade is D`
    }else if (studentsScore >= 0 && studentsScore <= 39) {
        return ` ${student[index]}, your grade is E`
    } else if (studentsScore < 0 || studentsScore > 100) {
        return ` ${student[index]}, you cannot be graded`
    }
    
    return studentName[index]
}

// test cases for the function
const maths = grades(student, 0, 80) //You can replace the 2nd argument & 3rd argument for the student index & student score respectively.
const english = grades(student, 1, 65) 
const physics = grades(student, 2, 50)  
const chemistry = grades(student, 3, 49)  

console.log(maths)
console.log(english)
console.log(physics)
console.log(chemistry)


