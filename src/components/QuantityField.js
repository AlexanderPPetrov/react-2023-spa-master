import { useEffect } from 'react'
function QuantityField({ quantity, incrementQuantity, decrementQuantity }) {
  useEffect(() => {
    return () => {
      console.log('on component Unmount')
    }
  }, [])

  useEffect(() => {
    console.log('bbbb')
  }, [])

  return (
    <div className="input-group ms-auto" style={{ width: '180px' }}>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        onClick={decrementQuantity}
      >
        -
      </button>
      <input type="text" className="form-control" value={quantity} readOnly></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  )
}
export default QuantityField
