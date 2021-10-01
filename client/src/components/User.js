import { useParams } from "react-router";

const User = () => {

    const { id } = useParams();   //get route parameters

    return (
        <div>
            <h3>Single user - {id}</h3>
            
        </div>
    )
}

export default User
