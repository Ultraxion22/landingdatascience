import VideoThumb from '@/public/images/astros.webp'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill={VideoThumb} fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Densidad en imagenes <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">astronomicas</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"> Actualmente los telescopios y formas de recopilar información sobre el espacio son cada vez mayores y más eficientes, esto se traduce en
              mayor cantidad de datos a procesar, sin mencionar lo cambiante que es el espacio mismo.
              </p>

              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Por lo que las formas de análisis manuales o de baja capacidad son cada vez mas obsoletas, debido a esto se busca una forma de análisis más rápida y automática.
              </p>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                
              <h3 className="h3 ">Solución</h3>

              </div>
              <p className="text-xl text-gray-600">nuestro proyecto se decidió trabajar clasificando imágenes según su densidad. Al usar este sistema de clasificación al poder medir la densidad de una imagen se puede sacar una idea de que
              existe en ella. Ya que al ser más densa una imagen existe más probabilidad de la existencia de astros o materia oscura, por lo que se hará una proceso de machine learning con un catálogo estelar para posteriormente procesarimágenes
               y obtener resultados de forma automática. </p>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}