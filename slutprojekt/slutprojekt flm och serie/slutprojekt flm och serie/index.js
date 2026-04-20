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

        <div className="card">

            <h2 className="title" >{prod.title}</h2>
            <div className="imgBox" >

                <img src="{prod.img}" alt="no_image" ></img>

            </div>
            <p className="description" > {prod.description} </p>
            <button onClick={toggleInfo} className="btnBox" >LÄS MER</button>


            {info ?    <div className="info">
                <h3>{prod.info}</h3>
                 <button onClick={toggleInfo} className="btnBox" >CLOSE</button>
            </div> : ""}
         

        </div>

    )

}



