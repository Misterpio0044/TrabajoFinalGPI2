// scripts/measure-deployment.js
const fetch = require('node-fetch'); // Asegúrate de tener node-fetch instalado o usa fetch nativo de Node 18+

const GITHUB_REPO = "TU_USUARIO/TU_REPO";
// Token opcional si es público, necesario si es privado
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 

async function getDeploymentMetrics() {
  const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/runs?status=success`, {
    headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}` }
  });
  const data = await response.json();

  console.log("--- Métricas de Tiempo de Despliegue (t) ---");
  
  data.workflow_runs.forEach(run => {
    const start = new Date(run.created_at);
    const end = new Date(run.updated_at);
    // Cálculo de t: diferencia entre inicio y fin del pipeline
    const durationMinutes = (end - start) / 1000 / 60; 
    
    console.log(`Run: ${run.name} | Fecha: ${run.created_at} | Tiempo (t): ${durationMinutes.toFixed(2)} minutos`);
  });
}

getDeploymentMetrics();
