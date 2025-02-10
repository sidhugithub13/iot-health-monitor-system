// Create dummy ECG data for graph
const ctx = document.getElementById('ecg-graph').getContext('2d');

const data = {
    labels: Array.from({ length: 50 }, (_, i) => i),
    datasets: [{
        label: 'ECG Signal',
        data: Array.from({ length: 50 }, () => Math.sin(Math.random() * Math.PI * 2) * 5 + 10),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'ECG Value'
                },
                min: 0,
                max: 20
            }
        }
    }
};

const ecgChart = new Chart(ctx, config);
