"use client"
import { Github, Sun, Moon } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [dark, setDark] = useState(true)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-16 flex items-center justify-between border-b border-white/5">
                    {/* Left */}
                    <a href="/" className="text-base font-medium text-white/70 hover:text-white/90 transition-colors">
                    awesome-web-setups
                    </a>

                    {/* Center */}
                    <div className="flex-1 flex justify-center">
                        
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <button
                            aria-label="Toggle dark mode"
                            role="switch"
                            onClick={() => setDark((d) => !d)}
                            className="relative w-12 h-7 rounded-full bg-white/5 border border-white/10 flex items-center transition-colors duration-200"
                        >
                            <span
                                className={`absolute left-1 top-1 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200 bg-white/10 text-white/80 ${dark ? '' : 'translate-x-5'}`}
                            >
                                {dark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                            </span>
                        </button>
                        <div className="w-px h-6 bg-white/10"></div>
                        <a
                            href="https://github.com/yourusername/awesome-web-setups"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-white/90 transition-colors"
                        >
                            <svg className="w-7 h-7" fill="#98989f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="90px" height="90px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                        </a>
                        <a
                            href="https://discord.gg/your-invite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-white/90 transition-colors"
                            aria-label="Discord"
                        >
                            <svg className="w-7 h-7" fill="#98989f" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="90px" height="90px" fillRule="nonzero">
                                <g fill="" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <g transform="scale(8.53333,8.53333)"><path d="M25.12,6.946c-2.424,-1.948 -6.257,-2.278 -6.419,-2.292c-0.256,-0.022 -0.499,0.123 -0.604,0.357c-0.004,0.008 -0.218,0.629 -0.425,1.228c2.817,0.493 4.731,1.587 4.833,1.647c0.478,0.278 0.638,0.891 0.359,1.368c-0.185,0.318 -0.52,0.496 -0.864,0.496c-0.171,0 -0.343,-0.043 -0.501,-0.135c-0.028,-0.017 -2.836,-1.615 -6.497,-1.615c-3.662,0 -6.471,1.599 -6.499,1.615c-0.477,0.277 -1.089,0.114 -1.366,-0.364c-0.277,-0.476 -0.116,-1.087 0.36,-1.365c0.102,-0.06 2.023,-1.158 4.848,-1.65c-0.218,-0.606 -0.438,-1.217 -0.442,-1.225c-0.105,-0.235 -0.348,-0.383 -0.604,-0.357c-0.162,0.013 -3.995,0.343 -6.451,2.318c-1.284,1.186 -3.848,8.12 -3.848,14.115c0,0.106 0.027,0.209 0.08,0.301c1.771,3.11 6.599,3.924 7.699,3.959c0.007,0.001 0.013,0.001 0.019,0.001c0.194,0 0.377,-0.093 0.492,-0.25l1.19,-1.612c-2.61,-0.629 -3.99,-1.618 -4.073,-1.679c-0.444,-0.327 -0.54,-0.953 -0.213,-1.398c0.326,-0.443 0.95,-0.541 1.394,-0.216c0.037,0.024 2.584,1.807 7.412,1.807c4.847,0 7.387,-1.79 7.412,-1.808c0.444,-0.322 1.07,-0.225 1.395,0.221c0.324,0.444 0.23,1.066 -0.212,1.392c-0.083,0.061 -1.456,1.048 -4.06,1.677l1.175,1.615c0.115,0.158 0.298,0.25 0.492,0.25c0.007,0 0.013,0 0.019,-0.001c1.101,-0.035 5.929,-0.849 7.699,-3.959c0.053,-0.092 0.08,-0.195 0.08,-0.301c0,-5.994 -2.564,-12.928 -3.88,-14.14zM11,19c-1.105,0 -2,-1.119 -2,-2.5c0,-1.381 0.895,-2.5 2,-2.5c1.105,0 2,1.119 2,2.5c0,1.381 -0.895,2.5 -2,2.5zM19,19c-1.105,0 -2,-1.119 -2,-2.5c0,-1.381 0.895,-2.5 2,-2.5c1.105,0 2,1.119 2,2.5c0,1.381 -0.895,2.5 -2,2.5z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
} 