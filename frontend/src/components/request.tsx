import {Request} from "../types"
interface Props {
  request: Request;
}
const RequestView: React.FC<Props> = ({request}) => {
  return (
    <ul className='request'> Request
      <li>header: {JSON.stringify(request.header)}</li>
      <li>body: {JSON.stringify(request.body)}</li>
      <li>timestamp: {request.createdAt}</li>
    </ul>
  )
}
export default RequestView