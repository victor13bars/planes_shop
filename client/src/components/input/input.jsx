import React from 'react';
import styles from './styles.module.css'

export const Input = ({
                          type = 'text',
                          name = '',
                          containerClassName = '',
                          placeholder = '',
                          onchange = () => null,
                          error = ''

                      }) => {
    return (
        <div className={`${styles.container} ${containerClassName}`}>
            <input
                type={type}
                name={name}
                className={styles.input}
                placeholder={placeholder}
                onChange={onchange}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
