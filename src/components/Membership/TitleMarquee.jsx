import { GeneralSemibold } from '@/utils/fonts'
import Marquee from 'react-fast-marquee'

const TitleMarquee = () => {
    return (
        <div className='pb-8'>
            <Marquee>
                <h1 className={`text-[96px] sm:text-[150px] md:text-[256px] ${GeneralSemibold.className} tracking-[-5%] bg-gradient-to-br from-[#7F48FB] to-[#FFFFFF] bg-clip-text text-transparent`}>
                    offcampushire
                </h1>
            </Marquee>

        </div >
    )
}

export default TitleMarquee
