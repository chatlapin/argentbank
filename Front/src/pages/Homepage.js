import React from 'react'
import Hero from '../features/Hero/Hero'
import { featuresData } from '../datas/features'
import Feature from '../features/Feature/Feature'

const Homepage = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {/* Issue 1: The Home page now displays all placeholder data from the mockup. */}
                {featuresData.map((feature, index) => {
                    return (
                        <Feature
                            key={index}
                            src={feature.src}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Homepage
