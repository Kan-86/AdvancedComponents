import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { id, label, ...props }: InputProps, ref) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input name={id} id={id} {...props} ref={ref} />
        </>
    );
});

export default Input;