import PropTypes from 'prop-types';

export const ColumnItem = ({ colName }: IColumnItem) => (
    <th>{colName}</th>
)

ColumnItem.propTypes = {
    colName: PropTypes.string.isRequired,

};
