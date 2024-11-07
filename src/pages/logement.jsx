import { useParams } from 'react-router-dom'

export default function Logement() {
    const { id } = useParams();
    return (
        <div>logement {id} </div>
    )
}
