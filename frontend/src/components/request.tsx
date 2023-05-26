import { Request } from "../types"
import { JSONTree } from 'react-json-tree'
import JSONTheme from "./jsonTheme"
interface Props {
  request: Request;
}

const RequestView: React.FC<Props> = ({ request }) => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Request Id</th>
          <td>{request._id}</td>
        </tr>
        <tr>
          <th>Headers</th>
          <td>
            <JSONTree
              data={request.headers}
              shouldExpandNodeInitially={() => false}
              collectionLimit={10}
              theme={JSONTheme}
            />
          </td>
        </tr>
        <tr>
          <th>Body</th>
          <td>
            <JSONTree
              data={request.body || {}}
              shouldExpandNodeInitially={() => false}
              collectionLimit={10}
              theme={JSONTheme}
            />
          </td>
        </tr>
        <tr>
          <th>Date Received</th>
          <td>{request.createdAt}</td>
        </tr>
      </tbody>
    </table>
  )
}
export default RequestView
