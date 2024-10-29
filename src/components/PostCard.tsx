import React from 'react';

import './Appbar.scss';

import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PostCard = ({ slug, title, author, date, image, content } : { slug: string, title: string, author: string, date: string, image: string, content: string }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/blog/${slug}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} by {author}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {date}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default PostCard;
