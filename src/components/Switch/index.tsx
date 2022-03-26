import PropTypes from 'prop-types';

export const Switch = ({ onChange }: ISwitch) => (
    <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
            <input onChange={onChange} type="checkbox" id="checkbox" />
            <div className="slider round"></div>
        </label>
        <em>Enable Dark Mode!</em>
    </div>
)

Switch.propTypes = {
    onChange: PropTypes.func.isRequired

};