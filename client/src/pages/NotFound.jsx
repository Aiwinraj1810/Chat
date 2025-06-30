import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4">
      Page not found
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default NotFound
