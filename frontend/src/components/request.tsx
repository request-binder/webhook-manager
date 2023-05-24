import { Request } from "../types"
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/adventure_time';

interface Props {
  request: Request;
}
const RequestView: React.FC<Props> = ({ request }) => {
  return (
    // <JSONPretty id="json-pretty" data={request}></JSONPretty>
    <table>
      <tbody>
        <tr>
          <th>Request Id</th>
          <td>{request._id}</td>
        </tr>
        <tr>
          <th>Headers</th>
          <td>
            <JSONPretty
              id="json-pretty-headers"
              data={request.headers}
              theme={JSONPrettyMon}
            />
          </td>
        </tr>
        <tr>
          <th>Body</th>
          <td>
            <JSONPretty
              id="json-pretty-body"
              data={request.body}
              theme={JSONPrettyMon}
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
