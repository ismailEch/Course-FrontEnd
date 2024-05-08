import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ModalVideo = ({ open, onClose, videoUrl }) => (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75%',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
      }}>
        {/* Removed the "Video" text */}
        <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
        <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">Close</button>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <video width="100%" controls> {/* Set width to 100% */}
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </Typography>
      </Box>
    </Modal>
  );
  

function SingleContent() {
  const { courseId } = useParams();
  const [sections, setSections] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = React.useState('');

  React.useEffect(() => {
    axios.get(`http://localhost:3000/api/course/detail/${courseId}`)
      .then(response => {
        const lectures = response.data.lectures;
        console.log(lectures)
        const sectionsMap = {};
        lectures.forEach(lecture => {
          const sectionTitle = lecture.section.title;
          if (!sectionsMap[sectionTitle]) {
            sectionsMap[sectionTitle] = [];
          }
          sectionsMap[sectionTitle].push(lecture);
        });
        const sectionsArray = Object.entries(sectionsMap).map(([title, lectures]) => ({
          title,
          lectures
        }));
        setSections(sectionsArray);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [courseId]);

  const handleClick = (lecture) => {
    if (lecture.resource.endsWith('.mp4')) {
      setSelectedVideoUrl(lecture.resource);
      setOpen(true);
    } else {
      // Handle other types of resources, e.g., navigate to lecture details page
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <div class="flex items-center justify-center h-screen">
      <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
      </div>
    </div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div class=""> 
      <div class="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-4  relative p-8">
        <Typography variant="h4" component="h1" class="text-center text-xl text-blue-500">Course Content</Typography> {/* Blue title */}
        <div class="mt-6 pt-12 max-w-xl mx-auto w-full">
          <div x-data="{ openIndex: null }">
            <div class="border rounded-md overflow-hidden">
              {sections.map((section, index) => (
                <div key={index}>
                  <Accordion>
                    <AccordionSummary aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                      <Typography>{section.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {section.lectures.map((lecture, lectureIndex) => (
                          <li key={lecture._id} onClick={() => handleClick(lecture)} class="text-orange-500 hover:pointer"> {/* Orange color and pointer cursor on hover */}
                            {lecture.title}
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo open={open} onClose={handleClose} videoUrl={selectedVideoUrl} />
    </div>
  );
}

export default SingleContent;
