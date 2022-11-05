import './Home.css'
import bannerImage from '../../assets/images/slider.png'
import Slider from '../../Components/Slider/Slider';
import Profilebox from '../../Components/Profilebox/Profilebox';

const Home = () => {

    const welcomelist = [
        {
            background: 'burnaboy',
            title: 'Daily vibes 1',
            artists: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....',
            theme: 'gold',
        },
        {
            background: 'lojay',
            title: 'Daily vibes 2',
            artists: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....',
            theme: 'red',
        },
        {
            background: 'koffee',
            title: 'Daily vibes 3',
            artists: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy',
            theme: 'blue',
        },
        {
            background: 'burnaboy',
            title: 'Daily vibes 1',
            artists: 'Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....',
            theme: 'gold',
        },
        {
            background: 'lojay',
            title: 'Daily vibes 2',
            artists: 'Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....',
            theme: 'red',
        },
        {
            background: 'koffee',
            title: 'Daily vibes 3',
            artists: 'Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy',
            theme: 'blue',
        },
    ]

    return (
        <>
            <div className='Home_page'>

                
                
                <div className='home_page_container'>


                    <div className='banner_part'>
                        <img src={bannerImage} alt='banner banner' />
                    </div>

                    <div className='welcome_back_part'>
                        <h1>Welcome Back!</h1>
                        <Slider list={welcomelist}/>
                    </div>

                    <div className='welcome_back_part'>
                        <h1>Cheers to the Weekend!</h1>
                        <Slider list={welcomelist}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;