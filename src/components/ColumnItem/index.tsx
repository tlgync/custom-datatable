import PropTypes from 'prop-types';
console.log("git test 3")
export const ColumnItem = ({ colName }: IColumnItem) => (
    <th>{colName}</th>
)

ColumnItem.propTypes = {
    colName: PropTypes.string.isRequired,

};
