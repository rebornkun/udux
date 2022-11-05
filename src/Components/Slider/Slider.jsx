import Card from '../Card/Card';
import './Slider.css'

const Slider = ({list}) => {
    return ( 
        <div className="slider">
            {
                list.map((item)=>{
                   return <Card background={item.background} title={item.title} artists={item.artists} theme={item.theme} />
                })
            }
        </div>
     );
}
 
export default Slider;