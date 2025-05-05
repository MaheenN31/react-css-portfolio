import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, CardActionArea, Chip, Stack } from '@mui/material';

const projects = [
  {
    title: "Unity 2D Game",
    image: "/images/project1.jpg",
    category: "Game Development",
    description: "For my final project in Game Development, I designed and developed a 2D game from scratch using Unity. This project involved creating engaging gameplay mechanics, designing immersive levels, and implementing smooth player controls.",
    technologies: ["Unity", "C#", "2D Animation", "Game Design"]
  },
  {
    title: "Database Management",
    image: "/images/project2.png",
    category: "Web Development",
    description: "I developed a web application for university data management, allowing efficient storage, retrieval, and organization of essential academic information. The system was designed to streamline university-related processes.",
    technologies: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Paint Application",
    image: "/images/project3.png",
    category: "Desktop Application",
    description: "For my Object-Oriented Programming (OOP) project, I developed a paint application that allows users to draw, erase, and customize their artwork using various tools and colors.",
    technologies: ["Java", "JavaFX", "OOP", "UI Design"]
  },
  {
    title: "Probability Project",
    image: "/images/project4.jpg",
    category: "Data Visualization",
    description: "For this project, I created a sunburst diagram to visualize global energy consumption in 2023, comparing renewable and non-renewable energy sources.",
    technologies: ["D3.js", "JavaScript", "Data Analysis", "SVG"]
  }
];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 10,
        pb: 5,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          textAlign="center" 
          sx={{ 
            mb: 6,
            color: '#ff6f61',
            fontWeight: 'bold'
          }}
        >
          My Works
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      objectFit: 'cover',
                      borderBottom: '3px solid #ff6f61'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        color: '#ff6f61',
                        mb: 2,
                        fontWeight: 'bold'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Chip 
                      label={project.category}
                      sx={{ 
                        mb: 2,
                        backgroundColor: '#ff6f61',
                        color: 'white'
                      }}
                    />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      flexWrap="wrap" 
                      gap={1}
                    >
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 111, 97, 0.1)',
                            color: '#ff6f61',
                            borderRadius: '4px',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
