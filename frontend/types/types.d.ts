import React from "react";

// home page swiper/slider 
export type TSlider = {
    icon: JSX.Element,
    title: string,
    className?: string
}

// Sidebar
export type TSidebar = TSlider & {
    link: string
}
