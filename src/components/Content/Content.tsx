import React from 'react';

import s from './Content.module.scss';
import { ContentProps } from './types';

const Content = (props: ContentProps) => {
    const { path } = props;

    return (
        <div className={s.wrapper}>
            <iframe
                className={s.frame}
                src={path}
                title="content"
                width="auto"
            />
        </div>
    );
};

export { Content };
