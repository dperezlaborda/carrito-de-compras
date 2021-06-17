import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faHamburger, faHotdog, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';


const data = {   //se guarda en una const para despues importarla mas facil
    productsList : [    //se crea un array con la data de los productos
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faIceCream} className="mr-3"/>,
            name: 'Cono de Helado',
            price: 230
        },
        {
            id: 2,
            icon:<FontAwesomeIcon icon={faHamburger} className="mr-3"/>,
            name: 'Hamburguesa Completa',
            price: 350
        },
        {
            id: 3,
            icon:<FontAwesomeIcon icon={faHotdog} className="mr-3"/>,
            name: 'Pancho',
            price: 200
        },
        {
            id: 4,
            icon:<FontAwesomeIcon icon={faPizzaSlice} className="mr-3"/>,
            name: 'Pizza Mozzarela',
            price: 850
        }
    ]
}



export default data;