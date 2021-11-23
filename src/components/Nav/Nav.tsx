import React from 'react';
import clsx from 'clsx';

import { ElementProps, NavProps } from './types';
import { APPS } from '../../utils/appsData';

import s from './Nav.module.scss';

const Element = (props: ElementProps) => {
    const { label, index, onClick, activeId } = props;

    const onButtonClick = () => {
        onClick(index);
    };

    return (
        <button
            className={clsx(s.button, activeId === index && s.buttonActive)}
            type="button"
            onClick={onButtonClick}
        >
            {label}
        </button>
    );
};

const Nav = (props: NavProps) => {
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                {APPS.map((item, index) => (
                    <Element
                        {...props}
                        label={item.title}
                        index={index}
                        key={item.id}
                    />
                ))}
            </ul>
        </nav>
    );
};

export { Nav };
