import React from 'react';
import Welcome from "./Welcome";
import ProductFeatures from "./ProductFeatures";
import Workflows from "./Workflows";
import TrainingModules from "./TrainingModules";
import FeedbackSupport from "./FeedbackSupport";
import ProgressTracking  from "./ProgressTracking";

function Dashboard() {
  return (
    <div>
      <Welcome />
      <ProductFeatures />
      <Workflows />
      <TrainingModules />
      <FeedbackSupport />
      <ProgressTracking />
    </div>
  );
}

export default Dashboard;
