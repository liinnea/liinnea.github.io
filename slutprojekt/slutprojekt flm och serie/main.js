async function getData(){

    const res = await fetch("prod.json");
    const data = await res.json();

    printData(data);

}

getData();

function printData(data){

    const html = data.map(genCard);
    html.forEach(p =>(

        document.querySelector("main").appendChild(p)

    ))

}

function genCard(prod){

    const template = document.querySelector(".card");
    const card = template.cloneNode(true);

    card.querySelector(".title").innerTEXT = prod.title;
    card.querySelector(".description").innerTEXT = prod.description;
    card.querySelector(".imgBox img").src = prod.imgBox;
    card.id = prod.id;

    return card;

}