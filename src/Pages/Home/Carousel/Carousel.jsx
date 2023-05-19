import React from 'react';
import Caro1 from '../../../assets/carousel/pexels-erik-mclean-4674338.jpg';
import Caro2 from '../../../assets/carousel/pexels-garvin-st-villier-3874337.jpg';
import Caro3 from '../../../assets/carousel/pexels-jay-pizzle-3802510.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full h-[750px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Caro1} className="w-full rounded-xl" />

                <div className='absolute text-white px-20 
                flex items-center rounded-xl
                h-full flex-col-1
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <div>
                        <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                        <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                            Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                            <button className="btn btn-primary ml-40">Buy Now</button>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 right-10 bottom-10 gap-10">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Caro2} className="w-full rounded-xl" />

                <div className='absolute text-white px-20 
                flex items-center rounded-xl
                h-full flex-col-1
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <div>
                        <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                        <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                            Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                            <button className="btn btn-primary ml-40">Buy Now</button>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 right-10 bottom-10 gap-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Caro1} className="w-full rounded-xl" />

                <div className='absolute text-white px-20 
                flex items-center rounded-xl
                h-full flex-col-1
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <div>
                        <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                        <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                            Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                            <button className="btn btn-primary ml-40">Buy Now</button>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 right-10 bottom-10 gap-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Caro3} className="w-full rounded-xl" />

                <div className='absolute text-white px-20 
                flex items-center rounded-xl
                h-full flex-col-1
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <div>
                        <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                        <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                            Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                            <button className="btn btn-primary ml-40">Buy Now</button>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 right-10 bottom-10 gap-10">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;