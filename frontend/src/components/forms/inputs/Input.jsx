import PropTypes from 'prop-types'

function Input ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  type = 'text'
}) {
  return (
    <div style={{ gap: 0 }}>
      <label>
        {label}
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
      {
        error && <p style={{ color: 'red' }}>{error}</p>
      }
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  type: PropTypes.string
}

export default Input
