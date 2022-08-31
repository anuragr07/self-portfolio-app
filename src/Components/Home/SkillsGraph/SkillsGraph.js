import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './SkillsGraph.scss';
import { Col, Row } from "react-bootstrap";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";

export default function SkillsGraph(){

    const skills = ['HTML5/CSS3/JS', 'Java11', 'PHP', 'MySql', 'MongoDB', 'ReactJS', 'ExpressJS'];
    const series = {
        name: 'Skill Level', 
        data: [ 10, 9.5, 7, 9.5, 8, 8.5, 8]
    };

    const seriesWithColor = generateSeriesDataWithColor(series);

    // Randomly generate colors 
    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }

    // Generate the data with random color
    function generateSeriesDataWithColor(seriesData){ 

        const data = seriesData.data;

        const dataArray = data.map((item) => {
            let color = generateRandomColor();
            while(color === "#FFFFFF"){
                color = generateRandomColor();
            }

            let dataObj = {
                y: item,
                color: color
            }

            return dataObj;
        })


        let seriesWithColor = {
            name: 'Skill Level',
            data: dataArray
        }
    
        // setSeries(seriesWithColor);
        return seriesWithColor;
    }

    // Options for the graph
    let options = {
        chart: {
            type: 'bar',
            height: 400
        },
        title: {
            align: 'left',
            text: 'Skills represented'
        },
        xAxis: {
            categories: skills,
            visible: true,
            type: 'Skills categorised',
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'Skill Level',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            },
            column: {
                colorByPoint: true
            }
        },
        colors: [
            '#ff0000',
            '#00ff00',
            '#0000ff',
            '#0000ff',
            '#0000ff',
            '#0000ff',
            '#0000ff'
        ],
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        series: [seriesWithColor]
    } 

    return (
        <Row>
            <Col md={3}>
                <HeadingMain name="This is Legend"></HeadingMain>
            </Col>
            <Col md={9}>
                <HighchartsReact highcharts={Highcharts} options={options} className="chart"></HighchartsReact>
            </Col>
        </Row>
    )
}