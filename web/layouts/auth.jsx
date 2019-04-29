import React from 'react';
import '../styles/index.scss';

const AuthLayout = ({ children }) => (
  <div className="container p-5">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card border-0 p-4 bg-light">
          <div className="my-3 text-center">
            <h3>briefgenius</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;

AuthLayout.propTypes = {};