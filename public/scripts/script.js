function gpa_calc() {
    let gpa = 0;
    let num_c = 0;
    const gradesobj = {'A+': 4, 'A' : 4, 'A-' : 3.7, 'B+' : 3.3, 'B': 3, 'B-' : 2.7, 'C+' : 2.3, 'C' : 2, 'C-' : 1.7, 'D+' : 1.3, 'D' : 1, 'D-' : 0.7, 'F' : 0};
    for (const object in grades_array) {
        for (const grade in object){
            if (grade in object){
                gpa += (gradesobj[grade] * object[grade]);
                num_c += (1 * object[grade]);
            };
        };
    };
    return gpa/num_c;
}

// Fetch class data from UMD.io into classbase
getData();
async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json");
    const data = await response.json();
    classbase.push(...data);
}

console.log(classbase);


// process submit search form
const form = document.getElementById('class-form');
form.onsubmit = function (e) {
    e.preventDefault();


    // consolidate form data into one object, remove empty data
    const formData = {
        "department_input": form.department.value,
        "course_no_input": form.course.value,
        "section_input": form.section.value,
        "semester_input": form.semester.value
    };





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
    /*async function getProfessorGradesData() {
const response = await fetch("https://api.planetterp.com/v1/grades?course=".concat(course));
const data = await response.json();
classbase.push(...data);
}*/






    // for each form data, search for matches in classbase. only add unique classes.
    // Return: list of matching classes

    function findMatches(formData) {
        let matchList = [];
        // match dept
        if (formData.department_input !== '') {
            matchList = classbase.filter(curr => {
                return curr.dept_id === formData.department_input;
            });
        }
        // match course no
        if (formData.course_no_input !== '') {
            matchList = matchList.filter(curr => {
                return curr.course_id === formData.department_input.concat(formData.course_no_input);
            });
        }

        console.log(matchList);
        return matchList;



    }




    // for each form data, search for matches in profgradesbase. only add unique class.
    // Return: list of matching class


    // for each class in list of matching classes, generate html in results page.
    $('.search-results').empty();

    const matchList = findMatches(formData);

    const html = matchList.map(curr => {

        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${curr.course_id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${curr.semester}</h6>
          <p class="card-text"> ${curr.description}<br></p>
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>
        `;
    }).join('');

    $('.search-results').append(html);

}