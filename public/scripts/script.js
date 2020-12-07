async function getGPA(courseObj) {
    let courseAvg = 4.0;
    let professorAvgs = { "Alex": 4.0 }

    try {
      // fetch data from api. api -> json -> array
      const data = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseObj)

      });
  
    const profgradesbase = await data.json();
    return profgradesbase;

    } catch (err) {
      console.log(err);
    }
  }

// Fetch class data from UMD.io into classbase
getData();
async function getData() {
    const data = await fetch("https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json");
    const classbase = await data.json();





    // process submit search form
    const form = document.getElementById('class-form');
    form.onsubmit = async function (e) {
        e.preventDefault();

        // consolidate form data into one object, remove empty data
        const formData = {
            "department_input": form.department.value.toUpperCase(),
            "course_no_input": form.course.value,
            "section_input": form.section.value,
            "semester_input": form.semester.value
        };


        const courseGPA = await getGPA(formData);
        console.log('courseGPA', courseGPA);


        // for each form data, search for matches in classbase. only add unique classes.
        // Return: list of matching classes
        function findMatches(formData) {
            let matchList = [];
            // match dept
            matchList = classbase.filter(curr => {
                return curr.dept_id === formData.department_input;
            });

            // match course number
            if (formData.course_no_input !== '') {
                matchList = matchList.filter(curr => {
                    return curr.course_id === formData.department_input.concat(formData.course_no_input);
                });
            }
            //console.log(matchList);
            return matchList;
        }




        // for each form data, search for matches in profgradesbase. only add unique class.
        // Return: list of matching class


        // for each class in list of matching classes, generate html in results page.
        $('.search-results').empty();
        const matchList = findMatches(formData);
        const html = matchList.map(curr => {

            // get sections
            const sections = curr.sections;
            //console.log(sections);

            let sectionsHTML = ``;

            sections.forEach(section => {

                // get meetings
                const meetings = section.meetings;
                let meetingsHTML = `Meetings: <br>`;
                meetings.forEach(meeting => {
                    meetingsHTML += `
                Lecture ${meeting.classtype}:
                    <ul>
                        <li>days: ${meeting.days}</li>
                        <li>time: ${meeting.start_time} - ${meeting.end_time}</li>
                        <li>Room: ${meeting.building} ${meeting.room}</li>
                    </ul>
                `;
                });

                // update sectionsHTML
                sectionsHTML += `
            <ul>
                <li>Instructor: ${section.instructors}</li>
                <li>Section Number: ${section.number}</li>
                <li>Seats: ${section.seats}</li>
                <li>Open Seats: ${section.open_seats}</li>
                <li>Waitlist: ${section.waitlist}</li>
                <li>${meetingsHTML}</li>
            </ul>
            `;
            });


            // discription null check
            let description = '';
            if (curr.description === null) {
                description = 'No description';
            } else {
                description = curr.description;
            }


            // return full html

            return `
        <div class="col mb-4">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${curr.course_id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Fall 2020</h6>
            <p class="card-text">${description}<br></p>
            
          
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${curr.course_id}">
                Details
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal${curr.course_id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${curr.course_id} - ${curr.name} </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <span><strong>Description:</strong></span>
                            <p>${description}</p>

                            <div class ="course-sections">
                                ${sectionsHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
      </div>
      </div>
        `;
        }).join('');

        $('.search-results').append(html);
    }




}