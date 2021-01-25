import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const TypoDescripcion = styled(Typography)`
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis; 
`

const useStyles = makeStyles({
    root: {
        width: 350,
        background: 'linear-gradient(45deg, #dbdbdb 30%, #f7f7f7 90%)',
        border: 10,
        borderRadius: 3,
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, .5)',
    },
    media: {
        height: 125,
    },
});

export const PreviewCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={props.aoClicarViagem}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.imagem}
                    title={props.titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.titulo}
                    </Typography>
                    <TypoDescripcion variant="body2" color="textSecondary" component="p">
                        {props.descricao}
                    </TypoDescripcion>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="textSecondary">
                    Saiba mais
                </Button>
            </CardActions>
        </Card>
    );
};