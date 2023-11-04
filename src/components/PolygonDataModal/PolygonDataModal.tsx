import {Button, Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";

type PolygonDataModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  polygonData: any;
}

export function PolygonDataModal({ isModalOpen, onClose: closeModal, polygonData }: PolygonDataModalProps){
  console.log('polygonData', polygonData);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    const submittedData = {
      field1: formData.field1,
      field2: formData.field2,
    };

    closeModal();
  };


  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        marginLeft: '10px'
      }}
    >
      <Box sx={{
        width: 400,
        bgcolor: 'white',
        p: 3,
        borderRadius: 2,
      }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Enter Data
        </Typography>
        <form>
          <TextField
            label="Data Field 1"
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Data Field 2"
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Button variant="contained" color="primary" fullWidth onClick={handleFormSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  )
}