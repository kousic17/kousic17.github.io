import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import { Fade } from "react-reveal";
import 'chartjs-plugin-labels'
import 'chartjs-plugin-datalabels'

const state = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React'],
    datasets: [
        {
            label: 'Skills',
            backgroundColor: [
                "#FF5733",
                "#2965F1",
                "#F0DB4F",
                "#61DBFB"
            ],
            hoverBackgroundColor: [
                "#B23C23",
                "#2050C0",
                "#A89937",
                "#4399AF"
            ],
            hoverBorderColor: [
                "#E5E5E5",
                "#E5E5E5",
                "#E5E5E5",
                "#E5E5E5"
            ],
            data: [45, 45, 30, 30],
            hoverBorderWidth: 4,
            borderWidth: 1.8,
        }
    ]
}

class Skills extends Component {
    render() {
        return (
            <div className="skill">
                <Fade bottom>
                <h1 className="career">Skills</h1>
                <div className="chart">
                    <h3>Technical Skills</h3> 
                    <Pie 
                        data={state}
                        width={6}
                        height={2}
                        options={{
                            legend: {
                                display: true,
                                position: 'top',
                                labels: {
                                    fontFamily: 'Open Sans',
                                    fontStyle: 'bold',
                                },
                            },
                            responsive: true,
                            aspectRatio: 1,
                            plugins: {
                                datalabels: {
                                    display: true,
                                    color: 'white',
                                    formatter: function(value, ctx) {
                                        let datasets = ctx.chart.data.datasets;
                                        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                                            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                                            let percentage = Math.round((value/sum)*100) + '%';
                                            return percentage;
                                        } 
                                    },
                                },
                            },
                            tooltips: {
                                enabled: false
                            }
                        }}
                    />
                </div>
                <div>
                    <h3>Soft Skills</h3>
                    <p className="para"><span>•</span><b>Communication</b>. Able to communicate, comprehend and act efficiently on instructions. 
                    Also have good listening skill to respond correctly based on the circumstances.
                    <br />
                    <span>•</span><b>Self-Motivated</b>. Having positive attitude and the initiative to work well. Reliable and commitment to fit efficiently into an organizational structure without the need for constant supervision.
                    <br />
                    <span>•</span><b>Responsibility</b>. Highly responsible and productive which proves my trustworthiness, discipline and motivation. Taking intiative to 
                    make improvements, accepting responsbility for any failures.
                    <br />
                    <span>•</span><b>Teamwork</b>. Working in team towards a common goal is my primary motto. Perceptive and receptive to the needs and responsibilities of others.
                    <br />
                    <span>•</span><b>Time Management</b>. Ability to work under pressure as well as within tight deadlines. Able to prioritise tasks and organise new tasks.</p>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Skills
