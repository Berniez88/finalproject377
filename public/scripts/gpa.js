let profgradesbase = [];
let courseAvg = 0;
let professorAvgs = {};

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
    console.log("1");
    let num_c = 0;
    const gradesobj = { 'A+': 4, 'A': 4, 'A-': 3.7, 'B+': 3.3, 'B': 3, 'B-': 2.7, 'C+': 2.3, 'C': 2, 'C-': 1.7, 'D+': 1.3, 'D': 1, 'D-': 0.7, 'F': 0 };
    console.log(profgradesbase);
    for (var index = 0; index < profgradesbase.length; index++) {
    /*profgradesbase.forEach((element) => {
      console.log("2");
    });*/
      console.log("2");
  };
         /*for (const grade in profgradesbase[index]) {
          console.log("3")
            if (grade in gradesobj) {
                courseAvg += (gradesobj[grade] * object[grade]);
                num_c += (1 * object[grade]);
                console.log("4");
            };
        };*/
    };
    // return courseAvg / num_c;

const gpa = gpa_calc()




// 
function getCourseAverage () {

}

// calculates average gpa by professor and put into professors array

function getProfAverage() {

}

// {"Alex Leich": 3.3, "David Nugyen": 3.4}


//

