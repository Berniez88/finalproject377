
// find classes that match course_number 
// return: list of matched classes
function findByProfessor(professorMatch, classbase) {
    if(professorMatch != ''){
        result = classbase.filter(curr => {
            const regex = new RegExp(professorMatch, 'gi');

            console.log(curr.professor);
            return curr.professor.match(regex);
        });
        return result;
    }
    // if form input is empty, dont return any suggestions
    else {
        return [];
    }
}

// find classes that match course_number 
// return: list of matched classes
function findByCourseNo(courseNumberMatch, classbase) {
    if(courseNumberMatch != ''){
        result = classbase.filter(curr => {
            const regex = new RegExp(courseNumberMatch, 'gi');

            console.log(curr.name);
            return curr.course_number.match(regex);
        });
        return result;
    }
    // if form input is empty, dont return any suggestions
    else {
        return [];
    }
}

// find classes that match Department
// return: list of matched classes
function findByDept(deptMatch, classbase) {
    if(deptMatch != ''){
        result = classbase.filter(curr => {
            const regex = new RegExp(deptMatch, 'gi');

            console.log(curr.department);
            return curr.department.match(regex);
        });
        return result;
    }
    // if form input is empty, dont return any suggestions
    else {
        return [];
    }
}

// find classes that match Department
// return: list of matched classes
function findByCredits(creditMatch, classbase) {
    if(creditMatch != ''){
        result = classbase.filter(curr => {
            const regex = new RegExp(creditMatch, 'gi');

            console.log(curr.credits);
            return curr.credits.match(regex);
        });
        return result;
    }
    // if form input is empty, dont return any suggestions
    else {
        return [];
    }
}
