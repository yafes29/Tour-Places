import "./card.scss";

const Card = ({ data }) => {
    console.log(data);
    return (
        <div className="card-container">
            {data.map((item) => {
                const { title, id, desc, image } = item;
                return (

                    <div className="card" key={id}>
                        <div className="title">
                            <h1>{title}</h1>
                        </div>




                        <img src={image} alt="image" />

                        <div className="card-over">
                            <p>{desc}</p>
                        </div>
                    </div>


                )
            })}

        </div>
    )
}

export default Card