
import React from 'react';

const Video = () => {
    return (
        <div className="w-full  p-4 sm:p-6 md:p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">

                <div className="relative w-full pb-[56.25%]"> {/* This creates a square aspect ratio */}
                    <iframe 
                        src="https://www.youtube.com/embed/xxXloEwplhk" 
                        title="Medoc Health Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Video;