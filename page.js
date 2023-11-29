export default function Home() {
    return (
        <div className={`flex justify-center items-center text-center h-screen gap-9`}>
            <AnimatedLink href="#" text="Animated Link (Left)" origin="left" />
            <AnimatedLink href="#" text="Animated Link (Right)" origin="right" />
            <AnimatedLink href="#" text="Animated Link (Bottom)" origin="bottom" />

        </div>
    )
}


const AnimatedLink = ({ href, text, origin }) => {
    const transformOriginClass = origin === 'left' ? 'origin-left' : origin === 'right' ? 'origin-right' : 'origin-bottom';
    return (
        <a href={href} className="group relative inline-block text-blue-500 hover:text-blue-700 transition-all duration-300">
            {text}
            <span className={`absolute inset-x-0 -bottom-[0.7px] h-0.5 bg-blue-500 transform ${transformOriginClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
        </a>
    );
};
