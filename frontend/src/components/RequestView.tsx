import { Request } from "../types"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'


interface Props {
  request: Request;
}

const RequestView: React.FC<Props> = ({ request }) => {
  return(
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Headers
            </Typography>
            <JsonView src={request.headers} collapseObjectsAfterLength={-1} collapseStringsAfterLength={20}/>
          </CardContent> 
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Body
            </Typography>
            <JsonView src={request.body || ""} collapseObjectsAfterLength={-1} collapseStringsAfterLength={20}/>
          </CardContent> 
        </Card>
      </Grid>
    </Grid>
  )
}
export default RequestView
