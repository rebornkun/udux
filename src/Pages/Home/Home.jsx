import './Home.css'
import bannerImage from '../../assets/images/slider.png'
import Slider from '../../Components/Slider/Slider';

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

                    <div className='searchbar_part'>
                        <div className='arrow_controllers'>
                            <div className='arrow_box'>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.7715 5.25291L21.355 2.84998L7.92847 16.2901L21.3686 29.7302L23.7715 27.3273L12.7343 16.2901L23.7715 5.25291Z" fill="#D9D9D9"/>
                                </svg>
                            </div>
                            <div className='arrow_box'>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.81052 27.3291L11.227 29.7321L24.6536 16.2919L11.2134 2.85183L8.81052 5.25476L19.8477 16.2919L8.81052 27.3291Z" fill="#D9D9D9"/>
                                </svg>
                            </div>
                        </div>

                        <div className='searchbar'>
                            <svg className='search_icon' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.88429 0C2.63509 0 0 2.63509 0 5.88429C0 9.13349 2.63509 11.7686 5.88429 11.7686C9.13348 11.7686 11.7686 9.13349 11.7686 5.88429C11.7686 2.63509 9.13348 0 5.88429 0ZM5.88429 10.6987C3.22994 10.6987 1.06987 8.53864 1.06987 5.88429C1.06987 3.22994 3.22994 1.06987 5.88429 1.06987C8.53864 1.06987 10.6987 3.22994 10.6987 5.88429C10.6987 8.53864 8.53864 10.6987 5.88429 10.6987ZM10.6987 12.3035L12.3035 10.6987L16.5 14L14 16.5L10.6987 12.3035Z" fill="#D9D9D9"/>
                                <path d="M10.6988 11.2337C10.9942 11.2337 11.2337 10.9942 11.2337 10.6988C11.2337 10.4033 10.9942 10.1638 10.6988 10.1638C10.4033 10.1638 10.1638 10.4033 10.1638 10.6988C10.1638 10.9942 10.4033 11.2337 10.6988 11.2337Z" fill="#D9D9D9"/>
                            </svg>
                            <input 
                            type='text' />
                        </div>
                    </div>

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