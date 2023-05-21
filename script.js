
async function weatherDetector() {
    
    try {

        let result =await(await fetch("https://api.disneyapi.dev/character")).json();

        let output =await result[scotland];

        console.log(output);
        
    } catch (error) {
        
        console.log(error)
        
    }
}

weatherDetector();

//bootstrap layout

let container = document.createElement('div');

container.setAttribute('class', 'container');

let row1 = document.createElement('div');

row1.setAttribute('class', 'row');

let row2 = document.createElement('div');

row2.setAttribute('class', 'row');

let box_outer = document.createElement('div');

box_outer.setAttribute('class', 'col d-flex justify-content-center')

let header = document.createElement('h3');

header.innerText = 'Disney Characters:';

header.style.textAlign='center'

//table creation

let table = document.createElement('table');

table.setAttribute('class','table table-striped table-dark')

let thead = document.createElement('thead');

let tr1 = document.createElement('tr');

let CharNmae = document.createElement('th');

CharNmae.innerText = 'Character Name';

let image = document.createElement('th');

image.innerText = 'Character Image';

let  create_date= document.createElement('th');

create_date.innerText = 'Created Date';

let update_date = document.createElement('th');

update_date.innerText = 'Updated Date';


let tbody = document.createElement('tbody');

let tr2 = document.createElement('tr');

let td1 = document.createElement('td');

let td2 = document.createElement('td');

let td3 = document.createElement('td');

let td4 = document.createElement('td');

let td5 = document.createElement('td');


document.body.append(container);

container.append(row1);

container.append(row2);

row1.append(header);

row2.append(box_outer);

box_outer.append(table);

table.append(thead);

table.append(tbody);

thead.append(tr1);

tr1.append(CharNmae);

tr1.append(image);

tr1.append(create_date);

tr1.append(update_date);


function foo(data) {

    console.log(data[0])

    for (let i = 0; i < data.length; i++){

        let tr2 = document.createElement('tr');

        let td1 = document.createElement('td');

        td1.innerText = data[i].name;

        let td2 = document.createElement('img');

        td2.setAttribute('src', `${data[i].imageUrl}`);

        td2.setAttribute('class', 'image-fluid')
        
        td2.style.width='70px'
        
        console.log(data[i].imageurl);

        let td3 = document.createElement('td');
        
        let date = new Date(data[i].createdAt);

        td3.innerText = date;

        let td4 = document.createElement('td');
        
        let date2 = new Date(data[i].updatedAt);

        td4.innerText = date2;

        tbody.append(tr2);

        tr2.append(td1);

        tr2.append(td2);

        tr2.append(td3);

        tr2.append(td4);

  

        


    }
    

}

