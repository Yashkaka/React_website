import React from "react";
import './AdminPanel.css'
const AdminPanel=()=>{


    return (<>
    <section className="mainadmin">
    <div className="container mt-5">
  <h1 className="h3 mb-3">Dashboard</h1>
  <br/>
  <div className="row">
    <div className="w-100">
      <div className="row">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <form action="adminPanelInsert.php" method="post">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 text-primary">Job Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Job Profile</label>
                        <input type="text" className="form-control" id="job_profile" name="job_profile" placeholder="Job Profile" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Job Title</label>
                        <input type="text" className="form-control" id="job_title" name="job_title" placeholder="Job Title" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Job Type</label>
                        <input type="text" className="form-control" id="job_type" name="job_type" placeholder="Job Type" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Company Name</label>
                        <input type="text" className="form-control" id="company_name" name="company_name" placeholder="Company Name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Start Date</label>
                        <input type="date" className="form-control" id="start_date" name="start_date" placeholder="Start Date" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">End Date</label>
                        <input type="date" className="form-control" id="end_date" name="end_date" placeholder="End Date" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label htmlFor="website">Company Description</label>
                    <input type="textbox" className="form-control" id="company_description" name="company_description" placeholder="Company Description" />
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="button" id="submit" name="submit" className="btn btn-primary">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</section>

      </>)
}



  export default AdminPanel;