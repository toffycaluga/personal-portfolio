import "./HeaderImg.css"
import planet from "../../assets/img/planet.svg"
import rocket from "../../assets/img/rocket.svg"

function HeaderImg() {
    return (
        <section>
            <div className="headerimg">
                <img src={planet} alt="planet" className="planet" />
                <img src={rocket} alt="rocket" className="rocket" />
            </div>
        </section>
    )
}

export default HeaderImg
