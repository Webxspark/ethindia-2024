const Logo = ({className}: { className?: string }) => {
    return (
        <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

            <g id="SVGRepo_iconCarrier">
                <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                <path
                    d="M15.3399 9L6.67969 14V24V34L15.3399 39L24.0002 44L32.6605 39L41.3207 34V24V14L32.6605 9L24.0002 4L15.3399 9Z"
                    fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.0002 24V11M24.0002 24L34.3925 30M24.0002 24L13.6079 30" stroke="white" stroke-width="4"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M32.4438 15.875L35.2584 17.5V20.75M26.8146 35.375L24 37L21.1854 35.375M12.7417 20.75V17.5L15.5563 15.875"
                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>

        </svg>
    );
};

export default Logo;