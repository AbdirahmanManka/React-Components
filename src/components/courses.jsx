import Course from "./course"
export default
function Courses(){
    return (
      <div className='courses'>
        <Course title='C' price="0" isNew={true}/>
        <Course title='C++' price="0" isNew={true}/>
        <Course title='Java' price="1000" isNew={true}/>
  
        <Course title='Python' price="1900" isNew={true}/>
  
        <Course title='DBMS' price="2000" isNew={true}/>
  
  
      </div>
    )
  }