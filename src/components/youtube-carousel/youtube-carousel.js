import React from "react"
import YoutubeCarouselStyles from "./youtube-carousel.module.css"
import Card from "@material-ui/core/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import Typography from "@material-ui/core/Typography"
import { AccessAlarm } from "@material-ui/icons"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

const YoutubeCarousel = () => {
  return <div className={YoutubeCarouselStyles.scrollingWrapper}>
    <Card className={YoutubeCarouselStyles.card}>
      <CardActionArea>
        <CardMedia className={YoutubeCarouselStyles.cardHeader}
                   image="http://i3.ytimg.com/vi/3aChah4Fyak/maxresdefault.jpg"
                   title="Test"/>
      </CardActionArea>
      <CardContent>
        <AccessAlarm color="primary"/>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  </div>
}

export default YoutubeCarousel
