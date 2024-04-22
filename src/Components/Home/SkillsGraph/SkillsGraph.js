import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './SkillsGraph.scss';
import { Col, ListGroup, Row } from "react-bootstrap";
import HeadingLevel3 from "../../Heading/HeadingLevel3/HeadingLevel3";
import { useState } from "react";

export default function SkillsGraph(){

    const [skills, setSkills] = useState([]);
    const [category, setCategory] = useState('Web Designing'); // Initialize with a default category

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
            name: 'Web Designing',
            data: [10, 9.5, 9, 9.5, 8.5]
        },
        {
            name: 'Front-end Development',
            data: [8.5, 7],
        },
        {
            name: 'Back-end Development',
            data: [9, 8.5, 8, 9.5, 8.5, 7]
        },
        {
            name: 'Databases',
            data: [8.5, 8, 7]
        },
        {
            name: 'Mobile App Development',
            data: [7.5, 0, 0]
        }
    ];

    const generateRandomColor = () => {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }

    const generateSeriesDataWithColor = (seriesData) => {
        const dataArray = seriesData.map((item) => {
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

        return seriesWithColor;
    }

    const changeGraph = (category) => {
        // const newData = categoriesSeries.find(item => item.name === category)?.data || [];
        // setData(newData);

        const newSkills = categories.find(item => item.category === category)?.skills || [];
        setSkills(newSkills);

        setCategory(category);
    }

    let seriesWithColor = generateSeriesDataWithColor(categoriesSeries.find(item => item.name === category)?.data || []);

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
                <HeadingLevel3 name="Categories"></HeadingLevel3>
                <ListGroup defaultActiveKey="#link1">
                    {categories.map((cat, index) => (
                        <ListGroup.Item key={index} action onClick={() => changeGraph(cat.category)}>{cat.category}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col md={9}>
                <HighchartsReact highcharts={Highcharts} options={options} className="chart"></HighchartsReact>
            </Col>
        </Row>
    )
}
