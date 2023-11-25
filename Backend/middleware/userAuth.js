const isLoggedIn = (req, res, next) => {
    // Check if a user is logged in (you can customize this based on your authentication logic)
    const userIsLoggedIn = req.session && req.session.user;
  
    // If the user is logged in, proceed to the next middleware or route handler
    // If not, redirect to the login page or send an unauthorized response
    if (userIsLoggedIn) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized access. Please log in.' });
      // Alternatively, you can redirect to the login page:
      // res.redirect('/login');
    }
  };
  
  // Apply the middleware to specific routes or all routes
  // For example, if you want to protect the "/dashboard" route, use the middleware like this:
  app.get('/dashboard', isLoggedIn, (req, res) => {
    res.send('Welcome to the dashboard!');
  });
  