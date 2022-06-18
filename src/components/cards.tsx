import * as React from 'react';
import PurchaseModal from './purchaseModal';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

interface packageDetailsProps {
  // using `interface` is also ok
  name: string;
  description: string;
  price: number;
};

export default function Cards({ name, description, price }: packageDetailsProps) {

  const [openModal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Card sx={{ minWidth: 275, maxWidth: "30%", backgroundColor: "#E9F1F7" }}>
        <CardContent>
        <Typography variant="h5" component="div" sx={{ color: "#54426B"}}>
            {name}
        </Typography>
        <Typography variant="body2">
            {description}
        </Typography>
        <Typography variant="body2">
            Price: {price} CAD
        </Typography>
        </ CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Purchase</Button>
          <PurchaseModal open={openModal}/>
        </CardActions>
    </ Card>
  );
}
