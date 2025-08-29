"use client";

import dynamic from "next/dynamic"

const AnimatedNumbers = dynamic (
    () => {
        return import("react-animated-numbers")
    },
    {ssr: false}
);

const achievements = [
    {
        metrics: 'Happy Customers',
        value: '200',
        postfix:'K+'
    },
    {
        metrics: 'Various Services',
        value: '20',
        postfix: '+'
    },
    {
        metrics: 'Years of Experience',
        value: '5',
        postfix: '+'
    },
    {
        metrics: 'Team Members',
        value: '100',
        postfix: '+'
    }
]

const Metrics = () => {
    return (
        <section className="py-10 px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8">
                {
                    achievements.map((achievement, index) => {
                       return (
                        <div key={index} className="text-center pb-8 md:pb-0">
                            <h2 className="text-4xl font-bold text-[#22c55e] flex items-center justify-center">
                                <AnimatedNumbers 
                                    useThousandsSeparator 
                                    animateToNumber={parseInt(achievement.value)} 
                                    fontStyle={{fontSize: 40, fontWeight: 'bold', color: '#22c55e'}}
                                    transitions={(index) => ({
                                    
                                        type: "spring",
                                        duration: 1.9,
                                        bounce: 0.3,
                                        delay: index * 0.2

                                    })}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-gray-600">{achievement.metrics}</p>
                        </div>
                       ) 
                    })        
                }    
            </div>
        </section>
    )
}

export default Metrics;