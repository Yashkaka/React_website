import React from "react";
import Data from  './Data.json';
import './About.css';
// import images from './images'
const About=()=>{


 


    return (<>
    



    <section className="AboutUs">
        <h2 className="team1"> Team</h2>
        <h3 className="team2"> Dedication. Expertise. Passion.</h3>
        {/* profile  starts */}
        <div className="container1">
    
            {
                Data.map(post=>{
                return (
                    <>
                             <div className="cards">
         <div className="profile-image">
                    {/* <img src={require(`${image.url}`)} alt={image.description} key={i} /> */}

           <img src={post.image} alt={"first user" }/> 
         </div>
         <div className="content">
           <p className="About_profile_name"> {post.name}</p>
           <h3 className="About_profile_position"> {post.position}</h3>
        
           <a className="about_social_links" href={post.linkedln}><i className="about_icon fa-brands fa-linkedin-in" /></a>
           <a className="about_social_links" href={post.mail}><i className="about_icon fa-regular fa-envelope" />
           </a>
         </div>
       </div>

                    
                    
                    
                    </>
                )


                }
                
                
                )
            }









        </div>
      </section>

   
    
    </>)
}


export default About;
