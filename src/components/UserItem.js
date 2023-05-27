import { useState, useEffect } from 'react'
import QuantityField from './QuantityField'
import { useUserContext } from '../context/UserContext'

function UserItem({ user }) {
  const { name } = user
  const [quantity, setQuantity] = useState(1)
  const { setCurrentUser } = useUserContext()

  useEffect(() => {
    if (quantity > 7) {
      console.log('aaaa')
    }
  }, [quantity])

  function decrementQuantity() {
    setQuantity(quantity - 1)
  }

  function incrementQuantity() {
    setQuantity(quantity + 1)
  }

  function getMessage() {
    if (quantity > 10) {
      return <div className="alert alert-danger">Quantity is too high</div>
    }
    if (quantity > 5) {
      return <div className="alert alert-warning">Quantity is getting high</div>
    }
    return null
  }

  return (
    <>
      <li
        onClick={() => setCurrentUser(user)}
        className={`list-group-item d-flex ${quantity > 10 ? 'border border-danger' : ''}`}
      >
        <div className="user-icon px-1">X</div>
        <div className="user-name px-1">{name}</div>
        <QuantityField
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        ></QuantityField>
      </li>
      {getMessage()}
    </>
  )
}

export default UserItem
