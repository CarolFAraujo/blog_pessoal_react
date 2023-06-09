/* // Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Importando seu CSS
import "./Carrossel.css";

// Importando Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://i.imgur.com/aYg8YYg.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/OPsSPe1.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/WZH9wfN.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/whGJUCa.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel */