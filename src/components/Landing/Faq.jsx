import React from 'react'
import FaqINdividual from './FaqINdividual'

const Faqs = () => {
    const faqs = [
        {
            question: 'What types of interviews can we conduct?',
            solution: 'We offer a wide range of interview types, including video interviews, phone interviews, and in-person interviews. We also offer customized interview packages for your team.',
            identity: 'panel1'
        },
        {
            question: 'What types of interviews can we conduct?',
            solution: 'We offer a wide range of interview types, including video interviews, phone interviews, and in-person interviews. We also offer customized interview packages for your team.', identity: 'panel2'
        },
        {
            question: 'What types of interviews can we conduct?',
            solution: 'we offer a wide range of interview types, including video interviews, phone interviews, and in-person interviews. We also offer customized interview packages for your team.', identity: 'panel3'
        }
    ]
    return (
        <div class="w-full md:px-5 xl:px-8 bg-[#f8f8f8] rounded-br-[50px] rounded-bl-[50px]">
            <div class="m-auto w-full max-w-[1000px] px-4 py-12 !font-SpaceGrotesk md:px-5 md:py-[100px] lg4:px-0">
                <div class="flex-center justify-center mb-7 md:mb-[50px]"><h1 class="text-center text-[34px]/[40px] font-bold tracking-[-0.5px] text-active md:text-[50px]/[63px]">Frequently Asked Questions</h1>
                </div>
                <div class="flex ">
                    <div class="mt-2 w-full">

                        {
                            faqs.map((faq, index) => (
                                <FaqINdividual key={index} question={faq.question} solution={faq.solution} identity={faq.identity} />
                            ))
                        }
                        {/* <FaqINdividual question={'What types of interviews can we conduct?'} solution={'We offer a wide range of interview types, including video interviews, phone interviews, and in-person interviews. We also offer customized interview packages for your team.'} identity={'panel1'} /> */}
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Faqs
