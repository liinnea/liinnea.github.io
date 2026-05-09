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

    function Slideshow({images}){

    const [index, setIndex] = React.useState(0);

    React.useEffect(()=>{

        const interval = setInterval(()=>{

            setIndex(prev => 
                prev === images.length - 1 ? 0 : prev + 1
            );

        }, 3000);

        return ()=> clearInterval(interval);

    }, [images]);

    return(

        <div className="slideshow">

            <img 
                className="info-img"
                src={images[index]} 
                alt="movie image"
            />

        </div>

    )

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
                    <Slideshow images={prod.info.img}></Slideshow>
                    
                    <h3>{prod.title}</h3>
                    <p className="info-desc" >{prod.info.description}</p>
                    <button onClick={toggleInfo} className="btnBox" >STÄNG</button>
                </div> : ""}
            

            </div>

        </div>

    )

}


