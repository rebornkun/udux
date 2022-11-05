import './Card.css'
import burnaart from '../../assets/images/burna.png'
import loyjayart from '../../assets/images/loyjay.png'
import koffeeart from '../../assets/images/koffee.png'

const Card = ({background, title, artists, theme}) => {

    const gradientStyles = [
        {
            theme: 'gold',
            left: [ '#AD4C1D', '#F6B726' ],
            right: [ '#AD4C1D', '#F6B726' ],
            box: [ '#AB491C', '#DDAE45' ]
        },
        {
            theme: 'red',
            left: [ '#C61522', '#030304' ],
            right: [ '#C61522', '#030304' ],
            box: [ '#C61522', '#030304' ]
        },
        {
            theme: 'blue',
            left: [ '#3D66A8', '#91AAC7' ],
            right: [ '#3D66A8', '#91AAC7' ],
            box: [ '#204F9D', '#ADC0D1' ]
        },
    ]

    const getGradient = () => {
        if (theme === 'gold'){
            return gradientStyles[0]
        }else if (theme === 'red'){
            return gradientStyles[1]
        }else if (theme === 'blue'){
            return gradientStyles[2]
        }
    }

    const getBackgroundImage = () => {
        let image
        if( background === 'burnaboy'){
            return image = burnaart
        }else if( background === 'lojay'){
            return image = loyjayart
        }else if( background === 'koffee'){
            return image = koffeeart
        }
    }
    
    return (
        <>
        <div className='card'>
            <div className='graident_side left' style={{ background: `linear-gradient(89.79deg, ${getGradient().left[0]} -19.39%, ${getGradient().left[1]} 123.38%)` }}></div>
            <div className='card_container'>
                <img src={getBackgroundImage()} alt='playlist' />
            </div>
            <div className='graident_side right' style={{ background: `linear-gradient(89.79deg, ${getGradient().right[0]} -19.39%, ${getGradient().right[1]} 123.38%)` }} ></div>
            <div className='gradient_block' style={{ background: `linear-gradient(89.79deg, ${getGradient().box[0]} -19.39%, ${getGradient().box[1]} 123.38%)` }}>
                <p>{title}</p>
                <p>{artists}</p>
            </div>
        </div>
        </>
    );
}

export default Card;