
export default
function Course({title,price,isNew}){
    //
    const name="Linux Tutorial"
  
    return(
      <div className='course'>
        <h4>{title ?? 'Untitled course'}</h4>
        <div className='course-info'>
          <p style={{color:'#ff0'}}>{isNew && 'New' }</p>
          <p style={{color:'#ddd'}}>Price:{price>0 ? `$ ${price}` :"FREE"}</p>
        </div>
      </div>
    )
  }