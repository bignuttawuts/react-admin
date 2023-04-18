import { Link } from "react-router-dom"

function ItemList() {
  return <>
    <h3>Item List</h3>
    <ul>
      <li><Link to="/items/1">item 1</Link></li>
      <li><Link to="/items/2">item 2</Link></li>
    </ul>
  </>
}

export default ItemList