import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Navbar from '../components/Navbar';
import NewNavBar from '../components/NewNavBar';
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement logic to send the form data to your backend or handle the submission as needed.
    // For now, let's just show a success message with a Snackbar.
    setOpenSnackbar(true);
    // Clear the form fields after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
    <NewNavBar/>
    <Container sx={{ background: '#CBC3E3', padding: '100px', borderRadius: '50px', boxShadow: '10px 10px 10px rgba(0,0,0,0.1)' }}>
      <Typography variant="h4" gutterBottom>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2bJ4otqfysRRdD0vGgU_jqFI_I4OSsZK5Q&usqp=CAU' style={{width:"100%", height: "100%"}} />
        Get In Touch With Us
      </Typography>
      <Typography variant="body1" paragraph>
        Have questions, need assistance, or want to discuss your high-spec PC requirements? We're here to help! Please use the form below to reach out to us.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Your Phone Number"
              variant="outlined"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Your message has been sent. We'll get back to you soon!"
      />
    </Container>
    </>
  );
}

export default ContactUs;
