import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const educationData = [
  { degree: "Bachelor's in Computer Science", institution: "ITU", year: "2027" },
  { degree: "A-levels(pre-engineering)", institution: "ISL", year: "2023" },
  { degree: "O-levels(sciences)", institution: "Beaconhouse", year: "2021" },
];

const Education = () => {
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
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          maxWidth: '80%',
          margin: 'auto',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((row) => (
              <TableRow key={row.degree}>
                <TableCell>{row.degree}</TableCell>
                <TableCell>{row.institution}</TableCell>
                <TableCell>{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Education;
