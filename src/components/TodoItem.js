import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CardActionArea } from '@material-ui/core';





const TodoItem = ({item, completed, id, dispatch}) => {
    const completedItemAction = () => {
        dispatch({
            type: 'COMPLETE',
            payload: {
                key: id
            }
        })
    }
    
    return (
        <Card style={{marginBottom: '20px'}} className='float-in'>
            <CardActionArea onClick={() => {completedItemAction()}}>
            <CardContent style={{padding: '20px'}}>
                <Typography variant='body1'>
                    {item}
                </Typography>
            </CardContent>
            <CardActions>
                <Button  color={completed ? 'secondary' : 'default'}>Done</Button> <CheckCircleIcon className={completed ? 'fade visible':'fade invisible'} color='secondary' />
            </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default TodoItem;