import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const producers = {
    title: "Produtores",
    list: [
        {
            name: 'Green',
            image: green,
            distance: gerarNumeroAleatorio(1, 500),
            stars: gerarNumeroAleatorio(1, 5)
        },
        {
            name: 'Grow',
            image: grow,
            distance: gerarNumeroAleatorio(1, 500),
            stars: gerarNumeroAleatorio(1, 5)
        },
        {
            name: 'Jenny Jack Farm',
            image: jennyJack,
            distance: gerarNumeroAleatorio(1, 500),
            stars: gerarNumeroAleatorio(1, 5)
        },
        {
            name: 'Potager',
            image: potager,
            distance: gerarNumeroAleatorio(1, 500),
            stars: gerarNumeroAleatorio(1, 5)
        },
        {
            name: 'Salad',
            image: salad,
            distance: gerarNumeroAleatorio(1, 500),
            stars: gerarNumeroAleatorio(1, 5)
        },
    ]
}

export default producers;