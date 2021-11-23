type IOnClick = (id: number) => void;

export interface NavProps {
    onClick: IOnClick;
    activeId: number;
}

export interface ElementProps extends NavProps {
    label: string;
    index: number;
}
