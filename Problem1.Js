

const API = 'https://jsonplaceholder.typicode.com/todos/';

// const API = '"https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100"';

  fetch(API)  
    .then(response => {
     
       const oK=  response.json();
       console.log(oK)
       return oK;
    }
    )
    .then(data => {

        const list = document.createElement("ol");
        console.log(data)
        data.map(head => {

            const Litem = document.createElement("li");
            Litem.style.color = "orange   ";
            Litem.style.padding = "20px"
            Litem.style.border = "3px solid grey "
            Litem.style.borderRadius = "10px";
            Litem.style.margin="50px  530px 50px 530px "
            // listItem.style.margin = "20px"

            Litem.innerText = head.title;
            list.appendChild(Litem);
        }

        );


        const titlesContainer = document.getElementById("titles");

        titlesContainer.appendChild(list);
    })
    .catch(error => {
        console.log('not ook', error);
    });




