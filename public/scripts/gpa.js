let profgradesbase = [];
let courseAvg = 4.0;
let professorAvgs = {"Alex": 4.0, }

// fetch data from api. api -> json -> array
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

console.log(profgradesbase);



// gpa calculate
function gpa_calc() {
    let gpa = 0;
    let num_c = 0;
    const gradesobj = { 'A+': 4, 'A': 4, 'A-': 3.7, 'B+': 3.3, 'B': 3, 'B-': 2.7, 'C+': 2.3, 'C': 2, 'C-': 1.7, 'D+': 1.3, 'D': 1, 'D-': 0.7, 'F': 0 };
    for (const object in grades_array) {
        for (const grade in object) {
            if (grade in object) {
                gpa += (gradesobj[grade] * object[grade]);
                num_c += (1 * object[grade]);
            };
        };
    };
    return gpa / num_c;
}




// 
function getCourseAverage () {

}

// calculates average gpa by professor and put into professors array

function getProfAverage() {

}

// {"Alex Leich": 3.3, "David Nugyen": 3.4}


//

