import Figure from './figure.jsx'
import anh1 from './assets/image/anh1.jpg'

function Mobile() {
    return(
        <>
            <h1>Tiệc tùng cùng các tân cử nhân!</h1>
            <Figure img={anh1} />
            <section className="title">
                <h2 className="title_main">Thư Mời</h2>
                <h2 className="title_sub">Tốt Nghiệp</h2>
            </section>
            <section className='time_location'>
                <div className='time_line'>
                <p>NGÀY 21.12 - 09:45</p>
                </div>
                <div className='location'>
                <p>TTGDTX-GDNN Quốc Oai</p>
                </div>
            </section>
            <section className='conclusion'>
                <p>Mn rảnh thì đến dự kỉ yếu mình nha!</p>
                <p>Cảm Ơn!</p>
            </section>
        </>
    )
}

export default Mobile