document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    console.log(form);
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
            console.log('fromServer', fromServer.reviews);


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


                return `        
                <div class="card review">
                    <div class="card-body">
                        <h5 class="card-title">Rating: ${curr.rating}/5</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Course: ${course}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Expected Grade: ${curr.expected_grade}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Date: ${time}</h6>
                        <hr>
                        <h5>Review: </h5>
                        <p class="card-text">${curr.review}<br></p>
                    </div>
                </div>
                `;
            }).join('');
            $('.search-results').append(html);

        })
        .catch((err) => console.log(err));
});