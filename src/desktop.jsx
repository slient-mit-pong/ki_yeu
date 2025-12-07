import Figure from './figure.jsx'
import './desktop.css'
import anh1 from './assets/image/anh1.jpg'
function Desktop() {
    return(
        <>
            <h1>Tiệc tùng cùng các tân cử nhân!</h1>
            <Figure img={anh1}/>
            <Figure className='img2_desktop' img={anh1} />
            <Figure className='img3_desktop' img={anh1} />
            <section className="title">
                <h2 className="title_main">Thư Mời</h2>
                <h2 className="title_sub">Tốt Nghiệp</h2>
            </section>
            <section className='time_location'>
                <div className='time_line'>
                <p>NGÀY 14.12 - 09:30</p>
                </div>
                <div className='location'>
                <p>TRƯỜNG THPT QUỐC OAI</p>
                </div>
            </section>
            <section className='conclusion'>
                <p>Mong rằng các bạn nhớ đến và đến sớm giúp mình!</p>
                <p>Cảm Ơn!</p>
            </section>
        </>
    )
}

export default Desktop