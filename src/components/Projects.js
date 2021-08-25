import React from 'react'
import Project from './Project'
import "../styles/Projects.css";

function Projects() {
  var projectsinfo = [
    {name: 'Stocking', link:'https://pbyakod.github.io/stocking/', image:'./stocking.gif'},
    {name: 'Weather Forecast', link:'https://eycs0317.github.io/weatherDashboard/', image:'./weather.gif'},
    {name: 'Code Quiz', link:'https://eycs0317.github.io/codeQuiz/', image:'./codeQuiz.gif'},
    {name: 'Work Day Scheduler', link:'https://eycs0317.github.io/workDayScheduler/', image:'./workDayScheduler.gif'},
    {name: 'My Books', link:'https://mysterious-sands-50704.herokuapp.com/', image:'./mybook.png'},
    {name: 'Budget Tracker', link:'http://safe-dawn-09889.herokuapp.com/', image:'./budget.png'}
  ]
  return (

      <div class="container">
        <div class="row">
          {projectsinfo.map((info,index) => {
        return <Project key={index} info={info}/>
      })}
        </div>
      </div>



    /* <section className="section">
      <h2 className="title" id="work">Work</h2>
      <div className="work-content">
      {projectsinfo.map((info,index) => {
        return <Project key={index} info={info}/>
      })}

      </div>
    </section> */
  )
}

export default Projects