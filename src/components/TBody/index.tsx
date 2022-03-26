import PropTypes from 'prop-types';


export const TBody = ({ children, className }: ITBody) => (
    <tbody className={className}>
        {children}
    </tbody>
)

TBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
TBody.defaultProps = {
    className: ""
};