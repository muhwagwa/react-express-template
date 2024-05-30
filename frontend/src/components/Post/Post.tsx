import { ButtonBase } from '@mui/material';
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
      <ButtonBase onClick={toPostDetail} sx={{ width: '100%', height: '100%' }}>
        <CardContent sx={{ width: '100%', height: '100%', textAlign: 'left' }}>
          <h3>{title}</h3>
          <p>{content}</p>
        </CardContent>
      </ButtonBase>
    </Card>
  );
}

export default Post;
