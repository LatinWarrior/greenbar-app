import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hero, Button, Navbar } from 'react-daisyui';

export const Home = () => {
    return (
        <main role='main' class='w-full h-full bg-slate-100'>
            <Hero
                className='h-full'
                style={{ backgroundImage: 'url(/assets/placeholder.png)' }}>
                <Hero.Content>
                    <div className='flex flex-col md:flex-row md:justify-around'>
                        <div className='md:mr-10 md:mt-6'>
                            <img
                                src='/images/construction_6.jpg'
                                className='mx-auto rounded-lg shadow-2xl md:max-w-sm'
                                alt='Construction'
                            />
                        </div>
                        <div>
                            <h1 className='mt-6 text-3xl md:text-5xl font-bold md:ml-4'>
                                Welcome to Greenbar & Artisans
                            </h1>
                            <p className='hidden md:flex md:py-6 md:text-1xl md:font-medium md:ml-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tenetur ut soluta atque
                                reprehenderit libero praesentium magnam
                                voluptatum magni eius quia ea a, distinctio ex
                                odit autem corrupti qui ullam. Repellendus
                                maxime quas ratione sint sed quia deleniti qui.
                                Illo voluptas recusandae quod maiores facilis
                                distinctio nisi nemo cumque! Nam molestiae
                                similique, expedita fugiat dicta magnam hic
                                praesentium aliquam voluptas perspiciatis
                                reprehenderit dolorem quod ratione autem, alias
                                voluptate, quas assumenda enim. Mollitia
                                assumenda commodi tempora aut suscipit amet
                                corrupti recusandae, natus rem expedita itaque
                                explicabo maxime inventore harum non voluptatem
                                asperiores officiis dolores? Vitae rem sed
                                deserunt nisi. Eos, molestias dicta.
                            </p>
                            {/* <Button className='hidden md:flex md:mx-4' color='primary'>Get Started</Button> */}
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
        </main>
    );
};
