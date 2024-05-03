import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Note({ title, content }: { title: string, content: string}) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <h5>{title}</h5>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}

export default Note;
