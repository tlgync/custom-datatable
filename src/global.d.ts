// Components

interface IColumnItem {
    colName: string
}

interface IIconButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: JSX.Element | JSX.Element[];
    onClick: () => void;
    disabled: boolean;
}

interface IModal<T> {
    visible?: boolean
    setVisible?: Dispatch<SetStateAction<boolean>>
    columns: IColumn<T>[];
    selectedItem: T;
    onClose: () => void;
    onSubmit: (row: T) => void;
}

interface IPagination<T> {
    data: T[];
    pagination: number;
    page: number;
    setPagination: Dispatch<SetStateAction<number>>;
    setPage: Dispatch<SetStateAction<number>>;
}

interface IRow {
    className?: string
    onClick?: () => void
    children: JSX.Element | JSX.Element[]
    rowStyle?: React.CSSProperties
}

interface IRowItemProps {
    value: DataType;
    style?: React.CSSProperties
}


interface ITable {
    children: JSX.Element | JSX.Element[]
    className: string
}

interface ITBody {
    children: JSX.Element | JSX.Element[]
    className?: string
}

interface IProps<T> {
    columns: IColumn<T>[];
    data: T[];
    onRowSelected?: (row?: T) => void;
    rowStyle?: React.CSSProperties
    cellStyle?: React.CSSProperties
    editable?: boolean
}

interface IUri {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
    toString(): string;
}

type DataType = string | number | boolean | IUri;

interface IColumn<T> {
    name: string
    selector: (row: T) => DataType;
    editable?: boolean;
    cell?: (row: T) => DataType | JSX.Element;
}

interface ISwitch {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface IGenerateRowProps<T> {
    data: T[];
    page: number;
    pageSize: number;
    setNewData: Dispatch<SetStateAction<T[]>>;
}


