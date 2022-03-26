import PropTypes from 'prop-types';

export const Row = ({ onClick, children, className, rowStyle }: IRow) => (
    <tr className={className} onClick={onClick} style={rowStyle}>
        {children}
    </tr>
)

Row.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    rowStyle: PropTypes.object,

};
Row.defaultProps = {
    onClick: () => { },
    className: "",
    rowStyle: {}
}