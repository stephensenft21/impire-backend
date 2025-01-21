const aboutService = require('../services/aboutService');

// Get About content
const getAboutData = async (req, res) => {
  try {
    // Fetch data from the service
    const data = await aboutService.getData();

    // If data is not found, return a 404
    if (!data) {
      return res.status(404).json({ message: 'About content not found' });
    }

    // Return the data as a response
    res.status(200).json(data);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching about data:', error);

    // Return a 500 status for server errors
    res.status(500).json({ error: 'Failed to fetch About content' });
  }
};

export default getAboutData
