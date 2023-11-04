import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { Line, Pie } from 'react-chartjs-2';

type AnalyticsModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

export default function AnalyticsModal({ isModalOpen, onClose: closeModal }: AnalyticsModalProps) {
  // Sample line chart data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings Overview',
        data: [200, 300, 450, 400, 600, 550],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Sample pie chart data
  const pieChartData = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1'],
        borderWidth: 1,
      },
    ],
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
        marginLeft: '10px',
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: 'white',
          p: 3,
          borderRadius: 2,
        }}
      >
        <div>
          <h3>Earnings Overview</h3>
          <Line data={lineChartData} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <h3>Revenue Sources</h3>
          <Pie data={pieChartData} />
        </div>
      </Box>
    </Modal>
  );
}
