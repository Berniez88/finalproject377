let profgradesbase = [];

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