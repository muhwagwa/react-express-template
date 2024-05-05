import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';


function Note({ id, title, content }: { id: string, title: string, content: string}) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Link to={String(id)}>{id}</Link>
        <h5>{title}</h5>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}

export default Note;
