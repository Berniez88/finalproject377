const grade_letters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-']
let classbase = [];


// process submit search form
const form = document.getElementById('class-form');
form.onsubmit = function (e) {


    // fetch data from jsons loaded in server.js
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

    // console.log(classbase);




    // create classbase by joining data from both API jsons  (╯°□°)╯︵ ┻━┻







    e.preventDefault();
    console.log('dept:', form.department.value);
    console.log('course:', form.course.value);
    console.log('sec:', form.section.value);
    console.log('sem:', form.semester.value);

    // consolidate form data into one array, remove empty data
    const formData = [form.department.value, form.course.value, form.section.value, form.semester.value].filter(e => e !== "");
    console.log('form data array pls wrk', formData);




    // for each form data, search for matches in classbase. only add unique classes.
    // Return: list of matching classes





    // for each class in list of matching classes, generate html in results page.
    $('.search-results').empty();
    $('.search-results').append(`
        <p>
            ${form.department.value}, ${form.course.value}
        </p>
    `);



};