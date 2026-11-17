export const fadeIn = (element: HTMLElement, duration: number = 500) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms`;
    requestAnimationFrame(() => {
        element.style.opacity = '1';
    });
};

export const slideIn = (element: HTMLElement, duration: number = 500) => {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
    element.style.transition = `transform ${duration}ms, opacity ${duration}ms`;
    requestAnimationFrame(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
    });
};

export const rotate = (element: HTMLElement, duration: number = 500) => {
    element.style.transform = 'rotate(0deg)';
    element.style.transition = `transform ${duration}ms`;
    requestAnimationFrame(() => {
        element.style.transform = 'rotate(360deg)';
    });
};