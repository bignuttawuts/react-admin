import { useParams } from "react-router-dom"

function Item() {
  const { id } = useParams()
  return <>
    <h3>Item {id}</h3>
  </>
}

export default Item