import {Request} from "../types"
interface Props {
  request: Request;
}
const RequestView: React.FC<Props> = ({request}) => {
  return (
    <table> 
      <tr>
        <th>Request Id</th>
        <td>{request._id}</td>
      </tr>
      <tr>
        <th>Headers</th>
        <td>{JSON.stringify(request.headers)}</td>
      </tr>
      <th>Body</th>
      <td>{JSON.stringify(request.body)}</td>
      <tr>
      </tr>
      <tr>
        <th>Date Received</th>
        <td>{request.createdAt}</td>
      </tr>
    </table> 
  )
}
export default RequestView