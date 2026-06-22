<canvas id="grafico3"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('grafico3').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Estrategia, Gestión y Valor Económico',
        'Territorio, Ciudadanía y Hábitat Sostenible',
        'Morfología, Percepción y Lenguajes Visuales',
        'Tecnología Aplicada, Proyectos y Nuevos Medios',
        'Patrimonio, Cultura y Pensamiento Crítico',
        'Innovación Social y Procesos Participativos',
        'Comunicación Estratégica, Datos y Fotografía'
      ],
      datasets: [{
        label: 'Electivos de Ambas Menciones (Paso 3)',
        data: [5, 5, 4, 3, 3, 2, 1],
        backgroundColor: '#6DBF8A'
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          beginAtZero: true,
          title: { display: true, text: 'N° de electivos' }
        }
      }
    }
  });
</script>