import React from 'react';

const Card = ({ icon, title, description }) => {
            return (    
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div class="text-2xl mb-4">{ icon }</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">{ title }</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        { description }
                    </p>
                </div>

            );
        
}

export default Card;

