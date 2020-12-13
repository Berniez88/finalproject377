document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    const toReq = { "profName": form[0].value }

    fetch('/profapi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toReq)
    })
        .then((fromServer) => fromServer.json())
        .then((fromServer) => {

            $('.search-results').empty();

            const html = fromServer.reviews.map(curr => {

                const time = curr.created.substring(0,10);
                
                // course null check
                let course = "";
                if (curr.course == null) {
                    course = "N/A";
                } else {
                    course = curr.course;
                }

                // expected_grade null check
                let expected_grade = "";
                if (curr.expected_grade == null) {
                    expected_grade = "N/A";
                } else {
                    expected_grade = curr.expected_grade;
                }

                // rating null check
                let rating = "";
                if (curr.rating == null) {
                    rating = "N/A";
                } else {
                    rating = curr.rating;
                }

                // review null check
                let review = "";
                if (curr.review == null) {
                    review = "N/A";
                } else {
                    review = curr.review;
                }

                // return html
                return `       
                <div class="col mb-4">
                <div class="card review">
                    <div class="card-body">
                        <h5 class="card-title">Rating: ${rating}/5</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Course: ${course}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Expected Grade: ${expected_grade}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Date: ${time}</h6>
                        <hr>
                        <h5>Review: </h5>
                        <p class="card-text">${review}<br></p>
                    </div>
                </div>
                </div>
                `;
            }).join('');
            $('.search-results').append(html);

        })
        .catch((err) => console.log(err));
});