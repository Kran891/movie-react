import { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import CItemComponent from "./CItemComponent";
import MovieCardComponent from "./MovieCardComponent";



function CarsouelComponent(props) {
    const [items, setitems] = useState(null);
    useEffect(() => {
        const data = () => {
            let index = 0, Citems = []
            for (; index <= props.data.length - 4; index += 4) {
                Citems.push(props.data.slice(index, index + 4))

            }
            if (props.data.length - index > 0) {
                Citems.push(props.data.slice(index))
            }
            return Citems;
        }
        return () => {
            setitems(data());
        };
    }, []);
        return <Carousel>
        {items && items.map((Citems,index) =><Carousel.Item key={"CItem"+index}>
                <CItemComponent data={Citems} />
              </Carousel.Item>
        )}
        </Carousel>
}
export default CarsouelComponent;