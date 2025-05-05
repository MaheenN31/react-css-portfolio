import { Container, Typography, Card, CardContent, CardMedia, Box, Chip, Stack } from '@mui/material';

const projects = [
  {
    title: "Unity 2D Game",
    image: "/images/project1.jpg",
    category: "Game Development",
    description: "Developed a 2D Unity game with engaging mechanics, immersive levels, and smooth controls.",
    technologies: ["Unity", "C#", "Game Design"],
    // Optional: Add links
    // liveUrl: '#',
    // repoUrl: '#'
  },
  {
    title: "Database Management App",
    image: "/images/project2.png",
    category: "Web Development",
    description: "Web app for university data management: efficient storage, retrieval, and organization.",
    technologies: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Java Paint Application",
    image: "/images/project3.png",
    category: "Desktop Application",
    description: "Created a paint application using JavaFX, featuring drawing, erasing, and customization tools.",
    technologies: ["Java", "JavaFX", "OOP"]
  },
  {
    title: "Energy Consumption Viz",
    image: "/images/project4.jpg",
    category: "Data Visualization",
    description: "Visualized global energy consumption using D3.js, comparing renewable/non-renewable sources.",
    technologies: ["D3.js", "JavaScript", "SVG"]
  }
];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 6, md: 10 }, // Responsive padding top/bottom
        px: 2, // Horizontal padding
        backgroundColor: 'background.default', // Use theme background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          textAlign="center" 
          gutterBottom // Adds bottom margin
          sx={{ 
            fontWeight: 'bold',
            color: 'primary.main', // Use theme primary color
            mb: { xs: 4, md: 6 } // Responsive margin bottom
          }}
        >
          My Works
        </Typography>
        
        {/* Simple flex container */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'space-between'
        }}>
          {projects.map((project, index) => (
            // Project card with explicit width
            <Box 
              key={index}
              sx={{ 
                width: { xs: '100%', md: 'calc(50% - 16px)' }, 
                mb: 4 
              }}
            >
              <Card 
                variant="outlined" // Use outlined variant for minimalism
                sx={{ 
                  height: '100%', // Make cards in a row equal height
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: 'rgba(255, 255, 255, 0.12)', // Subtle border color
                  borderRadius: '8px', // Consistent with theme
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow on hover
                    borderColor: 'primary.main' // Highlight border on hover
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="220" // Adjust height as needed
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    objectFit: 'cover', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.12)' // Subtle separator
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}> {/* Added padding */} 
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: '600', 
                      color: 'text.primary' // Use theme text color
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" // Use theme secondary text color
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    gap={1} // Use gap for better spacing control
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined" // Outlined chips for minimal look
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontSize: '0.75rem' // Slightly smaller font
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                {/* Optional: Add CardActions for links/buttons */}
                {/* 
                <CardActions sx={{ px: 3, pb: 2, justifyContent: 'flex-start' }}>
                  {project.liveUrl && (
                    <Button size="small" href={project.liveUrl} target="_blank" variant="contained">
                      Live Demo
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button size="small" href={project.repoUrl} target="_blank" variant="outlined">
                      GitHub
                    </Button>
                  )}
                </CardActions>
                */}
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
