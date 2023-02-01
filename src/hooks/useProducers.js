import { useState, useEffect } from "react";

import { loadProducers } from "../services/loadData";

const useProducers = () => {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const regress = loadProducers();
        regress.list.sort(
            (productI, productII) => productI.distance - productII.distance,
        );
        setTitle(regress.title);
        setList(regress.list);
    }, [])

    return (
        [title, list]
    );
}

export default useProducers;