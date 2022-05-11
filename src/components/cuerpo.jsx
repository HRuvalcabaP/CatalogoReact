const Cuerpo = () => {
    return(
        <div className="d-flex p-5">
            
            <div className="w-50 ">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded">
                        <div className="d-flex">
                            <div className="carousel-item active">
                                <img src="https://assets.reebok.com/images/w_600,f_auto,q_auto/4135fdae573c4e4daa91adb4000d5581_9366/Tenis_Royal_Techque_T_Dia_de_Muertos_Blanco_GY9110_01_standard.jpg" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/originals/06/7a/00/067a003353112cfa87c06c3fd1d8b366.jpg" className="d-block w-100"/>
                            </div>    
                        </div>                                                   
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <div className=" w-50 d-flex flex-column p-5">
                <p>SNEAKER COMPANY</p>
                <h1>Fall Limited Edition Sneaker</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eos magni accusamus nostrum cupiditate aperiam!</p>
            </div>
        </div>
    )
}
export default Cuerpo;