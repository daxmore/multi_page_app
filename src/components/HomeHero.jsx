import React from 'react'

const HomeHero = () => {
    return (
        <>
            <section className="hero bg-zinc-900 py-20 h-screen">
                <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover amazing content and connect with us.</p>
                    <button className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full">Get Started</button>
                </div>
            </section>
        </>
    )
}

export default HomeHero