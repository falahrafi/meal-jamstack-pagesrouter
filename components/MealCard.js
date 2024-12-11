import { Grid, Card, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MealCard = (props) => {
    const {meals} = props

    return (
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3} sx = {{flex: "wrap"}}>
        {
          meals.map((meal) => 
            <Link href={'/meals/' + meal.idMeal}>
                <Grid item key={meal.idMeal}>
                <Card variant='outlined' className={styles.card}>
                    <Grid container direction='column' justifyContent='center' alignItems='center' >
                    <Grid item 
                        className={styles.imgContainer}
                    >
                        <Image 
                        src = {meal.strMealThumb} 
                        alt={meal.strMeal} 
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>
                        {meal.strMeal}
                        </Typography>
                    </Grid>
                    </Grid>
                </Card>
                </Grid>
            </Link>
          )
        }
      </Grid>
    )
}

export default MealCard;