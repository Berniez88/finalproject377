const grade_letters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-']
let classbase = [];
let profgradesbase = [];


// process submit search form
const form = document.getElementById('class-form');
form.onsubmit = function (e) {
    e.preventDefault();



    console.log('dept:', form.department.value);
    console.log('course:', form.course.value);
    console.log('sec:', form.section.value);
    console.log('sem:', form.semester.value);

    // consolidate form data into one array, remove empty data
    const formData = [form.department.value, form.course.value, form.section.value, form.semester.value].filter(e => e !== "");
    console.log('form data array pls wrk', formData);




    // Get data for class grades
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((fromServer) => fromServer.json())
        .then((jsonFromServer) => profgradesbase.push(...jsonFromServer))
        .catch((err) => {
            console.log(err);
        });


    // Get data for classes
    getData();

    async function getData() {
        const response = await fetch("https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json");
        const data = await response.json();
        classbase.push(...data);
    }

    /*async function getProfessorGradesData() {
        const response = await fetch("https://api.planetterp.com/v1/grades?course=".concat(course));
        const data = await response.json();
        classbase.push(...data);
    }*/


    console.log(profgradesbase);






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