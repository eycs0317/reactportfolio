import React from 'react'
import Project from './Project'
import "../styles/Projects.css";

function Projects() {
  var projectsinfo = [
    {name: 'Stocking', link:'https://pbyakod.github.io/stocking/', image:'./stocking.gif', github:'https://github.com/eycs0317/stocking'},
    {name: 'Weather Forecast', link:'https://eycs0317.github.io/weatherDashboard/', image:'./weather.gif', github:'https://github.com/eycs0317/weatherDashboard'},
    {name: 'Code Quiz', link:'https://eycs0317.github.io/codeQuiz/', image:'./codeQuiz.gif', github:'https://github.com/eycs0317/codeQuiz'},
    {name: 'Work Day Scheduler', link:'https://eycs0317.github.io/workDayScheduler/', image:'./workDayScheduler.gif', github:'https://github.com/eycs0317/workDayScheduler'},
    {name: 'My Books', link:'https://mysterious-sands-50704.herokuapp.com/', image:'./mybook.png', github:'https://github.com/eycs0317/MyBooks'},
    {name: 'Budget Tracker', link:'http://safe-dawn-09889.herokuapp.com/', image:'./budget.png', github:'https://github.com/eycs0317/Budget-Trackers'}
  ]
  return (

      <div class="container">
      <h2>Work</h2>
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