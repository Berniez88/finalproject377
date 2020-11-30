const grade_letters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-']
let classbase = [];

fetch('/api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => classbase.push(...jsonFromServer))
    .catch((err) => {
        console.log(err);
    });

const form = document.getElementById('class-form');
form.onsubmit = function (e) {
    e.preventDefault();
    console.log('this better work:', form.department.value);
    console.log('this better work:', form.course.value);
    console.log('this better work:', form.section.value);
    console.log('this better work:', form.semester.value);
};