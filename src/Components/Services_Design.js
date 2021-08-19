import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import image1 from './img/garden_design_01.jpg'
import image2 from './img/garden_design_2.jpg'
// import image3 from './img/garden_design_03.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    background: 'rgb(243, 248, 233)',
  },
  image: {
    width: 128,
    height: 128,

  },
  img: {
    // marginTop: '300px',
    position: 'relative',
    top: '10px',
    paddingTop: '20px',
    paddingBottom: '20px',
    padding: '5px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  grid_img: {
    direction: "row-reverse", 
    justify: "center",
    alignItems: "center",
  },
  contact_link: {
    textDecoration: 'none',
  },
  text_title: {
    // border: '1px solid black',
    float: 'right',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '400px',
    height: '10px',
    textAlign: 'right',
    verticalAlign: 'middle',
    color:'rgb(28, 70, 54)',
  },
  text_lines: {
    // border: '1px solid black',
    paddingTop: '10px',
    // marginTop: '10px',
    float: 'right',
    width: '500px',
    height: 'auto',
    textAlign: 'justify',
    color:'rgb(28, 70, 54)',
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid  container spacing={2}>
          <Grid item>
          <Grid item>
              <Typography style={{color:'rgb(199, 68, 24)'}} > <h2>Design</h2></Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title} > Initial Meeting and Prelim Design</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className={classes.text_lines} >Involve meeting with the customer to discuss ideas, themes, requirements and budget. This will lead to a preliminary design concept, which will include features, styles & planting.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title} > Design Plans</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <div className={classes.text_lines}>Upon confirmation of the design concept and more detailed plan will be created. Including greater details on dimensions, specific materials and features. (This will include construction drawings and planting plans where appropriate)</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title}> Design Handover or Instillation</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className={classes.text_lines}>Seasonal rose, fruit tree and shrub cutting carried out at the right time, best for the plant.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title}>General Maintenance</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                   <div className={classes.text_lines}>Depending whether the project included installation or just design.</div> 
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  <Link className={classes.contact_link} to="/Contact" > Contacts</Link>
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.image}>
                <div className={classes.grid_img}>
                    <img className={classes.img} alt="complex" src={image1} />
        
                    <img className={classes.img} alt="complex" src={image2} />
              </div>
            </Typography>
            
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image1} />
            </ButtonBase> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}