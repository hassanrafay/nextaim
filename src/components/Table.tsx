import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Grid,
  Stack,
  Paper,
  Radio,
  Table,
  Switch,
  Collapse,
  TableRow,
  Container,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  RadioGroup,
  FormControl,
  TableContainer,
  FormControlLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  EventAvailable,
  KeyboardArrowUp,
  KeyboardArrowDown,
  PermContactCalendarOutlined
} from '@mui/icons-material';
import { RadioType, Person, ListOfRecords } from '../types/table.d';

// For Radio stylings
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 25,
  height: 25,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)'
  }
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 25,
    height: 25,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3'
  }
});

// Inspired by blueprintjs
const BpRadio: FunctionComponent<RadioType> = (
  props: RadioType
): ReactElement => {
  const { disabled, value } = props;
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent'
        }
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      disabled={disabled}
      value={value}
    />
  );
};

const BasicTable: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState<Person | null>(null);
  const [expended, setExpended] = useState<boolean | undefined>(false);
  const [value, setValue] = useState<string>('high');

  const setCollapseState = () => setExpended(!expended);
  const handleRadioButton = (event: any) => setValue(event.target.value);

  const handleChange = (id: string) => {
    const list: ListOfRecords[] = data?.list as ListOfRecords[];
    const index = list.findIndex((item: ListOfRecords) => item.id === id);
    list[index].markedAsHit = !list[index].markedAsHit;
    setData({ ...(data as Person), list });
  };

  useEffect(
    () =>
      // const fetchData = async () => {
      // const response = await fetch(``);
      // const newData = await response.json();
      // setData();
      // };
      // fetchData();

      setData({
        id: '6e010228-e6cb-4b66-89e8-1c363f060ac2',
        entityName: 'Rhona Jefferson',
        salutation: 'Mrs',
        nationality: 'Great Britain',
        dateOfBirth: '1959-04-21',
        entityType: 'individual',
        description: null,
        list: [
          {
            citizenship: 'GB',
            date_of_birth: '',
            icon_hints: {
              icon_hint: 'Some list',
              status: 'Active'
            },
            id: '2939426',
            markedAsHit: false,
            primary_name: 'Rhona Jefferson',
            score: '1',
            title: 'lorem ipsum dolor'
          }
        ]
      }),
    []
  );

  return (
    <Container>
      <Box mt={10} />
      <Paper elevation={1} square sx={{ p: 2 }}>
        {data ? (
          <>
            <Collapse in={expended} collapsedSize={40} sx={{ mb: 2 }}>
              <Box sx={{ mb: 4 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontSize: '24px', lineHeight: '29px' }}
                  >
                    {data?.entityName}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box sx={{ width: '20px', height: '20px' }}>
                      <img src="../image/path.png" alt="yellow circle" />
                    </Box>
                    <Box sx={{ cursor: 'pointer' }}>
                      {expended ? (
                        <KeyboardArrowDown onClick={setCollapseState} />
                      ) : (
                        <KeyboardArrowUp onClick={setCollapseState} />
                      )}
                    </Box>
                  </Stack>
                </Stack>
                <Grid container>
                  <Grid item container xs={12}>
                    <Grid item xs={1}>
                      <Typography
                        className="common-typography"
                        variant="h5"
                        sx={{ color: '#5C5C5C' }}
                      >
                        Salution
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        ml={7}
                        className="common-typography"
                        variant="h5"
                      >
                        {data.salutation}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs={1}>
                      <Typography
                        className="common-typography"
                        variant="h5"
                        sx={{ color: '#5C5C5C' }}
                      >
                        Date of Birth
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        ml={7}
                        className="common-typography"
                        variant="h5"
                      >
                        {data.dateOfBirth}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid item xs={1}>
                      <Typography
                        className="common-typography"
                        variant="h5"
                        sx={{ color: '#5C5C5C' }}
                      >
                        Nationality
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        ml={7}
                        className="common-typography"
                        variant="h5"
                      >
                        {data.nationality}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={{
                          color: '#767676',
                          padding: '16px !important',
                          paddingBottom: '22px !important',
                          fontSize: '12px',
                          lineHeight: '14px'
                        }}
                      >
                        Name of Customer
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Name on list
                        </Stack>
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Date of Birth
                        </Stack>
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Citizenship
                        </Stack>
                      </TableCell>
                      <TableCell
                        colSpan={4}
                        align="left"
                        className="head-cell-style"
                      >
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Name List
                        </Stack>
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          DJ Profile ID
                        </Stack>
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Score
                        </Stack>
                      </TableCell>
                      <TableCell align="left" className="head-cell-style">
                        <Stack direction="row" alignItems="center">
                          <Box className="cell-border" />
                          Mark as hit
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.list?.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="first-cell-style">
                          {data.entityName}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Box className="cell-border" />

                          {record.primary_name}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Box className="cell-border" />
                          {record.date_of_birth}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Box className="cell-border" />
                          {record.citizenship}
                        </TableCell>
                        <TableCell
                          colSpan={4}
                          align="left"
                          className="body-cell-style"
                        >
                          <Box className="cell-border" />
                          {record?.icon_hints?.icon_hint}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Box className="cell-border" />
                          {record.id}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Box className="cell-border" />
                          {record.score}
                        </TableCell>
                        <TableCell align="left" className="body-cell-style">
                          <Stack direction="row" alignItems="center">
                            <Box className="cell-border" />
                            <Switch
                              size="medium"
                              checked={record.markedAsHit}
                              onChange={() => handleChange(record.id as string)}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ mt: 2, mb: 4 }}>
                <Stack spacing={1} sx={{ color: '#5C5C5C' }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PermContactCalendarOutlined fontSize="small" />
                    <Typography className="sys-typo">System</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <EventAvailable fontSize="small" />
                    <Typography className="sys-typo">
                      2202.03.25 | 14:57
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: '6px',
                    fontSize: '18px',
                    lineHeight: '22px'
                  }}
                >
                  Decision & documentation of findings for positive hit*
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: '#5C5C5C',
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                >
                  Scope of customer due diligence
                </Typography>
                <FormControl sx={{ pl: 2 }}>
                  <RadioGroup row value={value} onChange={handleRadioButton}>
                    <FormControlLabel
                      value="high"
                      control={<BpRadio value="high" disabled={false} />}
                      label={
                        <Typography className="high-radio">HIGH</Typography>
                      }
                    />
                    <FormControlLabel
                      value="prohibited"
                      control={<BpRadio value="prohibited" disabled={false} />}
                      label={
                        <Typography className="prohibited-radio">
                          PROHIBITED
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Collapse>
            <Box p={1} mt={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box className="comment-box">
                  <Typography className="comment-box-typo-1">
                    Please Describe
                  </Typography>
                  <Typography className="comment-box-typo-2" variant="h6">
                    some example comment
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="h6"
                  className="collapse-view-btn"
                  onClick={setCollapseState}
                >
                  Collapse View
                </Typography>
              </Stack>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h5" color="text.secondary">
              Did not get data!
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};
export default BasicTable;
