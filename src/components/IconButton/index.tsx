import PropTypes from 'prop-types';

export const IconButton = ({ icon, onClick, disabled }: IIconButton) => (
    <button style={{ pointerEvents: disabled ? 'none' : 'auto' }} disabled={disabled} onClick={onClick}>
        {icon}
    </button>
)

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};
