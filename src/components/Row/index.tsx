export const Row = ({ onClick, children, className, rowStyle }: IRow) => (
    <tr className={className} onClick={onClick} style={rowStyle}>
        {children}
    </tr>
)