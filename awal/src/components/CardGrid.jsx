import Card from "./Card.jsx";
import React from 'react';

const CardGrid = ({ features }) => {
    return (
    <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-12">
                Mengapa BrandKu?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                { features.map(items => (
                    <Card key={items.id} icon={items.icon} title={items.title} description={items.description} />
                )) }

            </div>
        </section>
    );    
};

export default CardGrid;