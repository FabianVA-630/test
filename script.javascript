<canvas id="TripleBarras"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('TripleBarras').getContext('2d');

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
<canvas id="BarrasApiladas"></canvas>

<script>
  const ctx2 = document.getElementById('BarrasApiladas').getContext('2d');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: [
        'Percepción y Semiótica',
        'Curaduría y Narrativas del Conocimiento',
        'Experimentación y Crítica',
        'Biomateriales y Ciclo de Vida',
        'Manufactura y Gestión',
        'Ergonomía y Estructuras Biomecánicas',
        'Patrimonio e Identidades Locales',
        'Hábitat y Diseño Regenerativo',
        'Diseño Social y Metodologías Inclusivas',
        'Estrategia y Gestión de Valor',
        'Interacción y Experiencia',
        'Ética y Políticas del Diseño'
      ],
      datasets: [
        {
          label: 'Mención I y S',
          data: [0, 0, 0, 5, 5, 5, 1, 4, 0, 2, 1, 0],
          backgroundColor: '#E07B54'
        },
        {
          label: 'Mención V y M',
          data: [3, 7, 2, 0, 0, 0, 1, 0, 1, 0, 5, 4],
          backgroundColor: '#5B8DB8'
        },
        {
          label: 'Ambas menciones',
          data: [3, 0, 3, 1, 0, 0, 4, 3, 5, 4, 1, 2],
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
          stacked: true
        },
        y: {
          stacked: true,
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
