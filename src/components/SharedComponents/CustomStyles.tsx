// Add custom styles for smooth animations and scrollbar
const CustomStyles = () => (
  <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    body {
      font-family: 'Inter', sans-serif;
    }

    /* Custom Scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent; /* Transparent track by default */
      border-radius: 10px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: transparent; /* Invisible thumb by default */
      border-radius: 10px;
    }

    /* Show scrollbar thumb and track on hover over the scrollable area */
    .custom-scrollbar:hover::-webkit-scrollbar-thumb {
      background: #888; /* Visible thumb on hover */
    }

    .custom-scrollbar:hover::-webkit-scrollbar-track {
      background: #f1f1f1; /* Visible track on hover */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555; /* Darken thumb on direct thumb hover */
    }
    `}
  </style>
);

export default CustomStyles;