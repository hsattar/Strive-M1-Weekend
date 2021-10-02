// EX11.: Add a button in each "action cell" with a "+" sign. When the button is pressed a new line must appear inside the "UL / DIV" in the enrolled section list
// EX12.: Add button for each item of the list. When pressed, the student is removed from the list. 
// EX13.: Create a simple form with 5 fields: ID, Name, Surname, Age, Email
// EX14.: Create a button "add students" which adds a new row to the table
// EX15.: Add a "counter section" in which there is always the number of items in the List
// EX16.: Add somewhere a button, on click, it changes the color of each item in the list in RED
// EX17.: Add somewhere a button, on click, it counts the number of entry in the list and shows it in a newly created paragraph
// EX18.: Add somewhere a button, on click, it swaps HEADER and Subtitle
// EX19.: Add somewhere a button, on click, change the table background to a random color
// EX20.: Add a "color picker" to the page, when the color changes, apply it to the header
// EX21.: Add a dropdown (<select> tag), with your fav movies. When one is selected, change the heading of the page with the selected value 


// EX 6 + 7

let changeText = document.getElementById('change-text')
let changeTextBtn = document.getElementById('change-text-btn')
changeTextBtn.addEventListener('click', () => {
    let title = document.getElementsByTagName('title')[0]
    let h1 = document.getElementsByTagName('h1')[0]

    if (changeText.value === '') {
        alert('Text Field Is Empty')
    } else {
        title.innerText = changeText.value
        h1.innerText = changeText.value
        changeText.value = ''
    }
})

changeText.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        changeTextBtn.click()
    }
})


// EX 11

let studentsEnrolled = [ ]

let addStudentBtn = document.getElementsByClassName('add-student')
for (btn of addStudentBtn) {
    btn.addEventListener('click', e => {
        let student = e.target.parentNode.parentNode.innerText
        let checkStudent = studentsEnrolled.includes(student)
        if (checkStudent === true) {
            return
        } else {
            studentsEnrolled.push(student)
            let studentInfo = document.createElement('p')
            studentInfo.classList.add('enrolled-student')
            let enrolled = document.getElementById('enrolled')
            studentInfo.innerText = student
            enrolled.appendChild(studentInfo)
            checkNumberOfStudents()
        }
    })
}


// EX 12

let removeStudentBtn = document.getElementsByClassName('remove-student')
for (btn of removeStudentBtn) {
    btn.addEventListener('click', e => {
        let studentInfo = e.target.parentNode.parentNode
        let studentsEnrolledList = document.getElementsByClassName('enrolled-student')
        for (student of studentsEnrolledList) {
            console.log(student.innerText)
            console.log(studentInfo)
            if (student.innerText == studentInfo) {
                console.log('remove')
            }
        }
    })
}



// EX 15

const checkNumberOfStudents = () => {
    let enrolledStudents = document.getElementsByClassName('enrolled-student')
    let numberOfEnrolledStudents = enrolledStudents.length
    let enrolledStudentsHeader = document.getElementById('number-of-students-enrolled')
    enrolledStudentsHeader.innerText = `Enrolled Students: ${numberOfEnrolledStudents}`
}