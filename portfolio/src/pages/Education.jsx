import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';

const educationData = [
  { degree: "Bachelor's in Computer Science", institution: "ITU", year: "2027" },
  { degree: "A-levels(pre-engineering)", institution: "ISL", year: "2023" },
  { degree: "O-levels(sciences)", institution: "Beaconhouse", year: "2021" },
];

const Education = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Container sx={{ py: 5 }}>
      <Typography 
        variant="h2" 
        textAlign="center" 
        sx={{ color: '#ff6f61', mb: 4 }}
      >
        Education
      </Typography>
      <TableContainer 
        component={Paper} 
        sx={{ 
          bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          maxWidth: '80%',
          margin: 'auto',
          boxShadow: isDarkMode 
            ? '0 4px 8px rgba(0, 0, 0, 0.5)' 
            : '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ 
                color: isDarkMode ? '#e0e0e0' : '#666666',
                fontWeight: 'bold'
              }}>Degree</TableCell>
              <TableCell sx={{ 
                color: isDarkMode ? '#e0e0e0' : '#666666',
                fontWeight: 'bold'
              }}>Institution</TableCell>
              <TableCell sx={{ 
                color: isDarkMode ? '#e0e0e0' : '#666666',
                fontWeight: 'bold'
              }}>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((row) => (
              <TableRow key={row.degree}>
                <TableCell sx={{ color: isDarkMode ? '#e0e0e0' : '#666666' }}>
                  {row.degree}
                </TableCell>
                <TableCell sx={{ color: isDarkMode ? '#e0e0e0' : '#666666' }}>
                  {row.institution}
                </TableCell>
                <TableCell sx={{ color: isDarkMode ? '#e0e0e0' : '#666666' }}>
                  {row.year}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Education;
