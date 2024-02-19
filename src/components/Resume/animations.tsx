import { keyframes } from "styled-components";

export const ArrowAnimation = keyframes`
0% {
    transform: translateY(0)
}
50% {
    transform: translateY(-50%)
}
100% {
    transform: translateY(0)
}
`

export const GlitchAnimation = keyframes`
    0% {
        clip-path: inset(80% -.375rem 0 0);
        transform: translate(-1.25rem, -.625rem);
    }
    10% {
        clip-path: inset(10% -.375rem 85% 0);
        transform: translate(.625rem, .625rem);
    }
    20% {
        clip-path: inset(80% -.375rem 0 0);
        transform: translate(-.625rem, -.625rem);
    }
    30% {
        clip-path: inset(10% -.375rem 85% 0);
        transform: translate(0, .3125rem);
    }
    40% {
        clip-path: inset(50% -.375rem 30% 0);
        transform: translate(-.3125rem, 0);
    }
    50% {
        clip-path: inset(10% -.375rem 85% 0);
        transform: translate(.3125rem, 0);
    }
    60% {
        clip-path: inset(40% -6px 43% 0);
        transform: translate(.3125rem, .625rem);
    }
    70% {
        clip-path: inset(50% -6px 30% 0);
        transform: translate(-.625rem, .625rem);
    }
    80% {
        clip-path: inset(80% -6px 5% 0);
        transform: translate(1.25rem, -.625rem);
    }
    90% {
        clip-path: inset(80% -6px 0 0);
        transform: translate(-.625rem, 0);
    }
    100% {
        clip-path: inset(80% -6px 0 0);
        transform: translate(0);
    }
`

export const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`