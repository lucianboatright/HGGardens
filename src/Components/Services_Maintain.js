import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import image1 from './img/lawn-mower-2430725_1920.jpg'
import image2 from './img/shalegarden06.jpg'
import image3 from './img/grass-220465_1280.jpg'
import image4 from './img/garden_pond_03.jpg'

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
    top: '240px',
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
              <Typography style={{color:'rgb(199, 68, 24)'}} > <h2>MAINTAIN</h2></Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title} > Lawn Mowing & Treatment</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className={classes.text_lines} >Regular visits during the growing season also seasonal treatments to keep your grass in good condition.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title} > Hedge Trimming</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <div className={classes.text_lines}>Soft shapping and maintenance of hedges to keep them healthy from year to year. Trimming to promote growth in order to create partitions or low natural barriers. We can also give hedges a soft shaping or hard edges to smarten them up (no animals yet) </div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title}> Planting</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <div className={classes.text_lines}>We are able to source plant required and suggest suitable schemes for your garden.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title}> Prunning</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className={classes.text_lines}>Seasonal rose, fruit tree and shrub cutting carried out at the right time, best for the plant.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div className={classes.text_title}>General Maintenance</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                   <div className={classes.text_lines}>We can come for regular scheduled visits during the year or one off. Depending on the time of year the tasks may be pruning, feeding and weeding or top dressing and general tidying.
                    We would be happy to discuss your specific garden needs individually.
                    Call or email Hugo to book an appointment .</div> 
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  <Link className={classes.contact_link} to="/Contact" > Contacts</Link>
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
                <div className={classes.grid_img}>
                    <img className={classes.img} alt="complex" src={image1} />
        
                    <img className={classes.img} alt="complex" src={image3} />
        
                    <img className={classes.img} alt="complex" src={image2} />

                    <img className={classes.img} alt="complex" src={image4} />
              </div>
            </ButtonBase>
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image1} />
            </ButtonBase> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}