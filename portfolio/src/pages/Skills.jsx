import { Container, Typography, Box, LinearProgress } from '@mui/material';

const skills = [
  { name: "Web Scraping", value: 90, color: "error" },
  { name: "Figma", value: 70, color: "warning" },
  { name: "Analytical Problem-Solving", value: 75, color: "warning" },
  { name: "MySQL", value: 80, color: "info" },
  { name: "Unity 2D (C#)", value: 95, color: "success" }
];

const Skills = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography 
        variant="h2" 
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Skills
      </Typography>
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ mb: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ color: '#e0a8a3', mb: 1 }}
            >
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              color={skill.color}
              sx={{
                height: 30,
                borderRadius: 2,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
