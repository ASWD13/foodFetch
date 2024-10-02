import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PdpPage = () => {

    const { slug } = useParams();


    useEffect(() => {

    }, [slug])




    return (
        <div>PdpPage {slug} </div>
    )
}

export default PdpPage