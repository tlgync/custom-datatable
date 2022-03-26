export const IconButton = ({ icon, onClick, disabled }: IIconButton) => (
    <button style={{ pointerEvents: disabled ? 'none' : 'auto' }} disabled={disabled} onClick={onClick}>
        {icon}
    </button>
)