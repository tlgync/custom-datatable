import PropTypes from 'prop-types';


export const RowItem = ({ value, style }: IRowItemProps) => {
    return (
        <td style={style} >
            {[typeof(value) === 'boolean' ? value.toString() : value]}
        </td>
    )
}


RowItem.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    style: PropTypes.object,

};
RowItem.defaultProps = {
    style: {}
}