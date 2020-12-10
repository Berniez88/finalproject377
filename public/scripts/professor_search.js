async function getProfessor(professor) {
    const professorObj = { "professor": professor };

    try {
        // fetch data from api. api -> json -> array
        const data = await fetch('/profapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(professorObj)

        });

        const profreviewbase = await data.json();
        console.log(profreviewbase);

        return profreviewbase;

    } catch (err) {
        console.log(err);
    }
};

async function getProfessorreviews() {
    const form = document.getElementById("class-form")
    form.onsubmit = async function (e) {
        e.preventDefault();
        const profnameinp = form.department.value
        console.log(profnameinp);
    };
};