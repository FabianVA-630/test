<canvas id="dispersion"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('dispersion').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Lenguajes Visuales',
        'Gestión y Fabricación',
        'Territorios y Ciudadanías',
        'Gestión Estratégica'
      ],
      datasets: [
        {
          label: 'Mención I y S',
          data: [0, 16, 5, 3],
          backgroundColor: '#E07B54'
        },
        {
          label: 'Mención V y M',
          data: [13, 0, 2, 9],
          backgroundColor: '#5B8DB8'
        },
        {
          label: 'Ambas menciones',
          data: [6, 2, 12, 7],
          backgroundColor: '#6DBF8A'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        x: {
          stacked: false
        },
        y: {
          stacked: false,
          beginAtZero: true,
          title: {
            display: true,
            text: 'N° de electivos'
          }
        }
      }
    }
  });
</script>
<canvas id="otro"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx2 = document.getElementById('otro').getContext('2d');

  new Chart(ctx2, {
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
