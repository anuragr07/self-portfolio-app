import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './SkillsGraph.scss';
import { Col, Row } from "react-bootstrap";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";

export default function SkillsGraph(){

    // TODO: Create dummy data and use it to display charts
    // TODO: Experiment multiple different type of charts
    
    // TODO: Create and get the data from Mongo
    
    const categories = [
        {
            category: 'Web Designing',
            skills: ['HTML5', 'CSS3', 'Bootstrap5', 'JS', 'React Bootstrap']
        },
        {
            category: 'Front-end Development',
            skills: ['ReactJS', 'Redux'],
        },
        {
            category: 'Back-end Development',
            skills: ['NodeJS', 'ExpressJS', 'Spring Boot', 'Java', 'Servlets', 'PHP']
        },
        {
            category: 'Databases',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL']
        },
        {
            category: 'Mobile App Development',
            skills: ['Android Development', 'UI/UX Designing', 'IOS Development']
        }
    ];

    const categoriesSeries = [
        {
            category: 'Web Designing',
            skills: ['10', '9.5', '9', '9.5', '8.5']
        },
        {
            category: 'Front-end Development',
            skills: ['8.5', '7'],
        },
        {
            category: 'Back-end Development',
            skills: ['9', '8.5', '8', '9.5', '8.5', '7']
        },
        {
            category: 'Databases',
            skills: ['8.5', '8', '7']
        },
        {
            category: 'Mobile App Development',
            skills: ['7.5', '0', '0']
        }
    ];
    
    const skills = ['HTML5/CSS3/JS', 'Java11', 'PHP', 'MySql', 'MongoDB', 'ReactJS', 'ExpressJS'];
    const series = {
        name: 'HTML', 
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