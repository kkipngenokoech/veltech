import { Button } from "@mui/material";

function LandingPage() {
  return (
    <div className="bg-hero-pattern bg-cover">
      <div className="flex items-center justify-center h-screen">
        <Button variant="contained" color="primary" className="text-black hover:text-white">
          Hello World
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
