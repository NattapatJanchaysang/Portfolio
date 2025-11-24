import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => { // Combine clsx and twMerge สำหรับการจัดการคลาส Tailwind CSS
    return twMerge(clsx(...inputs));
}