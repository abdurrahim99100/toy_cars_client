import React from 'react';
import Caro1 from '../../../assets/carousel/pexels-erik-mclean-4674338.jpg';
import Caro2 from '../../../assets/carousel/pexels-garvin-st-villier-3874337.jpg';
import Caro3 from '../../../assets/carousel/pexels-jay-pizzle-3802510.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Caro1} className="w-full h-3/5 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white px-20 my-64
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                    <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                        Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                    <button className='text-3xl text-primary font-bold ml-56 mb-4'>Buy</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Caro2} className="w-full h-3/5 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white px-20 my-64
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                    <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                        Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                    <button className='text-3xl text-primary font-bold ml-56 mb-4'>Buy</button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Caro3} className="w-full h-3/5 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white px-20 my-64
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                    <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                        Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                    <button className='text-3xl text-primary font-bold ml-56 mb-4'>Buy</button>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Caro2} className="w-full h-3/5 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute text-white px-20 my-64
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]
                '>
                    <p className='text-5xl font-bold'>Latest <span className='text-green-600'>P</span>roduct</p>
                    <p className='w-3/6 text-2xl my-4'>THE BMW i7 M70
                        Introducing the 2024 BMW i7 M70 – the fastest all-electric BMW in history. Combining the muscle of M and the all-electric innovation of i, this electric sedan is unlike anything you've seen or felt before.</p>
                    <button className='text-3xl text-primary font-bold ml-56 mb-4'>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;