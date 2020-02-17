import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const TodoItem = ({item, completed}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='body1'>
                    {item}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>{completed ? <CheckCircleIcon/> : 'Done?'}</Button>
            </CardActions>
        </Card>
    )
}

export default TodoItem;