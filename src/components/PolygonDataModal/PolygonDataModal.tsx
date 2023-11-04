import {Button, Modal, TextField, Box, Typography, Select, MenuItem, Paper, ButtonGroup} from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info"; // Import the Info icon
import { alpha } from "@mui/material/styles";
import "./PolygonData.css";

type PolygonDataModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  polygonData: any;
};

export function PolygonDataModal({ isModalOpen, onClose: closeModal, polygonData }: PolygonDataModalProps) {
  const [formData, setFormData] = useState({
    mwPerDay: 100,
    panelType: "",
  });
  const polygonArea = 3543;
  const [panelCount, setPanelCount] = useState<number | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "panelType") {
      const panelCount = calculatePanelCount(value);
      setPanelCount(panelCount);
    }
  };

  const calculatePanelCount = (chosenPanelType: string) => {
    return 42;
  };

  const handleFormSubmit = () => {
    console.log("Submitted Data", formData);
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
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <Typography sx={{ mb: 2 }}>
            Area: {polygonArea} sq meters
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginBottom: '10%', alignItems: 'center' }}>
            <Typography sx={{ mb: 2 }}>
              Green energy building availability: 40%
            </Typography>
            <div style={{ width: '40%', height: '30px', backgroundColor: '#e0e0e0'}}>
              <div style={{ width: `40%`, height: '100%', backgroundColor: 'green' }}></div>
            </div>
          </div>
        </div>
        <form>
          <TextField
            label="MW/day to be generated"
            name="mwPerDay"
            type="number"
            value={formData.mwPerDay}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <div>
            <label>Panel Type:</label>
            <Select
              name="panelType"
              value={formData.panelType}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Select Panel Type</MenuItem>
              <MenuItem value="Type A">Type A</MenuItem>
              <MenuItem value="Type B">Type B</MenuItem>
              <MenuItem value="Type C">Type C</MenuItem>
            </Select>
          </div>
          {panelCount !== null && (
            <Paper sx={{ p: 2, bgcolor: alpha('#9bd78d', 0.5), color: 'white', mt: 2, marginBottom: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
              <InfoIcon sx={{ marginRight: '8px' }} /> {/* InfoIcon on the left */}
              Number of Panels Needed: {panelCount}
            </Paper>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleFormSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
