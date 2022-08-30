import React from 'react';
import "./Home.css";
import Product from './Product.js';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
            <div className='home_row'>
                <Product id='12345675' title='The lean startup' image='https://images.cdn2.buscalibre.com/fit-in/360x360/bd/63/bd63ccf87c9fcf7580ef975cc05f539c.jpg' price={29.99} rating={3} />
                <Product id='123156923' title='kMix Stand Mixer All Red Pick from four stunning colours for great performance, bake after bake.' image='https://dam.kenwoodworld.com/562x468/assets/148386' price={239.0} rating={5} />
            </div>
            <div className='home_row'>
                <Product id='12365478' title='Notebook Lenovo ThinkPad L15 / intel core i3 / 8gb RAM / 256gb SSD / 15,6"' image='https://axa.com.ar/webaxa/21710-medium_default/notebook-lenovo-thinkpad-l15-intel-core-i3-8gb-ram-256gb-ssd-156.jpg' price={280.99} rating={3} />
                <Product id='12365454' title='La Galaxy Tab A7 está diseñada para impresionar: atracción en estado puro que ofrece excelentes experiencias de inmersión.' image='https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t500nzaearo/gallery/ar-galaxy-tab-a7-t500-sm-t500nzaearo-332818011?$650_519_PNG$' price={19.99} rating={5} />
                <Product id='12398745' title='The lean startup' image='https://images.cdn2.buscalibre.com/fit-in/360x360/bd/63/bd63ccf87c9fcf7580ef975cc05f539c.jpg' price={19.99} rating={3} />
            </div>
            <div className='home_row'>
                <Product id='12375384' title='Oferta actual de Tv philips 50" pulgadas 126 cm 50put6654 4k-uhd led plano smart tv en Ktronix del catálogo de 12-08 hasta 11-09' image='https://img.offers-cdn.net/assets/uploads/offers/co/9813799/televisor-philips-50-pulgadas-led-4k-ultra-hd-smart-tv-large.jpeg' price={520.99} rating={4} />
            </div>
            
        </div>
    </div>
  )
}

export default Home