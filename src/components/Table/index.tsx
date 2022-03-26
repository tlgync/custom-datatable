import PropTypes from 'prop-types';

export const Table = ({ children, className }: ITable) => (
    <table className={className}>
        {children}
    </table>
)

Table.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
Table.defaultProps = {
    className: ""
};