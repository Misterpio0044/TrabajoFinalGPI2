const GITHUB_REPO = "antruigon/oauth2-springboot-angular-googlesignin-poc";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getDeploymentMetrics() {
  const headers = {
    'Accept': 'application/vnd.github.v3+json'
  };
  
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/runs?status=success`, { headers });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.workflow_runs.length === 0) {
        console.log("No data found.");
        return;
    }

    data.workflow_runs.slice(0, 5).forEach(run => {
      const start = new Date(run.created_at);
      const end = new Date(run.updated_at);
      
      const durationMinutes = (end - start) / 1000 / 60; 
      
      console.log(`Run: ${run.name}`);
      console.log(`Date: ${start.toLocaleDateString()} ${start.toLocaleTimeString()}`);
      console.log(`Deployment Time (t): ${durationMinutes.toFixed(2)} minutes`);
      console.log("---------------------------------------------------");
    });
  } catch (error) {
    console.error("Script failed:", error.message);
  }
}

getDeploymentMetrics();
