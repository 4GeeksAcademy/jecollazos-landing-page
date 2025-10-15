function Card() {
    return (

        <div className="container-fluid">
      
        <div className="card">
            <img src="src/img/gatito.jpeg"
            className="card-img-top" 
            alt="gatito" 
            width="500" 
            height="325" 
            style={{objectFit: "cover"}}/>

            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
       
        </div>);  

}

export default Card;