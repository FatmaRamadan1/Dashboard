import React from 'react';
import Styles from './profile.module.css';

export default function Profile() {
  return (
//    
  <div className={Styles.container}>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
    <div class="container bootstrap snippets bootdeys">
      <div class="row">
        <div class="col-xs-12 col-sm-9">
          <form class="form-horizontal">
              <div class="panel panel-default">
                <div class="panel-body text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-circle profile-avatar" alt="User avatar"/>
                </div>
              </div>
            <div class="panel panel-default">
              <div class="panel-heading">
              <h4 class="panel-title">User info</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Name</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Channel name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control"/>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
              <h4 class="panel-title">Security</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Current password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">New password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2 ">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="reset" class="btn btn-default">Cancel</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
	</div>


  )
}
