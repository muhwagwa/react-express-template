import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';


function Post({ id, title, content }: { id: string, title: string, content: string}) {
  const navigate = useNavigate()
  const toPostDetail=()=>{
    navigate("/posts/" + id);
  }


  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <h5>{title}</h5>
        <p>{content}</p>
        <Button onClick={toPostDetail}>More</Button>
      </CardContent>
    </Card>
  );
}

export default Post;
