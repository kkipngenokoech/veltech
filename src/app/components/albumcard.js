//! reusable album card - card that is being used to display all albums in the site

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Link from "next/link";
import { useState } from "react";

export default function AlbumCard({ album }) {
  const [imageUrl, setImageUrl] = useState(album.coverImage);
  return (
    <Link href={`/album?albumid=${album.id}`}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: "56.25%",
          }}
          image={imageUrl}
          onError={() => setImageUrl(album.url)}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {album.title}
          </Typography>
          <Typography>{album.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{album.dateUploaded}</Button>
          <Button size="small">{album.country}</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
