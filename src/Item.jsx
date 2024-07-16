import { useContext } from "react";
import TimeList from "./TimeList";
import { TestContext } from "./TestContext";

const Item = (props) => {

    const context = useContext(TestContext)

    const handleRemove = (e) => {
        let newTime = context.timeArray.filter((t=> t !== e.target.innerHTML ));
        context.setTimeArray(newTime)
    }

    return(
        <div onClick={handleRemove}>
            {props.children}
        </div>
    )
};

export default Item;
