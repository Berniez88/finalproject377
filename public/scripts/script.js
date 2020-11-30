import './query.js'

var grade_letters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-']
let response = fetch("https://api.planetterp.com/v1/courses")
let classbase = []


// fetch data from api. api -> json -> array of classes
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


// get form data after submit
$('#class-search-form').submit(function () {
    // get all the inputs into an array.
    const $inputs = $('#class-search-form');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    let values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });

    console.log('form data', values);

});
