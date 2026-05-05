// menuButton

function toggleMenu(){

    document.querySelector("nav").classList.toggle("hidden");

}


// loop för card

ReactDOM.createRoot(document.querySelector("main")).render(<App></App>)

function App(){

    return(

        <div className="app">

            <Products></Products>

        </div>

    )

}

function Products(){

    const [products, setProducts] = React.useState([])

    // kallar på getData exakt en (1) gång

    React.useEffect(()=>{getData()}, [])

    async function getData(){

        const res = await fetch("prod.json");
        const data = await res.json();

        setProducts(data);
        
    }    

    return(

        <div className="products">

            {products.map(p => <Prod key={p.id} prod={p} ></Prod>)}

        </div>

    )

}

function Prod({prod}){

    const [info, setInfo] = React.useState(false);

    function toggleInfo(){

        setInfo(p=>!p)

    }

    return(

        <div className="outerCard" >

            <div className="innerCard">

                <div className="imgBox" >

                    <img src={prod.img} alt="no_image" ></img>

                </div>

                <div className="textBox" >
                    <h2 className="title" >{prod.title}</h2>
                    <p className="description" > {prod.description} </p>
                    <button onClick={toggleInfo} className="btnBox" >LÄS MER</button>
                </div>

                {info ?    <div className="info">
                    {prod.info.img.map(img=> <img className="info-img" src={img} alt="" key = {img} />)}
                    
                    <h3>{prod.title}</h3>
                    <p className="info-desc" >{prod.info.description}</p>
                    <button onClick={toggleInfo} className="btnBox" >CLOSE</button>
                </div> : ""}
            

            </div>

        </div>

    )

}

/* changeImg();

function changeImg(){

    const images = ["https://th.bing.com/th/id/R.e497987622f1996137643c5d46a02a65?rik=%2fRCGsPP%2bGdj7%2fQ&riu=http%3a%2f%2fwww.critique-film.fr%2fwp-content%2fuploads%2f2014%2f10%2fgone-girl-02.jpg&ehk=%2f5TyIvCvaJK7lsjWr5YsPubJdfNzBjK8XBCJ56ie0To%3d&risl=&pid=ImgRaw&r=0", "https://www.slashfilm.com/img/gallery/ben-affleck-was-cast-in-gone-girl-because-of-his-awkward-red-carpet-smile/intro-1696029122.jpg"]
    const index = 0
    const img = document.querySelector(".info")

    setInterval(()=>(

        index = index + 1;
        if(index==img.length) index = 0;

        img.src = images[index];

    ), 8000){

    }


} */



