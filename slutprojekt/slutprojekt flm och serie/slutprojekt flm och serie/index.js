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



